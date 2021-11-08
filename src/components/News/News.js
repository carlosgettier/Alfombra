import React from 'react'
import { Noticias } from '../Noticias/Noticias'
import './news.css'
export const News = () => {
    return (
        <div className="news">
            <h1 className="title-new">NEWS</h1>
            <div className="show-news">
                <Noticias />
                <Noticias />
                <Noticias />
                <Noticias />
                <Noticias />

            </div>
        </div>
    )
}
