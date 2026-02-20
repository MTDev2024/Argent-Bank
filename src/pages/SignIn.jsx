import { FaUserCircle } from "react-icons/fa";

/**
 * Page Sign In
 */
function SignIn() {
  return (
    <main className="bg-[#12002b] min-h-screen flex justify-center items-start">
      <section className="bg-white w-75  mx-auto mt-12 p-8 text-center">
        <FaUserCircle className="text-8xl mx-auto h-4" />
        <h1 className="font-bold text-4xl m-6">Sign In</h1>
        <form action="">
          <div className="flex flex-col mb-4">
            <label htmlFor="username" className="text-left font-bold">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="p-1 text-xl border border-gray-300 w-full"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-left font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="p-1 text-xl border border-gray-300 w-full"
            />
          </div>
          <div className="flex items-center text-left w-full">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me" className="ml-2">
              Remember me
            </label>
          </div>
          <button className="w-full font-bold text-xl text-white mt-4 p-2 bg-[#00bc77] border-[#00bc77] underline block">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;

// .sign-in-icon {
//   font-size: 5rem;
// }

// .input-remember {
//   display: flex;
// }

// .input-remember label {
//   margin-left: 0.25rem;
// }

// .input-wrapper {
//   display: flex;
//   flex-direction: column;
//   text-align: left;
//   margin-bottom: 1rem;
// }

// .input-wrapper label {
//   font-weight: bold;
// }

// .input-wrapper input {
//   padding: 5px;
//   font-size: 1.2rem;
// }
