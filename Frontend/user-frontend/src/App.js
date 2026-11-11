import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [currentView, setCurrentView] = useState('list'); // 'list' or 'form'
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddNew = () => {
    setSelectedUser(null);
    setCurrentView('form');
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setCurrentView('form');
  };

  const handleSaveSuccess = () => {
    setCurrentView('list');
    setSelectedUser(null);
  };

  const handleCancel = () => {
    setCurrentView('list');
    setSelectedUser(null);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        {currentView === 'list' ? (
          <UserList onEditUser={handleEditUser} onAddNew={handleAddNew} />
        ) : (
          <UserForm
            selectedUser={selectedUser}
            onSaveSuccess={handleSaveSuccess}
            onCancel={handleCancel}
          />
        )}
      </div>
    </div>
  );
}

export default App;























// import axios from "axios";
// import { useEffect, useState } from "react";

// function App() {

//   const [users, setUsers] = useState([]);

//   useEffect(() => {

//     axios
//       .get("http://localhost:8080/api/users")
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });

//   }, []);

//   return (
//     <div>
//       <h1>User Management System</h1>

//       <h2>User List</h2>

//       {users.map(user => (
//         <div key={user.id}>
//           <p>
//             {user.name} - {user.email} - {user.role}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;