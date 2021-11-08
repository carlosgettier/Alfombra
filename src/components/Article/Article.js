import React from 'react'
import './article.css'
import interior from '../../assets/image/interior-36.jpg'
export const Article = () => {
    return (

        <div class="card card-press">
            <img src={interior} class="card-img-top img-press" alt="..." />
            <div class="card-body">
                <p class="card-text-title">Interior Desing </p>
                <p class="card-text-p">Argentina </p>
                <p class="card-text-p">Agust,2019 </p>
            </div>
        </div>


    )
}
