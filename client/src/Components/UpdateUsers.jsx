import React from "react";

function UpdateUsers() {
  return (
    <div>
      <div>
        <form>
          <div>
            <h1>Update User</h1>
          </div>
          <div>
            <label>Name:</label>
            <input type="text" placeholder="Enter Your Name" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div>
            <label>Age:</label>
            <input type="text" placeholder="Enter Your Age" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUsers;
