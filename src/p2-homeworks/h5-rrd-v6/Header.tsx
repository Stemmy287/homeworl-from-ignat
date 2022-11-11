import React from 'react'
import {Navigate, NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css'

function Header() {
    return (

        <div className={s.dropdown}>
            <button className={s.dropbtn}>Navigation</button>
            <div className={s.dropdownContent}>
                <NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
                <NavLink to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
            </div>
        </div>
    )
}

export default Header
