function Producto({ producto, agregarAlCarrito }) {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{producto.nombre}</h5>

          <p className="card-text text-secondary">
            Producto disponible
          </p>

          <h4 className="mt-auto mb-3">
            ${producto.precio.toLocaleString('es-CL')}
          </h4>

          <button
            className="btn btn-primary"
            onClick={() => agregarAlCarrito(producto)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default Producto