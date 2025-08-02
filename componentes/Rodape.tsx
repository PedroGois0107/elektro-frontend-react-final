import { 
  FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaLinkedin } from 'react-icons/fa';

export const Rodape = () => {
  return (
    <footer className="bg-orange-500 py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-1xl font-bold mb-6">Siga-nos nas redes sociais</h3>
        <div className="flex justify-center space-x-3 text-2xl">
          {/* Facebook */}
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FaFacebook />
          </a>

          {/* Instagram */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-600 hover:text-pink-800 transition-colors"
          >
            <FaInstagram />
          </a>

          {/* Twitter/X */}
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-black hover:text-gray-700 transition-colors"
          >
            <FaTwitter />
          </a>

          {/* TikTok */}
          <a 
            href="https://tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-black hover:text-gray-700 transition-colors"
          >
            <FaTiktok />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-700 hover:text-blue-900 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};