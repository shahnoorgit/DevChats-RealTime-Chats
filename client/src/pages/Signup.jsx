const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" p-6 w-full bg-white-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
        <h1 className="text-3xl text-center font-semibold text-gray-300">
          Register <span className=" text-blue-500">DevChats</span>
        </h1>
        <form>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              required
              type="text"
              placeholder="enter Fullname"
              className="input input-bordered h-10 w-full"
            ></input>
          </div>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              required
              type="text"
              placeholder=" enter Username"
              className="input input-bordered h-10 w-full"
            ></input>
          </div>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text">Gender</span>
            </label>
            <select
              required
              className="input input-bordered h-10 w-full"
              id="gender"
              name="gender"
              aria-label="Select your gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              required
              type="text"
              placeholder="enter Password"
              className="input input-bordered h-10 w-full"
            ></input>
          </div>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              required
              type="text"
              placeholder=" Confirm Password"
              className="input input-bordered h-10 w-full"
            ></input>
          </div>
          <a
            className=" text-sm mt-2 inline-block hover:underline hover:text-blue-600"
            href="#"
          >
            {"Already have account ?"}
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
