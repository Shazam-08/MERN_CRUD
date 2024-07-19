import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function UpdateUsers() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const navigate = useNavigate();

  const update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/update/" + id, { name, email, age })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get("http://localhost:3001/getuser/" + id).then((result) => {
      setName(result.data.name);
      setEmail(result.data.email);
      setAge(result.data.age);
    });
  }, []);

  return (
    <div>
      <div>
        <form onSubmit={update}>
          <div>
            <h1>Update User</h1>
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="text"
              placeholder="Enter Your Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUsers;
