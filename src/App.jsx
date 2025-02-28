import { useState, useEffect } from 'react';
import { getAdvice } from './Service/dataServic';

const AdviceGen = () => {
  const [advice, setAdvice] = useState({ text: '', id: '' });

  const fetchNewAdvice = async () => {
    try {
      const { slip } = await getAdvice(); 
      setAdvice({
        text: slip.advice,
        id: slip.id.toString(),
      });
    } catch (error) {
      setAdvice({
        text: 'Failed to fetch advice. Please try again.',
        id: 'error',
      });
    }
  };

  useEffect(() => {
    fetchNewAdvice(); 
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#1F2632]">
      <section className="relative bg-[#323A49] rounded-xl p-10 max-w-[540px] mx-4 text-center shadow-2xl">
        <h1 className="text-[#52FFA8] text-[13px] tracking-[0.3em] mb-6">
          ADVICE #{advice.id || '...'}
        </h1>
        <p className="text-[#CEE3E9] text-[28px] leading-[1.4] mb-8 font-bold">
          {`"${advice.text}"`}
        </p>
        <div className="mb-10">
          <img src="./pattern-divider-desktop.svg" alt="divider" className="mx-auto w-full" />
        </div>
        <button onClick={fetchNewAdvice} className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#53FFAB] p-5 rounded-full hover:shadow-[0_0_15px_0] hover:shadow-[#53FFAB] transition-all duration-200" >
          <img className="w-7 h-7" src="./icon-dice.svg" alt="dice icon" />
        </button>
      </section>
    </div>
  );
};

export default AdviceGen;
