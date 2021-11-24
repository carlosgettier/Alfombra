import React, { useState } from 'react'
import axios from 'axios'

export const Administracion = () => {

    const [imagenes, setimagenes] = useState(null)

    const subirArchivos = (e) => {
        setimagenes(e.target.files)
    }
    const [datos, setdatos] = useState({
        titulo: "",
        desarrollo: ""
    })

    const text = (e) => {
        setdatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    const enviar = (e) => {
        e.preventDefault()
        console.log(imagenes)

        const fDate = new FormData()
        for (let i = 0; i < imagenes.length; i++) {


            fDate.append("image", imagenes[i])
        }
        fDate.append("titulo", datos.titulo)
        fDate.append("desarrollo", datos.desarrollo)
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/prensa',
            data: fDate


        }).then(res => console.log(res))


    }


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

            <form onSubmit={enviar}>

                <label for="rutaImagenesSecundarias">Imagenes secundarias del producto</label>
                <small id="errorImagenS"></small>
                <input id="rutaImagenesSecundarias" type="file" name="ImagenesSecundarias"
                    multiple onChange={subirArchivos} />
                <input type="text" name="titulo" onChange={text} />
                <input type="text" name="desarrollo" onChange={text} />
                <button type="submit">subir</button>
            </form>

        </div>
    )
}
