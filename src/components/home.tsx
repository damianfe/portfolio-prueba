import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">¡Hola! Soy Damian Fernandez</h1>
        <p className="mt-4 text-lg text-gray-600">
          Soy un desarrollador web especializado en React, TypeScript y Tailwind CSS.
        </p>
        <div className="mt-6">
          <a
            href="#projects"
            className="px-4 py-2 mx-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Mis Proyectos
          </a>
          <a
            href="#contact"
            className="px-4 py-2 mx-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white"
          >
            Contáctame
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
