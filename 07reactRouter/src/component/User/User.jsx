import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1 className=" text-center text-3xl font-bold bg-gray-700 text-white p-4">User Id : {userId}</h1>
    </div>
  );
};

export default User;
