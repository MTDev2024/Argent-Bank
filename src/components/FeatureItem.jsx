function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex-1 p-10 text-center">
      <div className="w-38 border-10 border-[#00bc77] rounded-full p-4 mx-auto flex items-center justify-center">
        <img src={icon} alt="" className="w-full h-full" />
      </div>
      <h2 className="text-[#222] font-bold text-xl mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default FeatureItem;
