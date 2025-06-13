import MobileContainer from "./MobileContainer";
const profileImage = "https://i.pravatar.cc/100";


const AccountSettings = () => {
  return (
    <MobileContainer>
      <div>
        {/* Section Title */}
        <h2 className="text-sm font-medium text-gray-800 mb-4">
          Account Settings
        </h2>

        {/* User Info Section */}
        <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-md mb-4">
          {/* Profile Image */}
          <div className="relative w-12 h-12">
            <img
              src={profileImage}
              alt="User"
              className="rounded-full w-12 h-12 object-cover"
            />
            {/* Purple badge */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-purple-600 border-2 border-white rounded-full flex items-center justify-center text-white text-xs font-bold">
              ✓
            </div>
          </div>

          {/* Name + Email */}
          <div>
            <h3 className="font-medium text-gray-800">Marry Doe</h3>
            <p className="text-sm text-gray-500">Marry@gmail.com</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat,
          Sed Diam
        </p>
      </div>
    </MobileContainer>
  );
};

export default AccountSettings;