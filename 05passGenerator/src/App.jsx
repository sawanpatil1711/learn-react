import { useCallback, useEffect, useState, useRef, use } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [charAllow, setCharAllow] = useState(false);
  const [numAllow, setNumAllow] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const generatePassword = useCallback(() => {
    let password = "";
    let charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numAllow) charList += "0123456789";
    if (charAllow) charList += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    for (let i = 1; i <= length; i++) {
      const charIndex = Math.floor(Math.random() * charList.length + 1);
      password += charList.charAt(charIndex);
    }
    setPassword(password);
  }, [length, charAllow, numAllow, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, charAllow, numAllow, generatePassword]);


  return (
    <>
      <div className="h-screen flex justify-center bg-gray-600">
        <div className="h-60 w-3xl flex flex-col justify-center items-center my-5 p-5 text-white bg-gray-800 rounded-3xl">
          <h1 className="text-2xl font-bold">Password Generator</h1>
          <div className="my-5 flex items-center">
            <input
              type="text"
              placeholder="Generated Password"
              value={password}
              readOnly
              ref={passwordRef}
              className="bg-gray-700 outline-none rounded-l-md p-2 w-md"
            />
            <button
              onClick={copyPassword}
              className="rounded-r-md p-2 cursor-pointer hover:bg-blue-600 flex justify-center items-center h-10 bg-blue-500"
            >
              copy
            </button>
          </div>
          <div className="my-3 flex items-center">
            <div>
              <input
                type="range"
                min="8"
                max="100"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label className="ml-2">Length: {length}</label>
            </div>
            <div className="gap-3 ml-5 flex items-center">
              <input
                className="cursor-pointer"
                type="checkbox"
                defaultChecked={numAllow}
                id="numAllow"
                onChange={() => setNumAllow((prev) => !prev)}
              />
              <label
                className="cursor-pointer hover:text-blue-500"
                htmlFor="numAllow"
              >
                Include Numbers
              </label>
            </div>
            <div className="gap-3 ml-5 flex items-center">
              <input
                className="cursor-pointer"
                type="checkbox"
                defaultChecked={charAllow}
                id="charAllow"
                onChange={() => setCharAllow((prev) => !prev)}
              />
              <label
                className="cursor-pointer hover:text-blue-600"
                htmlFor="charAllow"
              >
                Include Symbols
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
