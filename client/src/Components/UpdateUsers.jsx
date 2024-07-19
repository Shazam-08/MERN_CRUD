import React from "react";

function UpdateUsers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/create", { name, email, age })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Add User</h1>
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="text"
              placeholder="Enter Your Age"
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
