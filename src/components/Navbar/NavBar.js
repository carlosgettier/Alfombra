import React from 'react'

export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">JT.PFEIFER</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse bg-primary " id="navbarNavDropdown">
                    <ul class="navbar-nav justify-content-around">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">NEWS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">PRESS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">PRODUCTION</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">GALLERY</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ABOUT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">CONTACT</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
