import React, {ButtonHTMLAttributes, DetailedHTMLProps, useState} from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";

function Header() {

    const [isActive, setActive] = useState<boolean>(false);

    const toggleClass = () => {
        setActive(!isActive);
    }

    const closeMenu = () => {
        setActive(!isActive);
    }

    const finalClassNameMenu = `${isActive ? s.activeMenu : ""} ${s.menu}`;
    const finalClassNameBurger = `${isActive ? s.activeBurger : ""} ${s.burger}`;

    return (
        <div className={s.header}>
            <div className={finalClassNameBurger} onClick={toggleClass}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={finalClassNameMenu}>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.activeLink} onClick={closeMenu}>PRE_JUNIOR</NavLink>
                <NavLink to={PATH.PRE_JUNIOR_PLUS} activeClassName={s.activeLink}
                         onClick={closeMenu}>PRE_JUNIOR_PLUS</NavLink>
            </div>
        </div>
    );
}

export default Header;
