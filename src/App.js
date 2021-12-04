import { useState } from 'react';
import './App.css';
import PhoneBookForm from './components/PhoneBookForm';
import PhoneList from './components/PhoneList';

function App(props) {
  const [users, setUsers] = useState([])

  const addToPhoneBook = (user) => {
    setUsers([...users, user])
  }


  return (
    <div className="App">
      <PhoneBookForm addToPhoneBook={addToPhoneBook} />
      <PhoneList users={users} />
    </div>
  );
}

export default App;
