import React from "react";
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = React.useState();

  const getUsers = async () =>{
      const res = await axios.get('https://6399f0b416b0fdad774ecea0.mockapi.io/users');
      setUsers(res.data);
  };

  const uploadFile = () =>{
      const fileElem = document.querySelector('#file');
      const file = fileElem.files[0];

      const formData = new FormData();
      formData.append('file', file );

      axios?.post('http://localhost:9999', formData, {
          headers : {
              'Content-Type' : 'multipart/form-data',
          },
      });
  }

  return (
    <div className="App">
        <div>
        <ul>
          {users?.map((obj)=> (
              <li key={obj.id}>Имя: {obj.firstName} Почта: {obj.email}</li>
          ))}
        </ul>
      <button onClick={getUsers}>Получить список пользователей</button>
        </div>
        <br/>
        <br/>
        <hr/>
        <div>
            <h4>Загрузить файл</h4>
            <input id='file' type='file'/>
            <button onClick={uploadFile}>Загрузить</button>
        </div>
    </div>
  );
}

export default App;
