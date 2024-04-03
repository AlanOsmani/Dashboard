import React, {useState} from 'react'


function FConfiguracion() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-blue-600/40 ring-2 ring-indigo-200 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase ">
            Configuración
        </h1>
        <form className="mt-6">
            <div className="mb-2">
                <label
                    htmlFor="nombre"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Nombres(s)
                </label>
                <input
                    type="text"
                    id="nombre"
                    name='nombre'
                    placeholder='Escribe tu nombre(s)'
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="apellidoPat"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Apellido Paterno
                </label>
                <input
                    type="text"
                    id='apellidoPat'
                    name='apellidoPat'
                    placeholder='Escribe tu apellido'
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="apellidoMat"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Apellido Materno
                </label>
                <input
                    type="text"
                    id='apellidoMat'
                    name='apellidoMat'
                    placeholder='Escribe tu apellido'
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="usuario"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Nombre de Usuario
                </label>
                <input
                    type="text"
                    id='usuario'
                    name='usuario'
                    required
                    placeholder='Escribe tu nombre de usuario'
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="boleta"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Número de boleta
                </label>
                <input
                    type="text"
                    id='boleta'
                    name='boleta'
                    required
                    maxLength={10}
                    placeholder='Escribe tu  boleta'
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="numCelular"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Número de celular
                </label>
                <input
                    type="tel"
                    id='numCelular'
                    name='numCelular'
                    required
                    placeholder='Escribe tu  numero de celular'
                    maxLength={10}
                    pattern='[0-9]{9}'
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="numCelular"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Correo
                </label>
                <input
                    type="email"
                    id='correo'
                    name='correo'
                    required
                    placeholder='Escribe tu  correo'
                    maxLength={10}
                    pattern='[0-9]{9}'
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mt-6">
                <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                    Guardar Cambios
                </button>
            </div>
        </form>

    </div>
</div>
  );
}

export default FConfiguracion
