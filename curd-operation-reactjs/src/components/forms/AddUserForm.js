import React from 'react'
import { useState } from 'react'

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", value: "" }
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target
    
    setUser({...user, [name]:value})
}

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        align: "center",
        alignItems: "center",
      }}
    >
      <div>
        <label>
          <h4>Name</h4>
        </label>
        <input
          type="text"
          onChange={handleInputChange}
          name="name"
          value={user.name}
        />
      </div>
      <div>
        <label>
          <h4>Username</h4>
        </label>
        <input
          type="text"
          onChange={handleInputChange}
          name="username"
          value={user.username}
        />
      </div>

      <br />
      <button
        style={{
          borderRadius: 8,
          marginBottom: 50,
          backgroundColor: "blue",
          padding: 6,
          color: "white",
        }}
      >
        Add New user
      </button>
    </form>
  );
     
}

export default AddUserForm;
