import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  // const addUserHandler = (userDetails) => {
  //   setUsersList((prevUsersList) => {
  //     return [
  //       ...prevUsersList,
  //       { id: Math.random().toString(), ...userDetails },
  //     ];
  //   });
  // };
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  const removeDetailsHandler = (userDetailsId) => {
    setUsersList(prevUsersList =>
      prevUsersList.filter(details => details.id !== userDetailsId)
    );
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onRemoveItem={removeDetailsHandler} />
    </div>
  );
}

export default App;