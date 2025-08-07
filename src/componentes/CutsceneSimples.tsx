import { useState, useEffect, useCallback  } from 'react';
import capa from '../assets/Mousepad.png';
import caixa from '../assets/caixadesom.png';
import teclado from '../assets/teclado.png';

export const CutsceneSimples = () => {
  const [imagemAtual, setImagemAtual] = useState(0);

  const imagens = [capa, caixa, teclado];
;
  const proximaImagem = useCallback(() => {
  setImagemAtual((atual) => (atual === imagens.length - 1 ? 0 : atual + 1));
}, [imagens.length]);

useEffect(() => {
  const intervalo = setInterval(proximaImagem, 5000);
  return () => clearInterval(intervalo);
}, [proximaImagem]);

  
  return (
    <div className="mb-8 p-4 bg-transparent rounded-lg">
      {/* Imagem */}
      <img 
        src={imagens[imagemAtual]} 
        alt="Produto em destaque"
        /*Usar object contein é melhor que object cover*/
        className="w-full h-50 object-contain mb-4 rounded bg-tranaprent-100"
      />
      
      {/* Botão único (clica para passar) */}
      <button
        onClick={proximaImagem}
        className=" py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
      >
        {imagemAtual === 2 ? 'Próximo' : 'Próximo'}
      </button>
    </div>
  );
};