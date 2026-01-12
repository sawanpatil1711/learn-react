# Todo List Project Code Explanation

## Overview
This is a React-based Todo List application that allows users to add, edit, delete, and mark todos as completed. The app uses React Context for state management and localStorage for persistence.

## Project Structure
```
src/
├── App.jsx              # Main app component with state management
├── component/
│   ├── TodoForm.jsx     # Form for adding new todos
│   └── TodoItem.jsx     # Individual todo item component
├── context/
│   ├── index.js         # Context exports
│   └── TodoContext.js   # React Context for todo state
└── App.css              # Styling
```

## App.jsx - Main Application Component

### State Management
```javascript
const [todos, setTodos] = useState([])
```
- `todos`: Array storing all todo items
- Each todo object has: `{ id, todo, completed }`

### Core Functions

#### addTodo(todo)
```javascript
const addTodo = (todo) => {
  setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos])
}
```
- Adds a new todo to the beginning of the array
- Generates unique ID using `Date.now()`
- Spreads the todo object properties

#### updateTodo(id, updatedTodo)
```javascript
const updateTodo = (id, updatedTodo) => {
  setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? updatedTodo : prevTodo)))
}
```
- Maps through todos array
- Replaces the todo with matching id with updatedTodo
- Keeps other todos unchanged

#### deleteTodo(id)
```javascript
const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id))
}
```
- Filters out the todo with the specified id
- Returns new array without the deleted todo

#### toggleCompleted(id)
```javascript
const toggleCompleted = (id) => {
  setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
}
```
- Maps through todos
- Toggles the `completed` property for the matching id
- Uses spread operator to preserve other properties

### Persistence with localStorage

#### Loading todos on mount
```javascript
useEffect(() => {
  const effTodos = JSON.parse(localStorage.getItem("localTodos"))
  if (effTodos?.length > 0) setTodos(effTodos)
}, []);
```
- Runs once when component mounts
- Parses stored todos from localStorage
- Sets them to state if they exist

#### Saving todos on change
```javascript
useEffect(() => {
  localStorage.setItem("localTodos", JSON.stringify(todos))
}, [todos]);
```
- Runs whenever `todos` state changes
- Stringifies the todos array and saves to localStorage

### Context Provider
```jsx
<TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}>
```
- Provides todo state and functions to child components
- Uses React Context API for global state management

## TodoForm.jsx - Add Todo Form

### State
```javascript
const [todo, setTodo] = React.useState("");
```
- Local state for the input field value

### Form Submission
```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  if (!todo) return;
  addTodo({todo, completed: false});
  setTodo("");
}
```
- Prevents default form submission
- Validates that todo text is not empty
- Calls `addTodo` from context with new todo object
- Resets input field

### UI Elements
- Text input with placeholder "Write Todo..."
- Submit button styled with green background
- Form uses flexbox layout with rounded corners

## TodoItem.jsx - Individual Todo Display

### State
```javascript
const [isTodoEditable, setIsTodoEditable] = React.useState(false);
const [todoMsg, setTodoMsg] = React.useState(todo.todo)
```
- `isTodoEditable`: Controls whether the todo text can be edited
- `todoMsg`: Local state for the todo text (for editing)

### Functions

#### editTodo()
```javascript
const editTodo = () => {
  if (!todoMsg) return;
  updateTodo(todo.id, { ...todo, text: todoMsg });
  setIsTodoEditable(false);
}
```
- Validates that todoMsg is not empty
- Calls `updateTodo` with updated text
- Note: There's an inconsistency here - the todo object uses `todo` as key, but this passes `text`

#### toggle()
```javascript
const toggle = () => {
  toggleCompleted(todo.id)
}
```
- Calls the toggleCompleted function from context

### UI Elements

#### Checkbox
```jsx
<input
  type="checkbox"
  checked={todo.completed}
  onChange={toggle}
/>
```
- Checked state reflects `todo.completed`
- onChange calls toggle function

#### Text Input
```jsx
<input
  type="text"
  value={todoMsg}
  onChange={(e) => setTodoMsg(e.target.value)}
  readOnly={!isTodoEditable}
/>
```
- Value bound to `todoMsg` state
- Read-only when not in edit mode
- Updates local state on change

#### Edit/Save Button
```jsx
<button onClick={() => {
  if (todo.completed) return;
  if (isTodoEditable) {
    editTodo();
  } else setIsTodoEditable((prev) => !prev);
}}>
  {isTodoEditable ? "📁" : "✏️"}
</button>
```
- Disabled for completed todos
- Toggles edit mode or saves changes
- Shows different icons based on state

#### Delete Button
```jsx
<button onClick={() => deleteTodo(todo.id)}>
  ❌
</button>
```
- Calls deleteTodo with the todo's id

### Styling
- Conditional background color based on completion status
- Green background for completed todos (`bg-[#c6e9a7]`)
- Purple background for incomplete todos (`bg-[#ccbed7]`)
- Strike-through text for completed todos

## TodoContext.js - Context Setup

### Context Creation
```javascript
const TodoContext = createContext({
  todos: [
    {
      id: 1,
      text: "Sample Todo",
      completed: false
    }
  ],
  addTodo: (todo) => { },
  deleteTodo: (id) => { },
  updateTodo: (id, todo) => { },
  toggleCompleted: (id) => { }
});
```
- Creates context with default values
- Note: Default shows `text` but actual usage uses `todo`

### Exports
```javascript
export const TodoProvider = TodoContext.Provider;
export const useTodoContext = () => useContext(TodoContext);
```
- `TodoProvider`: The context provider component
- `useTodoContext`: Custom hook to access context

## Key Concepts Demonstrated

1. **React Hooks**: useState, useEffect, useContext
2. **Context API**: For global state management
3. **Local State vs Global State**: Form inputs use local state, todos use global state
4. **Conditional Rendering**: Edit mode, completion status
5. **Event Handling**: Form submission, button clicks, input changes
6. **Array Methods**: map, filter for state updates
7. **Persistence**: localStorage for data persistence
8. **Component Composition**: Breaking UI into reusable components
9. **Props**: Passing data down to child components
10. **Styling**: Tailwind CSS classes for responsive design

## Potential Improvements

1. **Consistency**: Standardize property names (todo vs text)
2. **Error Handling**: Add try-catch for localStorage operations
3. **Validation**: More robust input validation
4. **Accessibility**: Add ARIA labels, keyboard navigation
5. **Performance**: Use useCallback for functions if needed
6. **Types**: Add TypeScript for better type safety