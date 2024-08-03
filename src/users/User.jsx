//send id from child component to parent component as probs
import React from "react";

const Users = ({ name, id, removeUsers /*dont recieve any argument */ }) => {
  return (
    <>
      <li>
        {name}
        <button onClick={() => removeUsers(id)}>remove</button>
      </li>
    </>
  );
};

export default Users;
