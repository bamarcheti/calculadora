import { useState } from "react";
import Amount from "./components/Amount";
import Input from "./components/Input";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [capital, setCapital] = useState(0);
  const [tax, setTax] = useState(0);
  const [period, setPeriod] = useState(0);
  const [value, setValue] = useState({
    capital: 0,
    juros: 0,
    total: 0,
  });
  const [inputOk, setInputOk] = useState(false);

  function handleClick() {
    inputEmpty();
    const calculo = capital * (1 + tax / 100) ** period;

    setValue({
      capital: capital,
      juros: calculo - capital,
      total: calculo,
    });
  }

  function inputEmpty() {
    if (!capital || !tax || !period) {
      setInputOk(true);
      setIsOpen(false);
      return;
    } else {
      setIsOpen(true);
      setInputOk(false);
    }
  }

  return (
    <div className="bg-[#F8F3FE] p-5 rounded-2xl w-auto flex flex-col gap-5">
      <h2 className="text-xl font-bold uppercase pb-[15px] text-center">
        Calculadora de Juros Composto
      </h2>

      <div className="flex flex-col gap-2">
        <Input title="Capital" symbol="R$" change={setCapital} />
        <div className="mt-2.5 flex gap-3.5">
          <Input title="Taxa de juros (anual)" symbol="%" change={setTax} />
          <Input title="Prazo (anual)" symbol="" change={setPeriod} />
        </div>
      </div>

      <div
        className="bg-[#6115DD] hover:opacity-85 py-2 rounded-[10px] text-center mt-[15px] cursor-pointer text-white font-bold uppercase"
        onClick={handleClick}
      >
        Calcular
      </div>

      {isOpen && (
        <div className="mt-5 flex flex-col gap-[5px]">
          <Amount
            title="Capital"
            value={value.capital.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          />
          <Amount
            title="Total em juros"
            value={value.juros.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          />
          <Amount
            title="Valor total"
            value={value.total.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          />
        </div>
      )}

      {inputOk && (
        <p className="text-white text-center font-bold text-xs mt-2.5 px-1.5 py-0.5 rounded bg-red-600">
          Prencha todos os campos.
        </p>
      )}
    </div>
  );
}

export default App;
