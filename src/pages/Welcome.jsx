import { useNavigate } from "react-router-dom";

import MobileContainer from "./MobileContainer";


const Welcome = () => {
  const navigate = useNavigate();

  return (
    
      <MobileContainer align="bottom">

      <div className="text-left mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Welcome to PopX</h1>
        <p className="text-sm text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
        </p>
      </div>

      {/* Buttons */}
      <div className="w-full max-w-xs space-y-3">
        <button
  onClick={() => navigate("/create-account")}
  className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700 transition"
>
  Create Account
</button>

<button
  onClick={() => navigate("/login")}
  className="w-full bg-purple-100 text-purple-700 py-3 rounded-md font-medium hover:bg-purple-200 transition"
>
  Already Registered? Login
</button>

      </div>
      </MobileContainer>
    //</div>
    //</div>

  );
};

export default Welcome;