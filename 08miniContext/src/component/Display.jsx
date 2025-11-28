import React from "react";
import UserContext from "../context/UserContext";
 function Display() {
    const { user } = React.useContext(UserContext)
   return (
       <div>
           <h2>User Information</h2>
           {user ? (
               <div>
                   <p>Username: {user.username}</p>
                   <p>Password: {user.password}</p>
               </div>
           ) : (
               <p>No user information available</p>
           )}
       </div>
   );
}
export default Display;