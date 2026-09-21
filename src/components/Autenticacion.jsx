import React, { Component } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../firebase'

class Autenticacion extends Component {
  constructor(props) {
    super(props)

    this.state = {
      correo: '',
      password: '',
      usuario: null,
      mensaje: '',
      error: '',
      cargando: false
    }
  }

  componentDidMount() {
    this.unsubscribe = onAuthStateChanged(auth, (usuario) => {
      this.setState({
        usuario: usuario
      })
    })
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }

  manejarCambio = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      mensaje: '',
      error: ''
    })
  }

  registrarUsuario = async (e) => {
    e.preventDefault()

    const { correo, password } = this.state

    if (!correo || !password) {
      this.setState({
        error: 'Debe ingresar correo electrónico y contraseña.'
      })
      return
    }

    if (password.length < 6) {
      this.setState({
        error: 'La contraseña debe tener al menos 6 caracteres.'
      })
      return
    }

    this.setState({
      cargando: true,
      mensaje: '',
      error: ''
    })

    try {
      await createUserWithEmailAndPassword(
        auth,
        correo,
        password
      )

      this.setState({
        correo: '',
        password: '',
        cargando: false,
        mensaje: 'Usuario registrado correctamente.'
      })
    } catch (error) {
      console.error('Error al registrar:', error)

      let mensajeError = 'No fue posible registrar el usuario.'

      if (error.code === 'auth/email-already-in-use') {
        mensajeError = 'El correo electrónico ya se encuentra registrado.'
      } else if (error.code === 'auth/invalid-email') {
        mensajeError = 'El correo electrónico no es válido.'
      } else if (error.code === 'auth/weak-password') {
        mensajeError = 'La contraseña es demasiado débil.'
      }

      this.setState({
        cargando: false,
        error: mensajeError
      })
    }
  }

  iniciarSesion = async (e) => {
    e.preventDefault()

    const { correo, password } = this.state

    if (!correo || !password) {
      this.setState({
        error: 'Debe ingresar correo electrónico y contraseña.'
      })
      return
    }

    this.setState({
      cargando: true,
      mensaje: '',
      error: ''
    })

    try {
      await signInWithEmailAndPassword(
        auth,
        correo,
        password
      )

      this.setState({
        correo: '',
        password: '',
        cargando: false,
        mensaje: 'Sesión iniciada correctamente.'
      })
    } catch (error) {
      console.error('Error al iniciar sesión:', error)

      this.setState({
        cargando: false,
        error: 'Correo electrónico o contraseña incorrectos.'
      })
    }
  }

  cerrarSesion = async () => {
    try {
      await signOut(auth)

      this.setState({
        mensaje: 'Sesión cerrada correctamente.',
        error: ''
      })
    } catch (error) {
      console.error('Error al cerrar sesión:', error)

      this.setState({
        error: 'No fue posible cerrar la sesión.'
      })
    }
  }

  render() {
    const {
      correo,
      password,
      usuario,
      mensaje,
      error,
      cargando
    } = this.state

    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">

            <div className="card shadow-sm">

              <div className="card-header bg-primary text-white">
                <h3 className="mb-0">
                  Firebase Authentication
                </h3>
              </div>

              <div className="card-body p-4">

                {mensaje && (
                  <div className="alert alert-success">
                    {mensaje}
                  </div>
                )}

                {error && (
                  <div className="alert alert-danger">
                    {error}
                  </div>
                )}

                {usuario ? (
                  <>
                    <div className="alert alert-success">
                      <strong>Usuario autenticado</strong>

                      <br />

                      {usuario.email}
                    </div>

                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={this.cerrarSesion}
                    >
                      Cerrar sesión
                    </button>
                  </>
                ) : (
                  <form>

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
                        value={correo}
                        onChange={this.manejarCambio}
                        placeholder="ejemplo@correo.cl"
                      />
                    </div>

                    <div className="mb-4 text-start">
                      <label
                        htmlFor="password"
                        className="form-label fw-semibold"
                      >
                        Contraseña{' '}
                        <span className="text-danger">*</span>
                      </label>

                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        value={password}
                        onChange={this.manejarCambio}
                        placeholder="Mínimo 6 caracteres"
                      />
                    </div>

                    <div className="d-flex gap-2">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.iniciarSesion}
                        disabled={cargando}
                      >
                        {cargando
                          ? 'Procesando...'
                          : 'Iniciar sesión'}
                      </button>

                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={this.registrarUsuario}
                        disabled={cargando}
                      >
                        Crear cuenta
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Autenticacion