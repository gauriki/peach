const Pair = (props) => {
  return (
    <section className="w-[70%] mt-4">
      <div className="flex justify-between bg-[#1D2745] p-6 rounded-xl ">
        <div>
          <p className="text-[#3eeac1] font-extrabold">{props.name}</p>
          <p>{props.subname}</p>
        </div>
        <div>
          <p>{props.price}</p>
          <p className="text-[#3eeac1]">{props.percentage}</p>
        </div>
      </div>
    </section>
  );
};

export default Pair;
