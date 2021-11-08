import React from 'react'
import './new.css'
import design1 from '../../assets/image/Design-Week.jpg'
import design2 from '../../assets/image/Design-Week_1.jpg'
import design3 from '../../assets/image/Design-Week_2.jpg'
import design4 from '../../assets/image/Design-Week_4.jpg'
import design5 from '../../assets/image/Design-Week_5.jpg'
export const New = () => {
    return (
        <div className="new">
            <h1 className="new-title-prin">The Bowery Collection Launch</h1>
            <div className="new-p">
                <p>Whether on the floor, draping a surface or mounted on the wall, these rug designs in silk, cashmere and wool, are always the art star in the room.</p>
                <p>This Spring the brand introduces Le Jardin to lead its debut in New York during Design Month, at a dedicated downtown showcase.</p>
                <p>Le Jardin, inspired by the designer’s experience of a creatively landscaped garden from her childhood, Le Jardin displays exuberant architectural forms, while exploring colors only found in nature, created custom in Nepal for New York within this brand new collection of textiles.</p>
            </div>
            <div className="new-img">
                <img src={design1} className="new-img-img" />
                <img src={design2} className="new-img-img" />
                <img src={design3} className="new-img-img" />
                <img src={design4} className="new-img-img" />
                <img src={design5} className="new-img-img" />

            </div>
        </div>
    )
}
