import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css";

export type DialogItemPropsType = {
    name: string;
    id: number;
};

export const DialogItem: React.FC<DialogItemPropsType> = ({ id, name }) => {
    const path = `/dialogs/${id}`;
    return (
        <div className={style.dialog}>
            <NavLink to={path} activeClassName={style.active}>
                {name}
            </NavLink>
        </div>
    );
};
