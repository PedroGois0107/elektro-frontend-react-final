//import React from 'react';
import { Link } from 'react-router-dom';

const Usuario = () => {
  return (
<div className="min-h-screen bg-gray-50 max-w-[1800px] mx-auto w-full">         <div className="max-w-screen 2x1 mx-auto px-4"></div>
      {/* Barra Superior Preta (Funciona pf) */}
      <div className="bg-black text-white p-4">
        <div className="flex items-center gap-2 pl-4">
          <img 
            src="/assets/icone-usuario.png"  
            alt="Ícone de Usuário"
            className="h-6 w-6 object-contain"
          />
          <h2 className="text-xl font-semibold">Usuário</h2>
        </div>
      </div>

      {/* Conteúdo Principal  */}
      <div className="pl-6 pr-6 "> 
        {/* Cabeçalho da página */}
        <header className="mb-4"> 
          <h1 className="text-lg font-medium text-gray-700">Minha Conta</h1>
        </header>
        
        {/* Lista de Opções  */}
        <div className="space-y-2 "> 
          {/* Editar dados */}
          <div className="text-left p-2">
            <p className="text-gray-800">Editar dados</p>
          </div>
          
          <hr className="border-t border-gray-200 my-2" /> 

          {/* Meus pedidos */}
          <div className="text-left p-2">
            <p className="text-gray-800">Meus pedidos</p>
          </div>
          
          <hr className="border-t border-gray-200 my-2" />

          {/* Meus produtos */}
          <div className="text-left p-2">
            <p className="text-gray-800">Meus produtos</p>
          </div>
          
          <hr className="border-t border-gray-200 my-2" />

          {/* Meu carrinho */}
          <div className="text-left p-2">
            <p className="text-gray-800">Meu carrinho</p>
          </div>
        </div>

        {/* Botão Sair  */}
        <div className="mt-4 text-left"> 
          <Link 
            to="/login" 
            className="text-black hover:underline font-semibold"
          >
            Sair
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Usuario;