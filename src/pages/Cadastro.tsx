import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';//Icone de seta
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

export default function Cadastro() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-4 p-4" style={{ 
       width: '360px', margin: '0 auto', maxWidth: '100%' }}>
    <div className="w-full max-w-md flex items-center pb-1">
        <Link to="/login" className="text-gray-600 hover:text-gray-900">
          <FiArrowLeft className="text-2xl" />
        </Link><h1 className="text-2xl font-bold text-black flex-grow text-center">Cadastrar-se
        </h1>
      </div>
      <hr className="mt-1 mb-2 border-gray-300 w-full" />



{/*ícones das Redes*/}
<div className="flex justify-center gap-20 mt-10 mb-4 ">
  <button
    type="button"
    className="p-4 border border-gray-300 rounded-full hover:bg-gray-50"
  >
    <FcGoogle className="text-2xl" />
  </button>
  <button
    type="button"
    className="p-4 border border-gray-300 rounded-full hover:bg-gray-50 text-blue-600"
  >
    <FaFacebook className="text-2xl" />
  </button>
</div>

{/* Linha com OU */}
<div className="w-full max-w-md my-0">
  <div className="flex items-center">
    {/* Linha esquerda */}
    <div className="flex-1 h-px bg-gray-400"></div>
    
    {/* Texto OU */}
    <span className="px-3 text-sm font-medium text-gray-800">OU</span>
    
    {/* Linha direita */}
    <div className="flex-1 h-px bg-gray-400"></div>
  </div>
</div>


        {/* Formulário */}
        <form className="space-y-4 w-full">
          {/* Nome */}
          <div>
            <label className="block text-sm text-black font-medium mb-1 text-left w-full">Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome completo"
              className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0"
            />
          </div>

          {/* CPF */}
          <div>
            <label className="block text-sm text-black text-left font-medium mb-1">CPF</label>
            <input
              type="text"
              placeholder="Digite seu CPF"
              className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0"
            />
          </div>

          {/* Telefone */}
          <div>
            <label className="block text-sm text-black text-left font-medium mb-1">Telefone</label>
            <input
              type="tel"
              placeholder="Digite seu telefone"
              className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0"
            />
          </div>

          {/* E-mail */}
          <div>
            <label className="block text-sm text-black text-left font-medium mb-1">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0"
            />
          </div>

          {/* Senha */}
          <div>
            <label className="block text-sm text-black text-left font-medium mb-1">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0"
            />
          </div>

          {/* Confirmar Senha */}
          <div>
            <label className="block text-sm text-black text-left font-medium mb-1">Confirme sua senha</label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0"
            />
          </div>

          {/* Botão de Cadastro */}
          <button
            type="button"
            className=" bg-black text-white py-2 rounded-md hover:bg-orange-700 transition mt-6"
          >
            Cadastrar-se!
          </button>
        </form>
      </div>
  );
}