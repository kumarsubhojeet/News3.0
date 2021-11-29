import React from 'react'
import {NewsCategorySearch} from '../data'
import { Link } from "react-router-dom";
import '../CSS/NavCaterogy.css'

export default function NavCaterogy() {
    return (
        <div className="NavCaterogy_main">
            <div className="NavCaterogy_Nav">
                {
                    NewsCategorySearch.map(news=>(
                        <>
                        <Link to={`/News/${news.name}`}>
                            <p className="Nav_links">{news.name}</p>
                        </Link>
                        
                        </>
                    ))
                }
            </div>
            
        </div>
    )
}
