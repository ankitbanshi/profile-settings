
const MobileContainer = ({ children, align = "top" }) => {
  const justify = align === "bottom" ? "justify-end" : "justify-top";

  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-4">
      <div
        className={`w-[360px] bg-gray-50 border border-gray-300 shadow-md p-6 h-[90vh] flex flex-col ${justify}`}
      >
        {children}
      </div>
    </div>
  );
};

export default MobileContainer;