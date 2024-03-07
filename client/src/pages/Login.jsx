import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../Hooks/useLogin";
import useLogout from "../Hooks/useLogout";

const Login = () => {
  const { Loading, login } = useLogin();

  const [Inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const HandleLogIn = (e) => {
    e.preventDefault();
    login(Inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" p-6 w-full bg-white-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
        <h1 className="text-3xl text-center font-semibold text-gray-300">
          Login <span className=" text-blue-500">DevChats</span>
        </h1>
        <form onSubmit={(e) => HandleLogIn(e)}>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              value={Inputs.username}
              onChange={(e) =>
                setInputs({ ...Inputs, username: e.target.value })
              }
              required
              type="text"
              placeholder="enter Username"
              className="input input-bordered h-10 w-full"
            ></input>
          </div>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              value={Inputs.password}
              onChange={(e) =>
                setInputs({ ...Inputs, password: e.target.value })
              }
              required
              type="password"
              placeholder="enter Password"
              className="input input-bordered h-10 w-full"
            ></input>
          </div>
          <Link
            className=" text-sm mt-2 inline-block hover:underline hover:text-blue-600"
            to="/sign-up"
          >
            {"Don't have account ?"}
          </Link>
          <div>
            {Loading ? (
              <span className=" loading loading-spinner" />
            ) : (
              <button className="btn btn-block btn-sm mt-2">Login</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
