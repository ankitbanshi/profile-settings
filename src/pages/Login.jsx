import MobileContainer from "./MobileContainer";
const Login = () => {
  return (
    <MobileContainer>
        <h1 className="text-xl font-semibold text-gray-900 mb-2">
          Signin to your <br />
          PopX account
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>

        {/* Email Field */}
        <div className="relative w-full mb-6">
  <label
    htmlFor="email"
    className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-purple-700"
  >
    Email Address
  </label>
  <input
    id="email"
    type="email"
    placeholder="Email Address"
    className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-300"
  />
</div>

        {/* Password Field */}
        <div className="relative w-full mb-6">
          <label htmlFor ="password" className=" absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-purple-700 mb-1">
            Password
          </label>
          <input
            id ="password"
            type="password"
            placeholder="Enter password"
            className="w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-gray-300 text-white py-3 rounded-md font-medium cursor-not-allowed"
          disabled
        >
          Login
        </button>
     </MobileContainer>
  );
};

export default Login;