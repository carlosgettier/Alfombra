import React from 'react'
import './NavBar.css'

export const NavBar = () => {
    return (

        <header>


            <input type="checkbox" id="btn-menu" />
            <label for="btn-menu">Jt.pfeiffer</label>

            <nav className="menu">
                <ul>
                    <li><a className="link-barra" href="/">HOME</a></li>
                    <li><a className="link-barra" href="/about">ABOUT</a></li>
                    <li><a className="link-barra" href="/production">PRODUCTION</a></li>
                    <li><a className="link-barra" href="/category/press">PRESS</a></li>
                    <li><a className="link-barra" href="/gallery">GALLERY</a></li>
                    <li><a className="link-barra" href="/contact">CONTACT</a></li>
                </ul>

            </nav>
        </header>
        // <nav className="navbar navbar-expand-lg navbar-light navBarra">
        //     <div className="container-fluid">
        //         <a className="navbar-brand col-4 " href="/">JT.PFEIFER</a>

        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse   " id="navbarNavDropdown">
        //             <ul className="navbar-nav  col-12 d-flex justify-content-around">

        //                 <li class="nav-item">
        //                     <a className="nav-link link-barra" href="/category/press">PRESS</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a className="nav-link link-barra" href="/production">PRODUCTION</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link link-barra" href="#">GALLERY</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a className="nav-link link-barra" href="/about">ABOUT</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a className="nav-link link-barra" href="/contact">CONTACT</a>
        //                 </li>

        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}
