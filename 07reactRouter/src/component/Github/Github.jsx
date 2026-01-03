import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const dataLoader= async()=>{
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json();
}

function Github() {
  const data = useLoaderData();
  
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         });
    // }, []);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold bg-gray-700 text-white p-4">Github Followers: {data.followers}
        <img className="w-32 h-32 " src={data.avatar_url} alt="profile-avatar" />
      </h1>
      
    </div>
  );
}

export default Github;

