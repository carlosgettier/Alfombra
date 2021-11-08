import React from 'react'
import interior from '../../assets/image/interior-36.jpg'
import './noticias.css'

export const Noticias = () => {
    return (
        <div class="card card-press-noticias">
            <img src={interior} class="card-img-top img-press-noticias" alt="..." />
            <div class="card-body">
                <p class="card-text-title-noticias">Interior Desing </p>
                <p class="card-text-p-noticias">Argentina </p>
                <p class="card-text-p-noticias">Agust,2019 </p>
            </div>
        </div>
    )
}
