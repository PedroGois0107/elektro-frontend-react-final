export default function Error() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Cabeçalho */}
      <header className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-black text-xl font-bold">Opsss...</h1>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        {/* Logo de erro */}
        <div className="mb-8">
          <img 
            src="/src/assets/Error.png" 
            alt="Error" 
            className="object-contain"
            style={{
              width: '330px',
              height: '330px',
              maxWidth: '100%' 
            }}
          />
        </div>
      </main>

      
      <button 
        onClick={() => window.history.back()}
        className="w-full max-w-xs mx-auto py-3 px-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
      >
        ←
      </button>
    </div>
  );
}