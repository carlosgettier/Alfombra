import React from 'react'
import './contact.css'

export const Contact = () => {
    return (
        <div className="contact">
            <h1 className="contact-title">Contact</h1>
            <hr />
            <div className="contact-container">
                <div className="contact-form">
                    <p className="contact-form-p">Please don't hesitate to contact us to make an appointment or for any other inquiry, we are more than happy to assist you in any way we can.</p>
                    <form className="contactForm">
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Message</label>
                            <textarea id="exampleInputPassword1" className="form-control"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>

                </div>
                <div className="contact-redes">
                    <div className="contact-redes-container">
                        <h3 className="contact-redes-title">New York Showroom</h3>
                        <p className="contact-redes-p">157 Bowery Street #2B<br />
                            Nueva York, NY 10282 USA <br />
                            +(212) 401-1955</p>
                    </div>
                    <div className="contact-redes-container">
                        <h3 className="contact-redes-title">Buenos Aires Showroom</h3>
                        <p className="contact-redes-p">Av Figueroa Alcorta 3035 #7P<br />
                            CABA, Buenos Aires, Argentina <br />
                            +54 911 44001904</p>
                    </div>
                    <div className="contact-redes-container">
                        <h3 className="contact-redes-title">Email us /</h3>
                        <p className="contact-redes-p">info@jtpfeiffer.com</p>
                    </div>
                    <div className="contact-redes-container">
                        <h3 className="contact-redes-title">Instagram /</h3>
                        <p className="contact-redes-p">@jt.pfeiffer.rugs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

