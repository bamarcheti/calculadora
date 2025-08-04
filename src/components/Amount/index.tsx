type AmountProps = {
  title: string;
  value: string;
};

const Amount = ({ title, value }: AmountProps) => {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg px-[10px] py-3">
      <p className="text-xs">{title}</p>
      <p className="text-lg font-bold">R$ {value}</p>
    </div>
  );
};

export default Amount;
