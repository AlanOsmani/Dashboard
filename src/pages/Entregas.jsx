import React from 'react';


const Entregas = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-blue-600/40 ring-2 ring-indigo-200 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase ">
          Crea tu Proyecto
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label htmlFor="titulo" className="block text-sm font-semibold text-gray-800">
              Título del proyecto
            </label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              placeholder='Escribe tu título ...'
              required
              className="block w-full px-4 py-2 mt-2 text-black-400 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="descripcion" className="block text-sm font-semibold text-gray-800">
              Descripción
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              placeholder='Escribe tu descripción ...'
              required
              className="block w-full px-4 py-2 mt-2 text-black-400 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-2">
            <label htmlFor="objetivo" className="block text-sm font-semibold text-gray-800">
              Objetivo del proyecto
            </label>
            <textarea
              id="objetivo"
              name="objetivo"
              placeholder='Escribe tu objetivo ...'
              required
              className="block w-full px-4 py-2 mt-2 text-black-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              rows="2"
            ></textarea>
          </div>
          <div className="mb-2 items-center">
            <div className="flex flex-row ">
              <div className='flex-row mr-4'>
                <label htmlFor="inicioFecha" className="block text-sm font-semibold text-gray-800">
                  Fecha de inicio
                </label>
                <input
                  type="date"
                  id="inicioFecha"
                  name="inicioFecha"
                  placeholder='password'
                  required
                  className="block w-full px-4 py-2 mt-2 text-black-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="flex-row mr-4">
                <label htmlFor="finalFecha" className="block text-sm font-semibold text-gray-800">
                  Fecha de finalización
                </label>
                <input
                  type="date"
                  id="finalFecha"
                  name="finalFecha"
                  placeholder='password'
                  required
                  className="block w-full px-3 py-2 mt-2 text-black-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="flex-row mr-4">
                <label htmlFor="entregas" className="block text-sm font-semibold text-gray-800">
                  Número de Entregas
                </label>
                <input
                  type="number"
                  id="entregas"
                  name="entregas"
                  placeholder='0'
                  required
                  className="block w-full px-3 py-2 mt-2 text-black-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Entregas;
