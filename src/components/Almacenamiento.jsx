import React, { Component } from 'react'

class Almacenamiento extends Component {
  constructor(props) {
    super(props)

    this.state = {
      archivo: null,
      error: ''
    }
  }

  seleccionarArchivo = (e) => {
    const archivo = e.target.files[0]

    this.setState({
      archivo: null,
      error: ''
    })

    if (!archivo) {
      return
    }

    const tiposPermitidos = [
      'image/jpeg',
      'image/png',
      'application/pdf'
    ]

    if (!tiposPermitidos.includes(archivo.type)) {
      this.setState({
        error: 'Solo se permiten archivos JPG, PNG o PDF.'
      })
      return
    }

    const tamanoMaximo = 5 * 1024 * 1024

    if (archivo.size > tamanoMaximo) {
      this.setState({
        error: 'El archivo no puede superar los 5 MB.'
      })
      return
    }

    this.setState({
      archivo: archivo
    })
  }

  render() {
    const { archivo, error } = this.state

    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h3 className="mb-0">
                  Almacenamiento de archivos
                </h3>
              </div>

              <div className="card-body p-4">

                <p className="text-secondary">
                  Seleccione un archivo para almacenarlo mediante
                  Firebase Storage.
                </p>

                <div className="alert alert-warning">
                  <strong>Firebase Storage:</strong>{' '}
                  la funcionalidad de carga fue preparada para el
                  proyecto. El bucket no se encuentra habilitado debido
                  a que Firebase requiere activar facturación para
                  utilizar el servicio en este proyecto académico.
                </div>

                {error && (
                  <div className="alert alert-danger">
                    {error}
                  </div>
                )}

                <div className="mb-3">
                  <label
                    htmlFor="archivo"
                    className="form-label fw-semibold"
                  >
                    Seleccionar archivo
                  </label>

                  <input
                    type="file"
                    id="archivo"
                    className="form-control"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={this.seleccionarArchivo}
                  />

                  <div className="form-text">
                    Formatos permitidos: JPG, PNG y PDF.
                    Tamaño máximo: 5 MB.
                  </div>
                </div>

                {archivo && (
                  <div className="alert alert-success">
                    <strong>Archivo seleccionado correctamente</strong>

                    <hr />

                    <div>
                      <strong>Nombre:</strong> {archivo.name}
                    </div>

                    <div>
                      <strong>Tipo:</strong> {archivo.type}
                    </div>

                    <div>
                      <strong>Tamaño:</strong>{' '}
                      {(archivo.size / 1024 / 1024).toFixed(2)} MB
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  className="btn btn-primary"
                  disabled
                >
                  Subir a Firebase Storage
                </button>

                <div className="form-text mt-2">
                  La carga requiere un bucket de Firebase Storage
                  habilitado.
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Almacenamiento