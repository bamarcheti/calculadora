type InputProps = {
  title: string;
  symbol: string;
  change: (value: number) => void;
};

const Input = ({ change, symbol, title }: InputProps) => {
  return (
    <div>
      <label htmlFor={title} className="text-sm">
        {title}
      </label>

      <div className="flex items-center w-full h-10">
        {symbol === "" ? (
          // <label htmlFor={title}>{title}</label>
          ""
        ) : (
          <label
            htmlFor={title}
            className="flex h-full w-[70px] items-center justify-center bg-[#E6E8EC] border border-solid border-[#aaa] border-r-0 rounded-l-lg"
          >
            {symbol}
          </label>
        )}

        <input
          type="number"
          id={title}
          placeholder="0,00"
          className={`w-full text-right h-full outline-none pr-2.5 border-solid border border-[#aaa]
            ${symbol === "" ? " rounded-lg" : "appearance-none rounded-r-lg"}
         `}
          onChange={(e) => change(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Input;
