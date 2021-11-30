import React from 'react'
import hilares from '../../assets/image/hires.jpg'
import hires from '../../assets/image/IMG_hires.jpg'
import juliaPfeiffer from '../../assets/image/julia-pfeiffer.jpg'
import good from '../../assets/image/goodweave21.jpg'
import './About.css'

export const About = () => {
    return (
        <div className="about">
            <div className="prin-about">
                <img src={hilares} className="img-prin-about" />
                <h1 className="title-about-prin">ABOUT</h1>
            </div>
            <div className="about-first">

                <div className="container-img-about">
                    <img src={hires} className="img-about" />
                    <div className="about-p">
                        <h1 className="about-title">Art Carpets</h1>
                        <p>The passion we feel for design translates into creating meaningful and beautiful designs.</p>
                        <p>Each bespoke carpet we make is a unique work of art, but one with added value in its functionality.</p>
                        <p>Lush carpets handmade in Nepal employing the very best tibetan wool, silk and cashemere.</p>
                        <p>Bold designs come together in a wonderland of patterns fused with a vibrant color palette that merge touch and feel simultaneously.</p>
                        <p>We blend, mix, juxtapose and empower our designs as forms of art.</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src={good} className="good" />
                    <div className="container-about-j">
                        <div className="about-container-p">
                            <h2 className="title-h2">Julia Tonconogy Pfeiffer</h2>
                            <p className="about-p-j">JT.Pfeiffer is the outcome of a lifetime experience engaged in the Design World, involving creative direction, interior design and visual communication.</p>
                            <p className="about-p-j">Her passion for design started to grow naturally from a very young age, coming from a family that has been dedicated to architecture for almost a Century, design was part of he ever day life. Born and raised in Buenos Aires, she lived and worked in New York and Miami for many years, which were crucial in her professional growth.</p>
                            <p className="about-p-j">Julia´s work includes collaborations and commissions with renowned brands and large-scale projects such as hotels, residential and commercial buildings, interior design for private residences, public areas, along with product, furniture, and graphic design, as well as brand identity for numerous clients.</p>
                            <p className="about-p-j">As a passionate soul, she enjoys challenging perceptions of people and places transcending through design, in a world of colors, textures, and shapes that feel alive.</p>
                        </div>
                        <img src={juliaPfeiffer} className="img-about-j" />
                    </div>
                </div>
            </div>
        </div>
    )
}
