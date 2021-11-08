import React from 'react'
import './home.css'
import NYC from '../../assets/image/1.NYC-WEEK-DESIGN.jpg'
import slide1 from '../../assets/image/foto-slide-1-1.jpg'
import slide2 from '../../assets/image/foto-slide-4.jpg'
import slide3 from '../../assets/image/foto-slide-6.jpg'
import glorious from '../../assets/image/gloriusrupture.jpg'
import lejardinjuliaPortrait from '../../assets/image/LE-JARDIN-JULIA-PORTRAIT.jpg'
import scaled from '../../assets/image/buenosAires.png'
import catalogue from '../../assets/image/catalogue.jpg'
import presskit from '../../assets/image/presskit.jpg'
import product from '../../assets/image/produc.jpg'
import jtp from '../../assets/image/JTP_Web_News_Munar.jpg'
import rugs from '../../assets/image/RUGS-NYC-.jpg'
import madeinnepal from '../../assets/image/madeinnepal.jpg'
import goodweave from '../../assets/image/goodweave.jpg'
import Pdf from '../../uploads/PhotoBook-MAY-2019.pdf'
import PdfCollection from '../../uploads/JT.PFEIFFER-COLLECTION-2019.pdf'
export const Home = () => {

    window.addEventListener("load", function () {
        let animado = document.querySelectorAll(".animado");
        function mostrarScroll() {
            let scrollTop = document.documentElement.scrollTop;
            for (let i = 0; i < animado.length; i++) {
                let altura = animado[i].offsetTop;
                if (altura - 500 < scrollTop) {
                    animado[i].style.opacity = 1;
                } if (altura - 100 < scrollTop) {
                    animado[i].style.opacity = 0;
                }
            }
        }

        window.addEventListener('scroll', mostrarScroll)
    })
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide col-12 mt-5 mb-5 anchoCarrusel" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src={NYC} className="altura" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={slide1} className="altura" alt="..." />
                        <img src={slide1} className="altura" alt="..." />
                        <img src={slide1} className="altura" alt="..." />
                        {/* <img src={slide3} className="altura" alt="..." /> */}
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} className="altura" alt="..." />

                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="home-new">
                <h1 className="home-title">Jt.pfeiffer</h1>
                <h3 className="home-title-p animado">Nuestras alfombras son piezas únicas creadas para trascender el tiempo como obra de arte.</h3>
                <div className="news-home">

                    <div className="news-show">
                        <img className="img-news" src={glorious} />
                        <h3 className="animado news-title" >Glorious Rupture  </h3>

                    </div>
                    <div className="news-show">
                        <img className="img-news" src={lejardinjuliaPortrait} />
                        <h3 className="animado news-title">Glorious Rupture</h3>
                    </div>

                </div>
            </div>
            <div className="showroom-container">
                <h2 className="showroom"> Our Showroom</h2>
                <a href="/contact" className=" link-showroom"><h4 className="animado">Make an appointment</h4></a>
                <div className="container-img-showroom">
                    <div className="showroom-bsAs">
                        <img className="img-showroom" src={scaled} />
                        <p className="title-BuenosAires">BUENOS AIRES SHOWROOM</p>
                        <input type="checkbox" id="btn-modal" />
                        <label for="btn-modal" className="lbl-modal">see more</label>

                        <div className="modal">
                            <div className="contenedor" >
                                <header>BUENOS AIRES SHOWROOM </header>
                                <label for="btn-modal">X</label>
                                {/* <div className="contenido">

                                </div> */}
                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={scaled} className="d-block w-100 tamañoFoto" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={slide1} className="d-block w-100 tamañoFoto" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={slide1} className="d-block w-100 tamañoFoto" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="showroom-NYC">
                        <img className="img-showroom" src={NYC} />
                        <p className="title-BuenosAires">NEW YORK SHOWROOM</p>
                        <input type="checkbox" id="btn-modals" />
                        <label for="btn-modals" className="lbl-modals">see more</label>

                        <div className="modal">
                            <div className="contenedors" >
                                <header>SHOWROOM NEW YORK </header>
                                <label for="btn-modals">X</label>
                                {/* <div className="contenido">
                                    <p>hola hola hoal</p>
                                </div> */}
                                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={slide1} class="d-block w-100 tamañoFoto" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={slide3} class="d-block w-100 tamañoFoto" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rugs} class="d-block w-100 tamañoFoto" alt="..." />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <div className="catalogue">
                <h3 className="catalogue-title">Catalogues</h3>
                <div className="conteiner-catalogue">
                    <div>
                        <img className="catalogue-img" src={catalogue} />
                        <a href={Pdf} target="_blank"> <h3 className="animado catalogue-title-img" >Catalogue 2019</h3></a>
                    </div>
                    <div>
                        <a href={PdfCollection} target="_blank"> <img className="catalogue-img" src={presskit} />
                            <h3 className="animado catalogue-title-img" >Catalogue 2019</h3></a>
                    </div>
                    <div>
                        <img className="catalogue-img" src={jtp} />
                        <h3 className="animado catalogue-title-img">Catalogue 2019</h3>
                    </div>
                </div>
            </div>
            <div className="goodweave">
                <div className="goodweave-title">
                    <h2 className="goodweave-title-title">Goodweave Foundation</h2>
                    <p className="goodweave-title-p">We are committed to creating ethical rugs and working towards a better future for the industry and carpet weaving families across the globe.</p>
                    <p className="goodweave-title-p">JT.Pfeiffer is a full member of Goodweave, Each one of our rugs comes with a certified label in the back, being the best assurance that no child was exploited to make a rug and that other sustainable production practices were used.</p>
                </div>
                <img src={goodweave} className="img-goodweave" />

            </div>
            <div className="made-container">
                <a href="/production" className="made-prin-title">Our Production</a>
                <div className="container-img-made">
                    <div className="img-title-made">
                        <img className="img-made" src={product} />
                        <h2 className="made-title">Made in Nepal</h2>
                        <a href="/production" className="made-a"> <p className="made-p" >More about it</p></a>
                    </div>
                    <div className="img-title-made" >
                        <img className="img-made" src={madeinnepal} />
                        <h3 className="made-subtitle">WORLDWIDE DELIVERY</h3>
                        <a href="/production" className="made-a"> <p className="made-p" >More about it</p></a>
                    </div>
                </div>
            </div >

        </div >
    )
}
