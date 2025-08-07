import Header from '../componentes/Header'; //Importa o Header
import {ProductCard}from '../componentes/ProductCard'; //Parte que exibe o produto
import { Rodape } from '../componentes/Rodape';//Importa o Rodapé
import { CutsceneSimples } from '../componentes/CutsceneSimples'//Importa o carrossel.

export default function Home() {
  // Dados feitos com arrays para armazenar os dados 
  const categories = [
    { name: 'Celulares', icon: '📱' },
    { name: 'Notebooks', icon: '💻' },
    { name: 'Tablets', icon: '⌨️' },
    { name: 'Periféricos', icon: '🖱️' },
    { name: 'TVs ', icon: '📺'},
    { name: 'SmartWatchs ', icon: '⌚'},
    { name: 'Gamer ', icon: '🎮'},
    { name: 'Audio ', icon: '🎧'}
  ];

  const featuredProducts = [
    {id: 1, name: 'Celular', price: 1400, image:'/assets/Celular.png'},
    {id: 2, name: 'Capa', price: 750, image:'/assets/Capacel.png' }
  ];

  const bestSellers = [
    {id: 3, name: 'Smartv', price: 3300, image:'/assets/Smarttv.png' },
    {id: 4, name: 'Smartwatch', price: 900, image:'/assets/Monitor.png' }
  ];

const Destaques = [
    {id: 5, name: 'Smartphone', price: 1800, image:'/assets/Celular 2.png'},
    {id: 6, name: 'Teclado', price: 200, image:'/assets/teclado.png' }
  ];
  return (
  

    /*min-h-screen: Garante que a página ocupe pelo menos 100% da altura da tela bg-gray-50: Cor de fundo cinza claro  e o Header chama a parte de cima da página*/

    <div className="min-h-screen bg-gray-50">
      <Header />
    
{/* Seção de Boas-Vindas */}
        <section className="text-center my-8">
          <div className="flex items-center justify-center gap-2">
            {/*Insere a imagem da logo á esquerda*/}
            <img 
              src="/assets/logo-elektro.png" // O mesmo caminho da logo do Login
              alt="Logo Elektro"
              className="w-8 h-8 object-contain" // Tamanho pequeno
 /> <h1 className="text-3xl font-bold text-orange-600">Bem-vindo à Elektro!</h1> </div>
      </section>
    {/* Botão de sair que retorna ao Login*/}

    

    {/*Expoem o carrossel para a Home*/}
      <main className="container mx-auto p-4">

        {/*Cutscene*/}
        <CutsceneSimples />

      {/*Linha de Separação*/}
      <hr className="my-8 border-t border-gray-300 w-full" />
      

        {/* Categorias */}
        <section className="my-6">
          <h2 className="text-2xl font-fenomensans mb-8 text-black">Categorias Elektro</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-3 justify-items-center">
            {categories.map((cat, index) => (
              <div 
                key={index} 
                className="w-10 h-10 md:w-20 md:h-20
          rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg flex flex-col items-center justify-center text-white font-medium cursor-pointer hover:scale-105 transition-transform duration-200">
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-[10px] md:text-xs mt-1">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/*Linha de Separação*/}
          <hr className="my-8 border-t border-gray-300 w-full" />
            
        {/* Para Você */}
        <section className="my-12">
          <h2 className="text-2xl font-fenomensans mb-4 text-black">Para Você</h2>
            <div className="grid grid-cols-2 gap-4">
            {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
          ))}
          </div>
          </section>

        {/*Linha de Separação*/}
          <hr className="my-8 border-t border-gray-300 w-full" />


        {/* Produtos em Destaque */}
        <section className="my-12">
          <h2 className="text-2xl font-fenomensans mb-4 text-black">Produtos em destaque</h2>
          <div className="grid grid-cols-2 gap-4">
            {Destaques.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>

         {/*Linha de Separação*/}
          <hr className="my-8 border-t border-gray-300 w-full" />

        {/* Mais Vendidos */}
        <section className="my-12">
          <h2 className="text-2xl font-fenomensans mb-4 text-black">Mais vendidos</h2>
          <div className="grid grid-cols-2 gap-4">
            {bestSellers.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>
      </main>
      
      <Rodape />
    </div>
  );
}