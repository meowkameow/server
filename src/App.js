import React from "react";
import './App.css';

function App() {
  const [users, setUsers] = React.useState();

  const getUsers =() =>{
    fetch('https://6399f0b416b0fdad774ecea0.mockapi.io/users').then((res) =>{
      res.json().then((result) =>{
        setUsers(result);
      });
    });
  };

  return (
    <div className="App">
        <ul>
          {users?.map((obj)=> (
              <li key={obj.id}>Имя: {obj.firstName} Почта: {obj.email}</li>
          ))}
        </ul>
      <button onClick={getUsers}>Получить список пользователей</button>
    </div>
  );
}

export default App;
