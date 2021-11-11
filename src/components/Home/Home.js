import React from 'react'
import './home.css'
import NYC from '../../assets/image/1.NYC-WEEK-DESIGN.jpg'
import slide1 from '../../assets/image/foto-slide-1-1.jpg'
import slide2 from '../../assets/image/foto-slide-4.jpg'
import slide3 from '../../assets/image/foto-slide-6.jpg'
import glorious from '../../assets/image/noticia.jpg'
import lejardinjuliaPortrait from '../../assets/image/noticia2.jpg'
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

            <div className="home-new">
                <h1 className="home-title">Jt.pfeiffer</h1>
                <h3 className="home-title-p animado">Nuestras alfombras son piezas únicas creadas para trascender el tiempo como obra de arte.</h3>
                <div className="news-show">
                    <img className="img-news" src={glorious} />
                    <h3 className=" news-title" >THE EYE OF THE BEHOLDER </h3>
                    <p className=" news-title">At Casa Mass </p>

                </div>
                <div className="news-show">
                    <h3 className=" news-title">IN DIALOGUE WITH ART</h3>
                    <p className=" news-title">At Miranda Bosch Gallery </p>
                    <img className="img-news" src={lejardinjuliaPortrait} />
                </div>


            </div>
            <div className="showroom-container">
                <div className="titulos-show">
                    <h2 className="showroom"> Our Showroom</h2>
                </div>
                <div className="container-img-showroom">
                    <div className="contenedor-buenosaires">
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
                        <div className="bsastitulo">
                            <h3>BUENOS AIRES SHOWROOM</h3>
                            <p>visit our showroom</p>
                            <a href="/contact" className=" link-showroom"><h4 className="animado">Make an appointment</h4></a>
                        </div>
                    </div>
                    <div className="contenedor-nycity">
                        <div className="nyctitulo">
                            <h3>NEW YORK SHOWROOM</h3>
                            <p>visit our showroom</p>
                            <a href="/contact" className=" link-showroom"><h4 className="animado">Make an appointment</h4></a>
                        </div>
                        <div className="showroom-NYC">
                            <img className="img-showroom" src={NYC} />
                            <p className="title-NYC">NEW YORK SHOWROOM</p>
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


            </div>
            <nav className="navegador-lista">
                <ul className="navegador-lista-primero">
                    <li>
                        <a href="/category/press" className="linkde-nav" >PRESS</a>
                    </li>
                    <li>
                        <a href="/category/news" className="linkde-nav">NEWS</a>
                    </li>
                    <li>
                        <a href="/about" className="linkde-nav">ABOUT</a>
                    </li>
                </ul>
                <ul className="navegador-lista-segundo" >
                    <li>
                        <a href="/production" className="linkde-nav" >PRODUCTION</a>
                    </li>
                    <li>
                        <a href="#" className="linkde-nav" >GALERY</a>
                    </li>
                    <li>
                        <a href="/contact" className="linkde-nav" >CONTACT</a>
                    </li>


                </ul>
            </nav>
            <div className="catalogue">
                <h3 className="catalogue-title">CATALOGUE</h3>
                <div className="conteiner-catalogue">
                    <div className="catalogue-2019">
                        <div className="img-2019">
                            <img className="catalogue-img" src={catalogue} />
                        </div>
                        <div className="titulo2019">
                            <a href={Pdf} target="_blank" className="link-catalogos"> <h3 className=" catalogue-title-img" >Catalogue 2019</h3></a>

                        </div>
                    </div>
                    <div className="catalogue-2020">
                        <div className="titulo2020">
                            <a href={PdfCollection} target="_blank" className="link-catalogos">  <h3 className=" catalogue-title-img" >Catalogue 2019</h3></a>
                        </div>
                        <div className="img2020">
                            <img className="catalogue-img-2020" src={presskit} />
                        </div>
                    </div>

                </div>
            </div>
            <div className="goodweave">
                <div className="goodweave-title">
                    <h2 className="goodweave-title-title">Goodweave Foundation</h2>
                    <p className="goodweave-title-p">We are committed to creating ethical rugs and working towards a better future for the industry and carpet weaving families across the globe.</p>
                </div>
                <img src={goodweave} className="img-goodweave" />

            </div>
            <div className="made-container">
                <h1 className="made-prin-title">Our Production</h1>
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
