import React from 'react'
import '../CSS/Footer.css'
import nytlogo from '../img/nty.svg'

export default function Footer() {
    return (
        <div>
            <div className="Footer_main">
                <hr />
                <div className="footer_wrapper">
                    <div className="f_logo">
                    <img className="nytlogo" src={nytlogo} alt="Error" />
                    <p>© 2021 The New York Times Company</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
