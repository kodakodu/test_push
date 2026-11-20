export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white py-6 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">VirtualBox Ubuntu</h1>
          <nav>
            <ul className="flex space-x-6">
           {/*    <li>
                <a href="#" className="hover:text-blue-500">Features</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">Pricing</a>
              </li> */}
              <li>
                <a href="#" className="hover:text-blue-500">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Page d'acceuil</h2>
          <p className="text-lg text-white mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et.
          </p>
          <button className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*             <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Feature One</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et.
              </p>
            </div> */}
{/*             <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Feature Two</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et.
              </p>
            </div> */}
{/*             <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Feature Three</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-white">
          <p>&copy; 2026 Ubuntu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}