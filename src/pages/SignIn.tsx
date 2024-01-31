import { IoEyeSharp } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';

function SignIn() {
  const [show, setShow] = useState(false);
  const { login, form, setForm, error } = useAuth();

  return (
    <div className="bg-white w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full h-screen bg-black bg-opacity-50">
        <div className="bg-white py-20 px-10 rounded-md">
          <div className="flex justify-center mb-5">
            <p className="text-2xl font-bold opacity-50">Dashboard Kit</p>
          </div>
          <div className="flex justify-center flex-col items-center">
            <p className="text-3xl font-bold  text-black-2">
              Log In to Dashboard Kit
            </p>
            <p className="mt-2">Enter your email and password below</p>
          </div>
          <form action="" className="mt-10">
            <label htmlFor="email">
              <p className="mb-2 font-semibold opacity-50">Email</p>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email address"
                className="w-full rounded border border-stroke bg-white py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary"
              />
            </label>
            <label htmlFor="password">
              <div className="mb-2 w-full flex justify-between items-end text-end mt-5">
                <p className="font-semibold opacity-50">Password</p>
                <p className="text-[10px]">Forgot password?</p>
              </div>
              <div className="w-full flex rounded border border-stroke bg-white py-3 px-5 font-medium items-center  mb-5 ">
                <input
                  type={show ? 'text' : 'password'}
                  id="password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  placeholder="Password"
                  className="w-full focus:outline-none border-none"
                />
                <button onClick={() => setShow(!show)} type="button">
                  {show ? <FaEyeSlash /> : <IoEyeSharp />}
                </button>
              </div>
            </label>
            {error && <p className="text-meta-1 text-sm">{error}</p>}
            <button
              type="button"
              onClick={login}
              className="w-full bg-primary text-white py-3 rounded-md"
            >
              Log in
            </button>
          </form>
          <div className="flex justify-center mt-5">
            <p>Don't have an account?</p>
            <p className="text-primary ml-1 font-semibold">Sign up</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
