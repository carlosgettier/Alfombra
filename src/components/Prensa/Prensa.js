import React from 'react'
import './prensa.css'
import revista from '../../assets/image/Revista-MIA1.jpg'
import revista2 from '../../assets/image/Revista-MIA-2.jpg'
import revista3 from '../../assets/image/Revista-MIA-3 (1).jpg'
import revista4 from '../../assets/image/Revista-MIA-3.jpg'
import revista5 from '../../assets/image/Revista-MIA-4 (1).jpg'
import revista6 from '../../assets/image/Revista-MIA-4.jpg'

export const Prensa = () => {
    return (
        <div className="prensa">
            <h1 className="prensa-title">Wide</h1>
            <div className="img-prensa">
                <img src={revista} className="prensa-img" />
                <img src={revista2} className="prensa-img" />
                <img src={revista3} className="prensa-img" />
                <img src={revista4} className="prensa-img" />
                <img src={revista5} className="prensa-img" />
                <img src={revista6} className="prensa-img" />

            </div>
        </div>
    )
}
