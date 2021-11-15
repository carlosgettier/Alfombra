import React from 'react'
import './gallery.css'
import gif from '../../assets/gif/leJardin.gif'
import giflamant from '../../assets/gif/flamant.gif'

export const Gallery = () => {
    return (
        <div>
            <h1 className="gallery-h1">PRODUCT GALLERY</h1>
            <div className="naturalRopture">
                <h3 className="title-natural"> NATURAL RUPTURE COLLECTION</h3>
                <div className="container-natural">
                    <div className="img-natural">
                        <a href="/gallery/le jardin"> <img src={gif} />
                            <h4 className="img-naturals-h4">LE JARDIN</h4></a>
                    </div>
                    <div className="img-naturals">
                        <a href="/gallery/le jardin"><img src={giflamant} />
                            <h4 className="img-naturals-h4">FLAMANT</h4></a>

                    </div>
                </div>
            </div>

        </div>
    )
}
