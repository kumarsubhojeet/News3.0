import React from 'react'
import '../CSS/Navbar.css'
import nytlogo from '../img/nty.svg'
import moment from 'moment'
import { Link } from 'react-router-dom'
import Weather from '../Compo/Weather.jsx'


export default function Navbar() {

    let newDate = new Date().toLocaleString() + ""

    return (
        <div>
            <div className="nav_main">
                <div className="nav_wrapper">
                    <div className="nav-left">
                        <p>{moment(newDate).format("MMMM Do YYYY, h:mm A") }
                        <br />
                        <span>Today's Paper</span>
                        </p>
                        
                    </div>

                    <div className="nav-center">
                        <Link to="/">
                        <img src={nytlogo} className="nytlogo" alt="img-Error" />
                        </Link>
                    </div>

                    <div className="nav-left-mobile">
                        <p>{moment(newDate).format("MMMM Do YYYY, h:mm A") }
                        <br />
                        <span>Today's Paper</span>
                        </p>
                        
                    </div>

                    <div className="nav-right">
                        <Weather />
                    </div>
                </div>
            </div>
        </div>
    )
}
