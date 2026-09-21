import React, { Component } from 'react'
import Producto from './Producto'

class ListaProductos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productos: [
        { id: 1, nombre: 'Notebook', precio: 599990 },
        { id: 2, nombre: 'Mouse', precio: 19990 },
        { id: 3, nombre: 'Teclado', precio: 29990 },
        { id: 4, nombre: 'Monitor', precio: 189990 }
      ],
      carrito: []
    }
  }

  agregarAlCarrito = (producto) => {
    const productoExiste = this.state.carrito.find(
      (item) => item.id === producto.id
    )

    if (productoExiste) {
      const carritoActualizado = this.state.carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )

      this.setState({
        carrito: carritoActualizado
      })
    } else {
      this.setState({
        carrito: [
          ...this.state.carrito,
          { ...producto, cantidad: 1 }
        ]
      })
    }
  }

  aumentarCantidad = (id) => {
    const carritoActualizado = this.state.carrito.map((producto) =>
      producto.id === id
        ? { ...producto, cantidad: producto.cantidad + 1 }
        : producto
    )

    this.setState({
      carrito: carritoActualizado
    })
  }

  disminuirCantidad = (id) => {
    const producto = this.state.carrito.find(
      (item) => item.id === id
    )

    if (producto.cantidad > 1) {
      const carritoActualizado = this.state.carrito.map((item) =>
        item.id === id
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )

      this.setState({
        carrito: carritoActualizado
      })
    } else {
      this.eliminarProducto(id)
    }
  }

  eliminarProducto = (id) => {
    const carritoActualizado = this.state.carrito.filter(
      (producto) => producto.id !== id
    )

    this.setState({
      carrito: carritoActualizado
    })
  }

  render() {
    const totalCarrito = this.state.carrito.reduce(
      (total, producto) =>
        total + producto.precio * producto.cantidad,
      0
    )

    const cantidadTotal = this.state.carrito.reduce(
      (total, producto) => total + producto.cantidad,
      0
    )

    return (
      <div className="container py-4">

        {/* Encabezado */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="mb-1">Productos</h2>
            <p className="text-secondary mb-0">
              Selecciona los productos que deseas agregar.
            </p>
          </div>

          <span className="badge bg-primary fs-6">
            Carrito: {cantidadTotal}
          </span>
        </div>

        {/* Productos */}
        <div className="row">
          {this.state.productos.map((producto) => (
            <Producto
              key={producto.id}
              producto={producto}
              agregarAlCarrito={this.agregarAlCarrito}
            />
          ))}
        </div>

        {/* Carrito */}
        <div className="card shadow-sm mt-4">
          <div className="card-header bg-dark text-white">
            <h4 className="mb-0">Carrito de compras</h4>
          </div>

          <div className="card-body">
            {this.state.carrito.length === 0 ? (
              <div
                className="alert alert-secondary mb-0"
                role="alert"
              >
                El carrito está vacío.
              </div>
            ) : (
              <>
                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead>
                      <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>

                    <tbody>
                      {this.state.carrito.map((producto) => (
                        <tr key={producto.id}>
                          <td>
                            <strong>{producto.nombre}</strong>
                          </td>

                          <td>
                            $
                            {producto.precio.toLocaleString(
                              'es-CL'
                            )}
                          </td>

                          <td>
                            <span className="badge bg-secondary fs-6">
                              {producto.cantidad}
                            </span>
                          </td>

                          <td>
                            $
                            {(
                              producto.precio *
                              producto.cantidad
                            ).toLocaleString('es-CL')}
                          </td>

                          <td>
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-sm btn-outline-secondary"
                                onClick={() =>
                                  this.disminuirCantidad(
                                    producto.id
                                  )
                                }
                              >
                                −
                              </button>

                              <button
                                className="btn btn-sm btn-outline-primary"
                                onClick={() =>
                                  this.aumentarCantidad(
                                    producto.id
                                  )
                                }
                              >
                                +
                              </button>

                              <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() =>
                                  this.eliminarProducto(
                                    producto.id
                                  )
                                }
                              >
                                Eliminar
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="text-end mt-3">
                  <h4>
                    Total:{' '}
                    <span className="text-primary">
                      $
                      {totalCarrito.toLocaleString('es-CL')}
                    </span>
                  </h4>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ListaProductos