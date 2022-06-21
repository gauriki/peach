import { HiSearch } from "react-icons/hi";

const Main = () => {
  return (
    <main className="w-full flex items-center flex-col">
      <p className="text-[#fff] font-extrabold text-[40px] pt-20 pb-4">
        REAL-TIME CHARTS ON CRONOS
      </p>
      <p className="text-[#fff] pb-6">
        Instant charting and transaction history at your fingertips.
      </p>

      <div className="border-blue-500 border-2 h-14  rounded-lg flex bg-black w-[50%] mb-6">
        <HiSearch className="text-white h-6 w-32 mt-4" />
        <input
          className="bg-black "
          placeholder="Search by token name,ticker address or pair"
        ></input>
      </div>
    </main>
  );
};

export default Main;
