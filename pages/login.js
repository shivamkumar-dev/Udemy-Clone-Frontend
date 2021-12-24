import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons';
import Link from 'next/link';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post(`/api/v1/login`, {
        email,
        password,
      });
      toast.success('Login successful.');
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data.message);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">Login</h1>

      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
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

          <button
            type="submit"
            className="btn btn-block btn-primary p-2"
            disabled={!email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : 'Submit'}
          </button>
        </form>

        <p className="text-center p-3">
          Not yet Registered?{' '}
          <Link href="/register">
            <a>Register</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
