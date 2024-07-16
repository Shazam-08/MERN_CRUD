import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([
    {
      Name: "Shubham",
      Email: "shubham@gmail.com",
      Age: 20,
    },
  ]);
  return (
    <div>
      <div>
        <button>
          <Link to="/create">Add+</Link>
        </button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>{user.Age}</td>
                <td>
                  <button>
                    <Link to="/update">Edit</Link>
                  </button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
