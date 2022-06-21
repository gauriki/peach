const Header = () => {
  return (
    <header className="p-6 flex justify-between">
      <img
        className="w-[200px] h-10"
        src="https://peachtools.app/_next/image?url=%2F_next%2Fstatic%2Fimages%2Flogo-eea066c008a92b755f52589c8d65ead4.png&w=256&q=75"
        alt="tools"
      />
      <div className="flex">
        <p className="text-base text-[#fff] font-extrabold p-4">CHARTS</p>
        <p className="text-base text-[#fff] font-extrabold p-4">TRENDING</p>
        <p className="text-base text-[#fff] font-extrabold p-4">NEW PAIRS</p>
        <p className="text-base text-[#fff] font-extrabold p-4 text-center">
          COMMUNITY RANKING
        </p>
        <p className="text-base text-[#fff] font-extrabold p-4">ADVERTISE</p>
      </div>
      <div className="flex">
        <select
          className="text-[#fff] bg-transparent border-0 p-4	h-fit"
          name="cronos"
        >
          <option>Aurora</option>
          <option>cronos</option>
        </select>
        <p className="text-[#fff] text-base font-extrabold p-4">$0.118</p>
      </div>
    </header>
  );
};

export default Header;
