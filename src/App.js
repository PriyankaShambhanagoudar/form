import React, { useState } from "react";
import User from "./component/user/user";
import UserList from "./component/user/userList";


function App() {
  const [userList, serUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    serUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };
  return (
    <div  >
      <User onAddUser={addUserHandler} />
      <UserList user={[userList]} />
    </div>
  );
}

export default App;
