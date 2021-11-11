import React from 'react'
import './production.css'
import man from '../../assets/image/man_1_hires.jpg'
import banaras from '../../assets/image/Banaras_15_hires.jpg'
import banaras1 from '../../assets/image/Banaras_13_hires.jpg'
import foto from '../../assets/image/4063_2A.jpg'
import pic1 from '../../assets/image/4997_26A.jpg'
import pic2 from '../../assets/image/IMG_7301.jpg'

export const Production = () => {
    return (
        <div>
            <div className="img-prin-production">
                <img src={banaras} className="img-production" />
                <h1 className="img-title-production">Production</h1>
            </div>
            <div className="production-second">
                <div className="production-second-text">
                    <h1 className="production-second-title">Ethical Crafts</h1>
                    <p className="production-second-p">Exquisite Tibetan highland wool is sheared, carded, spun, dyed, woven, and knotted by hand. Each carpet is unique, stuffed with the individuality inherent in being entirely hand-crafted by expert artisans using traditional techniques, which are virtually unchanged from time beyond memory.</p>
                    <p className="production-second-p">We also use 100% Chinese Silk and Mongolian cashmere to produce a variety of silk/wool and cashmere/wool carpets,extremely soft to the touch with a unique lustrous finish.</p>
                </div>
                <img src={man} className="img-second" />

            </div>
            <img src={foto} className="pic-product-1" />
            <div className="product-third">
                <div className="product-third-text">
                    <h1 className="product-third-title">Hand Tufted Rugs</h1>
                    <p>One of the most popular methods is to use the hand tufted method of making a carpet.  This entails tracing the design onto a fabric which has been stretched tight across a frame, which becomes the primary backing into which the yarn is fired through using a small tufting gun to punch the design into each area as dictated by the design.</p>
                    <p>Depending upon the type of carpet, carving may be required which is done by hand using scissors. Light carving just keeps the change between colours nice and sharp with deeper carving providing a more sculptured appearance.</p>
                    <p>Completion of a tufted rug requires less time than a hand-knotted one, making for a more affordable item keeping the same materials and quality.</p>
                </div>
                <img src={pic1} className="img-product-third" />
            </div>
            <div className="product-fourth">
                <img src={banaras1} className="img-product-fourth" />
                <div className="product-fourth-text">
                    <h1 className="product-fourth-h1" >Under Relief Trimming</h1>
                    <p className="product-fourth-p" >Under relief designs and patterns are carved out by scissors cutting, very finely into the woven rugs. It is a very delicate process because one false cut can ruin the whole rug.</p>
                </div>
            </div>
            <div className="product5">
                <img src={pic2} className="img-5" />
                <div className="production-second-text">
                    <h1 className="production-second-title">Hand Knotted Rugs</h1>
                    <p className="production-second-p" >Rugs as beautiful heirloom pieces that can last for generations and can be used either on the floor or as a wall hanging. The back of hand knotted rugs will be an exact mirror image of the top pile of the rug.</p>
                    <p className="production-second-p" >Weaving is carried out by hand using the traditional Tibetan knotting style on a vertical loom, the continuous knot is selected by our weavers to achieve the highest possible detail from the wool, boasting a minimum of 100 knots per inch in each design.</p>
                    <p className="production-second-p" >Wool is regarded as the strongest, most resilient rug fiber choicefiber, and hand knotted is one the most durable ways to make a carpet. When properly cared for, fine wool rugs can last a lifetime.</p>
                </div>
            </div>
        </div>
    )
}
