import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to={"/profile"}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to={"/dialogs"}>Messages</NavLink>
                </li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </nav>
    );
};
