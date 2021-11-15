import React from 'react'
import './product.css'
import gif from '../../assets/gif/leJardin.gif'
import lejardin1 from '../../assets/image/leJardin1.jpg'
import vista from '../../assets/image/lejardinvista.jpg'
import vista2 from '../../assets/image/lejardinvista2.jpg'
import vista3 from '../../assets/image/lejardinvista3.jpg'
import vista4 from '../../assets/image/lejardinvista4.jpg'

import lejardin2 from '../../assets/image/lejardin2.jpg'
import lejardin3 from '../../assets/image/lejardin3.jpg'
import lejardin4 from '../../assets/image/lejardin4.jpg'
import lejardin5 from '../../assets/image/lejardin5.jpg'
import mantenimiento from '../../uploads/Care-Maintenance.pdf'
import delivey from '../../uploads/E-COMMERCE-_-Purchasing-Policy.pdf'


export const Product = () => {
    return (
        <div className="product">
            <h1>LE JARDIN</h1>
            <div className="show-product">
                <img src={gif} />
                <div className="tarjeta-show">
                    <h4>jt.pfeiffer</h4>
                    <p>Modelo:</p>
                    <p>Tamaño:</p>
                    <p>Técnica:</p>
                    <p>Material:</p>
                    <p>Altura:</p>

                </div>

            </div>
            <hr />
            <div className="color">
                <h3>in different colors</h3>
                <div className="img-color">
                    <img src={lejardin1} />
                    <img src={lejardin2} />
                    <img src={lejardin3} />
                    <img src={lejardin4} />
                    <img src={lejardin5} />
                </div>

            </div>
            <hr />
            <div className="vistas">
                <img src={vista} />
                <img src={vista2} />
                <img src={vista3} />
                <img src={vista4} />

            </div>
            <hr />
            <div className="indicaciones">
                <h4>CARE & MANTEINANCE</h4>
                <p>Our rugs are handcrafted to give you many years of use. To further extend their lifetime, we recommend a regular maintenance in order to retain its shape and appearance.</p>
                <p>For more information, please download our Care & Manteinance Guide <a href={mantenimiento} target="_blank">here</a>.</p>

                <h4>DELIVERY & RETURNS</h4>
                <p>The delivery is door-to-door from our manufacturer in Nepal to the designated delivery address. We try to send all orders by the quickest route possible.</p>
                <p>Our lead time for Hand Tufted rugs is 5-6 weeks, while Hand Knotted rugs is 6-7 weeks. This estimate does not include shipping.</p>
                <p>We deliver to most destinations, worldwide. For more information, please download our Purchasing Policy <a href={delivey} target="_blank">here</a>.</p>

            </div>
        </div>
    )
}
