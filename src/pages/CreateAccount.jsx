import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileContainer from "./MobileContainer";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.company) newErrors.company = "Company name is required";
    if (!formData.agency) newErrors.agency = "Please select agency status";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/account-settings");
    }
  };

  return (
    <MobileContainer>
      <div>
        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Create your <br /> PopX account
        </h1>

        {/* Full Name */}
        <div className="relative w-full mb-5">
          <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-sm font-semibold text-purple-700">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none bg-gray-50 focus:ring-2 focus:ring-purple-300"
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="relative w-full mb-5">
          <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-sm font-semibold text-purple-700">
            Phone number *
          </label>
          <input
            type="text"
            name="phone"
            placeholder="9876543210"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none bg-gray-50 focus:ring-2 focus:ring-purple-300"
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Email Address */}
        <div className="relative w-full mb-5">
          <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-sm font-semibold text-purple-700">
            Email address *
          </label>
          <input
            type="email"
            name="email"
            placeholder="marry@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none bg-gray-50 focus:ring-2 focus:ring-purple-300"
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="relative w-full mb-5">
          <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-sm font-semibold text-purple-700">
            Password *
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none bg-gray-50 focus:ring-2 focus:ring-purple-300"
          />
          {errors.password && (
            <p className="text-xs text-red-600 mt-1">{errors.password}</p>
          )}
        </div>

        {/* Company Name */}
        <div className="relative w-full mb-6">
          <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-sm font-semibold text-purple-700">
            Company name *
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none bg-gray-50 focus:ring-2 focus:ring-purple-300"
          />
          {errors.company && (
            <p className="text-xs text-red-600 mt-1">{errors.company}</p>
          )}
        </div>

        {/* Radio Buttons */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-gray-900 block mb-2">
            Are you an Agency? *
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={formData.agency === "yes"}
                onChange={handleChange}
                className="accent-purple-600"
              />
              <span className="text-sm">Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={formData.agency === "no"}
                onChange={handleChange}
                className="accent-purple-600"
              />
              <span className="text-sm">No</span>
            </label>
          </div>
          {errors.agency && (
            <p className="text-xs text-red-600 mt-1">{errors.agency}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700 transition"
      >
        Create Account
      </button>
    </MobileContainer>
  );
};

export default CreateAccount;