import React from "react";

export default function Navbar() {
  return (
    <header className="bg-background shadow-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full"></div>
          <span className="text-2xl font-bold text-white">Organiza.te</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-white hover:text-primary transition">Inicio</a>
          <a href="#" className="text-white hover:text-primary transition">Proyectos</a>
          <a href="#" className="text-white hover:text-primary transition">Contacto</a>
        </nav>
        <div className="flex items-center space-x-3">
          <button className="bg-transparent text-white hover:text-primary">Iniciar sesión</button>
          <button className="bg-primary hover:bg-indigo-700 text-white px-4 py-2 rounded">Registrarse</button>
        </div>
      </div>
    </header>
  );
}
