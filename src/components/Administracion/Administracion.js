import React from 'react'

export const Administracion = () => {
    return (
        <div>
            <h1>ADMINISTRACION</h1>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav col-12 d-flex justify-content-around">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Noticias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Prensa</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Productos</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
