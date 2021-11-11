import React from 'react'
import './article.css'
import interior from '../../assets/image/interior-36.jpg'
import noticia from '../../assets/image/noticia.jpg'
import noticia2 from '../../assets/image/foto-slide-6.jpg'
import noticia3 from '../../assets/image/foto-slide-8.jpg'



export const Article = () => {
    let data = [
        {
            id: 1,
            imgSrc: noticia3,
        },
        {
            id: 2,
            imgSrc: noticia,
            titulo: "hola"
        },
        {
            id: 3,
            imgSrc: interior,
        },
        {
            id: 4,
            imgSrc: noticia3,
        },

        {
            id: 5,
            imgSrc: noticia3,
        },
        {
            id: 6,
            imgSrc: noticia,
        },
        {
            id: 7,
            imgSrc: noticia3,
        },

    ]
    return (

        <div className="gallery">
            {data.map((item, i) => {
                return (
                    <div className="pics" key={i}>
                        <img className="img-gallery" src={item.imgSrc} />
                        <a href={`/category/news/${item.titulo}`}><p className="titulo-titulo">revista para ti</p></a>


                    </div>
                )
            })}

        </div >


    )
}
