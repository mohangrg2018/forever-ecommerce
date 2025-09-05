const Title = ({ title1, title2 }) => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-2xl uppercase font-semibold text-gray-400">{title1}</p>
      <p className="text-2xl uppercase font-semibold">{title2}</p>
      <span className="h-0.5 w-10 bg-black" />
    </div>
  );
};

export default Title;
