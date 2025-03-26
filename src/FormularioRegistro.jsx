import { useState } from 'react';
import { FaUser } from 'react-icons/fa';

function FormularioRegistro() {
  const [formData, setFormData] = useState({
    tipoDocumento: '',
    documento: '',
    nombre: '',
    apellido: '',
    sexo: '',
    telefono: '',
    correo: '',
    rol: '',
    usuario: '',
    contrasena: '',
    confirmar: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.contrasena !== formData.confirmar) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Formulario enviado:', formData);
    // Aquí puedes agregar la lógica para enviar el formulario a un servidor
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-10 mb-10">
      {/* Título del formulario */}
      <h1 className="text-center text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-200 flex items-center justify-center gap-2">
        <FaUser className="text-purple-600 dark:text-purple-400" /> Registro de Usuarios
      </h1>

      {/* Formulario */}
      <form id="formularioRegistro" onSubmit={handleSubmit} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Columna izquierda */}
          <div className="space-y-5">
            {/* Tipo Documento */}
            <label className="block text-sm">
              <span className="text-gray-700 dark:text-gray-400">Tipo Documento</span>
              <select
                name="tipoDocumento"
                value={formData.tipoDocumento}
                onChange={handleChange}
                required
                className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
              >
                <option value="">Seleccionar</option>
                <option value="cc">Cédula de ciudadanía</option>
                <option value="ti">Tarjeta de identidad</option>
                <option value="ce">Cédula de extranjería</option>
              </select>
            </label>

            {/* No° Documento */}
            <label className="block text-sm">
              <span className="text-gray-700 dark:text-gray-400">No° Documento</span>
              <input
                type="number"
                name="documento"
                value={formData.documento}
                onChange={handleChange}
                required
                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              />
            </label>

            {/* Nombre */}
            <label className="block text-sm">
              <span className="text-gray-700 dark:text-gray-400">Nombre</span>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              />
            </label>

            {/* Apellido */}
            <label className="block text-sm">
              <span className="text-gray-700 dark:text-gray-400">Apellidos</span>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              />
            </label>

            {/* Sexo */}
            <div className="mt-4 text-sm">
              <span className="text-gray-700 dark:text-gray-400">Sexo</span>
              <div className="mt-2 space-x-6">
                <label className="inline-flex items-center text-gray-600 dark:text-gray-400">
                  <input
                    type="radio"
                    name="sexo"
                    value="Hombre"
                    checked={formData.sexo === 'Hombre'}
                    onChange={handleChange}
                    required
                    className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                  />
                  <span className="ml-2">Hombre</span>
                </label>
                <label className="inline-flex items-center text-gray-600 dark:text-gray-400">
                  <input
                    type="radio"
                    name="sexo"
                    value="Mujer"
                    checked={formData.sexo === 'Mujer'}
                    onChange={handleChange}
                    className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                  />
                  <span className="ml-2">Mujer</span>
                </label>
                <label className="inline-flex items-center text-gray-600 dark:text-gray-400">
                  <input
                    type="radio"
                    name="sexo"
                    value="Binario"
                    checked={formData.sexo === 'Binario'}
                    onChange={handleChange}
                    className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                  />
                  <span className="ml-2">Binario</span>
                </label>
              </div>
            </div>

            {/* Teléfono */}
            <label className="block text-sm">
              <span className="text-gray-700 dark:text-gray-400">Teléfono</span>
              <input
                type="number"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              />
            </label>
          </div>

          {/* Columna derecha */}
          <div className="space-y-5">
            {/* Correo Electrónico */}
            <label className="block text-sm">
              <span className="text-gray-700 dark:text-gray-400">Correo Electrónico</span>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              />
            </label>

            {/* Rol */}
            <label className="block text-sm">
              <span className="text-gray-700 dark:text-gray-400">Rol</span>
              <select
                name="rol"
                value={formData.rol}
                onChange={handleChange}
                required
                className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
              >
                <option value="">Seleccionar</option>
                <option value="admin">Administrativa</option>
                <option value="operario">Operario</option>
                <option value="usuario">Cliente</option>
              </select>
            </label>

            {/* Usuario */}
            <label className="block text-sm">
              <span className="text-gray-700 dark:text-gray-400">Usuario</span>
              <input
                type="text"
                name="usuario"
                value={formData.usuario}
                onChange={handleChange}
                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              />
            </label>

            {/* Contraseña */}
            <label className="block text-sm">
              <span className="text-gray-700 dark:text-gray-400">Contraseña</span>
              <input
                type="password"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleChange}
                required
                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              />
            </label>

            {/* Confirmar Contraseña */}
            <label className="block text-sm">
              <span className="text-gray-700 dark:text-gray-400">Confirmar Contraseña</span>
              <input
                type="password"
                name="confirmar"
                value={formData.confirmar}
                onChange={handleChange}
                required
                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              />
            </label>
          </div>
        </div>

        {/* Botón Guardar */}
        <div className="text-center mt-8">
          <button
            type="submit"
            className="px-6 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioRegistro;