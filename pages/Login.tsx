import { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login simulado para: ${email}`);
    console.log('Formulário submetido:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Cabeçalho */}
      <header className="bg-white p-4 shadow-md relative"> 
        {/* Centraliza o container */}
    <div className="container mx-auto flex justify-center items-center"> 
      
    
    
    {/* Título no centro */}
    <h1 className="text-black text-xl font-bold">ENTRAR</h1>
  </div>
</header>




      {/* Conteúdo Principal */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        {/* Logo */}
        <div className="mb-8 text-center"style={{ marginTop: '70.5px', marginLeft: '30px' }}>
          <img 
          src="/src/assets/logo-elektro.png" 
          alt="Logo Elektro" 
      className="object-contain" // Mantém proporções
    style={{
        width: '329.95px',
        height: '329.95px'
        }}
      />  
      </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md"></form>
        
          {/* Campo Email */}
          <div className="mb-6 w-full" >
           
            <div className="relative w-full text-black">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FaEnvelope className="text-black-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-12 py-3  bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="fulano123@email.com"
                required
              />
            </div>
          </div>

          {/* Campo Senha */}
          <div className="mb-6 w-full text-black">
          
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FaLock className="text-black-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-500" />) : ( <FaEye className="text-gray-500" />)}
              </button>
            </div>
              <div className="text-right mt-1">
                <a href="#" className="text-orange-600 hover:underline text-sm">Esqueci minha senha </a>
            </div> 
          </div>

          <button
            type="button" 
          onClick={() => navigate('/home')} 
            className="mx-auto px-8 py-3 bg-black hover:bg-gray-900 text-white font-semibold rounded-lg shadow-md transition-colors">
            Entrar
          </button>



        {/* Divisor "OU" */}
      <div className="relative flex items-center justify-center my-6 w-full">
        {/* O comando h-px Define uma altura mínima para a borda (1px) para garantir visibilidade */}
        <div className="flex-grow border-t border-black h-px my-auto"></div> {/* Linha esquerda */}
        <span className="mx-4 text-gray-500">OU</span> {/* Texto  */}
        <div className="flex-grow border-t border-black h-px my-auto"></div> {/* Linha direita */}
      </div>
          
      {/* Botões de Login Social */}
      <div className="flex justify-center gap-40 mb-6">
        <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
              alt="Google" className="w-6 h-6"/>
        </button>
        <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
              alt="Facebook" className="w-6 h-6"/>
  </button>
</div>

        {/* Links */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-gray-600">
            Não possui cadastro?{' '}
            <Link to="/cadastro" 
            className="text-orange-600 hover:underline font-semibold">
            Cadastre-se
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}