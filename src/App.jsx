import { useState, useEffect } from "react";
import User from "./users/User";
function App() {
  const [users, setusers] = useState([
    { id: 1, name: "ali" },
    { id: 2, name: "hosein" },
    { id: 3, name: "hamid" },
    { id: 4, name: "kasra" },
    { id: 5, name: "mohsen" },
  ]);
  const removeUserp = (id) => {
    setusers(users.filter((user) => user.id !== id));
  };
  //this function must hier(parent component) to be defined

  return (
    <>
      <ul>
        {users.map((user) => (
          <User
            {...user}
            /*id={user.id} name={user.name}*/
            removeUsers={removeUserp} //dont send any argument
            key={user.id}
          ></User>
        ))}
      </ul>
    </>
  );
}

export default App;
