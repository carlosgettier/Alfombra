import React from 'react'
import './footer.css'
import product from '../../assets/image/footer-logo.jpg'

export const Footer = () => {
    return (
        <div className="footer">
            <img src={product} />
            <div>
                <h1 className="footer-title">New York Showroom</h1>
                <p className="footerP">
                    Tuleste Factory<br />
                    197 7th Avenue #2R, New York, NY, USA<br />
                    +1 212 969 0200
                </p>
            </div>
            <div>
                <h1 className="footer-title">Buenos Aires Showroom</h1>
                <p className="footerP">
                    Edificio Regatta<br />
                    Alberdi 431 #1503<br />
                    Olivos (B1636FNI)<br />
                    Buenos Aires, Argentina<br />
                    +54911 44001904
                </p>
            </div>
            <div >
                <h1 className="footer-title">Email us /</h1>
                <p className="footerP">info@jtpfeiffer.com</p>
            </div>
            <div>
                <h1 className="footer-title"> Instagram /</h1>
                <p className="footerP">@jt.pfeiffer.rugs</p>
            </div>
        </div>
    )
}
