import React from 'react'
import { useState } from "react"
import { Box } from "@mui/material"
import AddUserForm from './components/forms/AddUserForm';
import UserTable from './components/UserTable'
import EditUserForm from './components/forms/EditUserForm';

// import './App.css';

function App() {

  const usersData = [
    { id: 1, name: "Lokesh", username: "Loki24" },
    { id: 2, name: "Ajin", username: "Ajin34cs" },
    { id: 3, name: "Abishake", username: "Abiabishake87" },
  ];

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user])
}

  const deleteUser = (id) => {
    setUsers(users.filter((user)=>user.id!== id))
    setEditing(false);
  }

  const [users, setUsers] = useState(usersData);

  const [editing, setEditing] = useState(false)

   const initialFormState = { id: null, name: "", value: "" };
const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({id:user.id, name:user.name, username:user.username})
  }
  

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
}

  return (
    <div className="container">
      <h1
        style={{
          align: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        CURD APP
      </h1>
      <div
        className="flex-row"
        style={{
          display: "flex",
          flexDirection: "row",
          align: "center",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
            align: "center",
            alignItems: "center",
            gap: 30,
            bgcolor: "#bbdefb",
            padding: 10,
          }}
        >
          <div className="flex-large">
            {editing ? (
              <div>
                {" "}
                <h2>Edit User</h2>
                <EditUserForm
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2
                  style={{
                    align: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    marginTop: { xs: -60, sm: -60 },
                  }}
                >
                  Add User
                </h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
          </div>
          <div className="flex-large">
            <h2
              style={{
                align: "center",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              View Users
            </h2>
            <UserTable
              editRow={editRow}
              deleteUser={deleteUser}
              users={users}
            />
          </div>
        </Box>
      </div>
    </div>
  );
}

export default App;
