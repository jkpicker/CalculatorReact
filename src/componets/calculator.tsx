import { useState } from 'react';

export const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      if (typeof result === 'number') {
        const isInteger = Number.isInteger(result);
        setInput(isInteger ? result.toString() : result.toFixed(1));
      } else {
        setInput('Error');
      }
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className='flex items-center justify-between flex-col p-[10px] bg-gray-200 justify-self-center self-center rounded-[5px] mt-[50px]'>
      <div className='bg-white w-full rounded-[5px] h-[35px] flex justify-end items-center text-[24px] p-[3px] mb-[15px]'>
        {input || '0'}
      </div>
      <div className='grid grid-cols-4 gap-[4px]'>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+'].map(
          (char, index) => (
            <button
              key={index}
              className={
                index % 4 === 3
                  ? 'bg-amber-400 text-white w-[50px] h-[50px] flex justify-center items-center rounded-[5px] active:bg-amber-300'
                  : 'bg-gray-600 text-white w-[50px] h-[50px] flex justify-center items-center rounded-[5px] active:bg-gray-500'
              }
              onClick={() => (char === '=' ? handleCalculate() : handleClick(char))}
            >
              {char}
            </button>
          ),
        )}
      </div>
      <button
        className='bg-amber-400 text-white w-[212px] h-[50px] flex justify-center items-center rounded-[5px] mt-[4px] active:bg-amber-300'
        onClick={handleClear}
      >
        C
      </button>
    </div>
  );
};

// eval -> не рекомендований для використання на реал проектах
// const a = eval('2 + 2') // 2+2
// const b = {name, email}
// const c = JSON.stringify(b) // '{name, email}'
// JSON.parse(c) // {name, email}
