function AccountCard({ title, amount, description }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center border border-black w-4/5 mx-auto p-6 mb-8 text-left">
      <div className="w-full flex-1">
        <h3 className="m-0 p-0 font-normal text-base">{title}</h3>
        <p className="m-0 text-4xl font-bold">{amount}</p>
        <p className="m-0">{description}</p>
      </div>
      <div>
        <button className="block w-full md:w-auto p-2 font-bold text-white text-[1.1rem] mt-4 bg-[#00bc77] border border-[#00bc77]">
          View transactions
        </button>
      </div>
    </div>
  );
}

export default AccountCard;
