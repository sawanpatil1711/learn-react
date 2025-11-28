import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Home, About, Contact, User, Github } from './component';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { dataLoader } from './component/Github/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: ([
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "contact", element: <Contact /> },
//       { path: "user/:userId", element: <User /> },
//       { path: "github", loader: dataLoader, element: <Github /> }
//     ])
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route path='github' loader={dataLoader} element={<Github />} />
    </Route> 
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <RouterProvider router={router} />
  </StrictMode>,
)
