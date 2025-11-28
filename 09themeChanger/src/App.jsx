import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import ThemeBtn from './component/ThemeBtn'
import Card from './component/card'

function App() {

  const [themeMode, setThemeMode] = useState("light");

  const darktheme = () => setThemeMode("dark");
  const lighttheme = () => setThemeMode("light");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);

  }, [themeMode]);
  return (
    <ThemeProvider value={{themeMode, darktheme, lighttheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App