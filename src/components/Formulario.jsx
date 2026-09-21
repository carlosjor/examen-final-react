import React, { Component } from 'react'
import SimpleReactValidator from 'simple-react-validator'
import {
  collection,
  addDoc,
  serverTimestamp
} from 'firebase/firestore'
import { db } from '../firebase'

class Formulario extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nombre: '',
      correo: '',
      telefono: '',
      mensaje: '',
      guardando: false,
      exito: '',
      error: ''
    }

    this.validator = new SimpleReactValidator()
  }

  // Actualiza los campos del formulario
  manejarCambio = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      exito: '',
      error: ''
    })
  }

  // Guarda los datos en Firestore
  manejarEnvio = async (e) => {
    e.preventDefault()

    if (this.validator.allValid()) {
      this.setState({
        guardando: true,
        exito: '',
        error: ''
      })

      try {
        // Crea un nuevo documento en la colección "clientes"
        await addDoc(collection(db, 'clientes'), {
          nombre: this.state.nombre,
          correo: this.state.correo,
          telefono: this.state.telefono,
          mensaje: this.state.mensaje,
          fechaRegistro: serverTimestamp()
        })

        // Limpia el formulario después de guardar
        this.setState({
          nombre: '',
          correo: '',
          telefono: '',
          mensaje: '',
          guardando: false,
          exito: 'Cliente registrado correctamente.',
          error: ''
        })

        // Oculta los mensajes de validación
        this.validator.hideMessages()
        this.forceUpdate()

      } catch (error) {
        console.error('Error al guardar en Firestore:', error)

        this.setState({
          guardando: false,
          exito: '',
          error: 'No fue posible registrar el cliente. Intente nuevamente.'
        })
      }

    } else {
      // Muestra los mensajes si existen campos inválidos
      this.validator.showMessages()
      this.forceUpdate()
    }
  }

  render() {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div className="card shadow-sm">

              {/* Encabezado */}
              <div className="card-header bg-primary text-white">
                <h3 className="mb-0">
                  Registro de cliente
                </h3>
              </div>

              <div className="card-body p-4">

                <p className="text-secondary mb-4">
                  Complete los siguientes datos para registrar un cliente.
                </p>

                {/* Mensaje de éxito */}
                {this.state.exito && (
                  <div
                    className="alert alert-success"
                    role="alert"
                  >
                    {this.state.exito}
                  </div>
                )}

                {/* Mensaje de error */}
                {this.state.error && (
                  <div
                    className="alert alert-danger"
                    role="alert"
                  >
                    {this.state.error}
                  </div>
                )}

                <form onSubmit={this.manejarEnvio}>

                  {/* Nombre */}
                  <div className="mb-3 text-start">
                    <label
                      htmlFor="nombre"
                      className="form-label fw-semibold"
                    >
                      Nombre{' '}
                      <span className="text-danger">*</span>
                    </label>

                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      className="form-control"
                      value={this.state.nombre}
                      onChange={this.manejarCambio}
                      placeholder="Ingrese su nombre"
                    />

                    <div className="text-danger small mt-1">
                      {this.validator.message(
                        'nombre',
                        this.state.nombre,
                        'required|min:3',
                        {
                          messages: {
                            required: 'El nombre es obligatorio.',
                            min: 'El nombre debe tener al menos 3 caracteres.'
                          }
                        }
                      )}
                    </div>
                  </div>

                  {/* Correo */}
                  <div className="mb-3 text-start">
                    <label
                      htmlFor="correo"
                      className="form-label fw-semibold"
                    >
                      Correo electrónico{' '}
                      <span className="text-danger">*</span>
                    </label>

                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      className="form-control"
                      value={this.state.correo}
                      onChange={this.manejarCambio}
                      placeholder="ejemplo@correo.cl"
                    />

                    <div className="text-danger small mt-1">
                      {this.validator.message(
                        'correo',
                        this.state.correo,
                        'required|email',
                        {
                          messages: {
                            required: 'El correo electrónico es obligatorio.',
                            email: 'Ingrese un correo electrónico válido.'
                          }
                        }
                      )}
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="mb-3 text-start">
                    <label
                      htmlFor="telefono"
                      className="form-label fw-semibold"
                    >
                      Teléfono{' '}
                      <span className="text-danger">*</span>
                    </label>

                    <input
                      type="text"
                      id="telefono"
                      name="telefono"
                      className="form-control"
                      value={this.state.telefono}
                      onChange={this.manejarCambio}
                      placeholder="+56 9 1234 5678"
                    />

                    <div className="text-danger small mt-1">
                      {this.validator.message(
                        'telefono',
                        this.state.telefono,
                        'required|min:8',
                        {
                          messages: {
                            required: 'El teléfono es obligatorio.',
                            min: 'El teléfono debe tener al menos 8 caracteres.'
                          }
                        }
                      )}
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div className="mb-4 text-start">
                    <label
                      htmlFor="mensaje"
                      className="form-label fw-semibold"
                    >
                      Mensaje{' '}
                      <span className="text-danger">*</span>
                    </label>

                    <textarea
                      id="mensaje"
                      name="mensaje"
                      className="form-control"
                      rows="4"
                      value={this.state.mensaje}
                      onChange={this.manejarCambio}
                      placeholder="Ingrese un mensaje"
                    ></textarea>

                    <div className="text-danger small mt-1">
                      {this.validator.message(
                        'mensaje',
                        this.state.mensaje,
                        'required|min:10',
                        {
                          messages: {
                            required: 'El mensaje es obligatorio.',
                            min: 'El mensaje debe tener al menos 10 caracteres.'
                          }
                        }
                      )}
                    </div>
                  </div>

                  {/* Botón Guardar */}
                  <div className="text-end">
                    <button
                      type="submit"
                      className="btn btn-primary px-4"
                      disabled={this.state.guardando}
                    >
                      {this.state.guardando
                        ? 'Guardando...'
                        : 'Guardar'}
                    </button>
                  </div>

                </form>

                <div className="mt-3 text-start">
                  <small className="text-secondary">
                    <span className="text-danger">*</span>{' '}
                    Campos obligatorios
                  </small>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Formulario