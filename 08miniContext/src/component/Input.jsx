import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";
 function Input() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    };
  return (
    <>
      <input style={{ marginBottom: "10px" }} type="text"
       value={username} 
       onChange={(e) => setUsername(e.target.value)} 
       placeholder="UserName"/>
       <br />
      <input style={{ marginBottom: "10px" }} type="text"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       placeholder="Password"/>
       <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Input;
