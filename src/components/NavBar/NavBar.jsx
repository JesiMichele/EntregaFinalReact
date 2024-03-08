import React from "react";
import './NavBar.css'
import CardWidget from "../CradWidget/CardWidget";
import { Link, NavLink } from "react-router-dom";



const NavBar = () => {
    return (
        <>
            <div>
                <Link to={'/'}>

                    <img src="/assets/img/logo.png.png" alt="" className="logo" />

                </Link>

                <Link to={'/cart'}>

                    <CardWidget />

                </Link>

            </div>

            <ul className="list">

                <li>
                    <NavLink to={'/'}>Inicio</NavLink>
                </li>

                <li>
                    <NavLink to={'category/Casual'}>Casual</NavLink>
                </li>

                <li>
                    <NavLink to={'category/Elegant'}>Elegant</NavLink>
                </li>

                <li>
                    <NavLink to={'category/Sports'}>Sports</NavLink>
                </li>

                <li>
                    <NavLink to={'/'}>More Info</NavLink>
                </li>


            </ul>






        </>
    )
}
export default NavBar