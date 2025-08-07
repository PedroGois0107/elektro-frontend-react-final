import { Link } from 'react-router-dom';
{/*Adiciona uma id e outras informações dos produtos*/}
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps ) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 h-full">


    {/* Seção de Imagem */}
    <div className="h-40 bg-gray-100 flex items-center justify-center p-4">
      <img 
        src={product.image} 
        alt={product.name}
        className="max-h-full max-w-full object-contain"
      />
    </div>
    
    {/* Informações do produto */}
    <div className="p-4">
      <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
      <div className="flex justify-between items-center mt-2">
        <span className="text-orange-600 font-bold">R$ {product.price.toFixed(2)}</span>
        <Link 
          to={`/produto/${product.id}`} // Link específico
          className="text-blue-600 text-sm hover:text-blue-800 hover:underline"
        >
      
        </Link>
      </div>
    </div>
  </div>
);