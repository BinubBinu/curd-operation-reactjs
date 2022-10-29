import React, { useEffect, useState } from 'react'

const EditUserForm = (props) => {

    const[user,setUser] = useState(props.currentUser)

    useEffect(() => {
    setUser(props.currentUser)
}, [props])

 const handleInputChange = (event) => {
    const { name, value } = event.target
    
    setUser({...user, [name]:value})
}


     
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.updateUser(user.id, user);
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
      <div>
        <button
          style={{
            borderRadius: 8,
            marginBottom: 50,
            backgroundColor: "blue",
            padding: 6,
            color: "white",
          }}
        >
          Update user
        </button>
        <button
          style={{
            borderRadius: 8,
            marginBottom: 50,
            
            padding: "6px 10px",
            color: "#000",
          }}
          className="button muted-button"
          onClick={() => {
            props.setEditing(false);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
    
}

export default EditUserForm