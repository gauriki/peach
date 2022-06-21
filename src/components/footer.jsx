import { MdOutlineCopyright } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex justify-between border-2 border-blue-600 rounded-lg bg-[#05101C] mt-8">
      <div className="flex">
        <MdOutlineCopyright className="text-[white]  ml-6 mt-[25px] w-8 " />
        <p className="text-[18px] text-[#aeaeae] font-normal  pl-2 pt-6">
          PEACHTOOLS 2022
        </p>
      </div>
      <div className="flex">
        <p className="text-[#fff] font-normal text-[16px] p-6">
          Advertise with Us
        </p>
        <FaTelegramPlane className="text-[#ff9100] mr-2 h-10 w-6 mt-[18px]" />
        <AiOutlineTwitter className="text-[#ff9100]  ml-2 h-10 w-6 mt-[18px] mr-4" />
      </div>
    </footer>
  );
};

export default Footer;
