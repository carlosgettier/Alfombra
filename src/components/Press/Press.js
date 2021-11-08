import React from 'react'
import interior from '../../assets/image/interior-36.jpg'
import { Article } from '../Article/Article'
import './press.css'

export const Press = () => {
    return (
        <div className="press">
            <h1 className="press-title">PRESS</h1>
            <div className="article-press" >
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />



            </div>

        </div>
    )
}
