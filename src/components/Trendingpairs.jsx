import { AiOutlineFire } from "react-icons/ai";
import Pair from "./pair";

const Pairs = () => {
  return (
    <section className="w-[60%] mx-auto flex justify-center items-center border-2 rounded-xl border-fuchsia-400 flex-col">
      <div className="flex">
        <p className="font-extrabold text-[#fff] text-[24px] pt-10 pb-6">
          TRENDING PAIRS
        </p>
        <AiOutlineFire className="text-[#ff5100] h-8 w-20 text-center mt-[35px]" />
      </div>
      <Pair
        name="XDSHARE/USDC"
        subname="ToxicDeer Share"
        price="$492.282"
        percentage="19.61%6"
      />
      <Pair
        name="DEER/USDC"
        subname="ToxicDeer Finance"
        price="$o.9418"
        percentage=" 14.8%"
      />
      <Pair
        name="wCRO/Croge"
        subname="Croge"
        price="$0.0046"
        percentage="14.5%"
      />
      <Pair
        name="wCRO/SHIB"
        subname="SHIB"
        price="$0.0 9094"
        percentage="9.96%"
      />
      <Pair
        name="DOGE/WCRO"
        subname="Dogecoin"
        price="$o.064"
        percentage="5.06%"
      />
      <Pair
        name="FER/USDc"
        subname="FerroToken"
        price="$0.1298"
        percentage="5.01%"
      />
      <Pair
        name="WCRO/VSHARE"
        subname="VSHARE"
        price="$0.1721"
        percentage=" 4.19%"
      />
    </section>
  );
};

export default Pairs;
