import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-#1a1a1a text-white py-6"> 
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} medMagic. All rights reserved.</p>
        <div className="mt-4">
          <Link href="/" className="text-white hover:text-gray-200 mx-2">
            Home
          </Link>
          <Link href="/Maintainance" className="text-white hover:text-gray-200 mx-2">
            Store
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200 mx-2">
            About
          </Link>
          <Link href="/Maintainance" className="text-white hover:text-gray-200 mx-2">
            Contact
          </Link>
          <Link href="/FAQ" className="text-white hover:text-gray-200 mx-2">
            FAQs
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;