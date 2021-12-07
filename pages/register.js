import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.table({ name, email, password });
  };

  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">Register</h1>

      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-4"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name..."
          />

          <input
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email..."
          />

          <input
            type="password"
            className="form-control mb-4 p-4"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password..."
          />

          <button type="submit" className="btn btn-block btn-primary p-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
