import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold">Swiggy</h2>
          <p className="mt-2 text-gray-400">
            Order food from your favorite restaurants with ease.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Swiggy One</a></li>
          </ul>
        </div>

        {/* Contact & Help */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Help & Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Partner with us</a></li>
            <li><a href="#">Ride with us</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={24} /></a>
          </div>
        </div>
      </div>
      
      <div className="mt-10 text-center text-gray-500 text-sm">
      <hr className="p-2"></hr>
        &copy; {new Date().getFullYear()} Swiggy. All rights reserved.
      </div>
    </footer>
  );
}
