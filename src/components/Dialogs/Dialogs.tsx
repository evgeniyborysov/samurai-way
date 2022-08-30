import React from "react";
import { DialogItem, DialogItemPropsType } from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import { Message, MessagePropsType } from "./Message/Message";

type DialogsPropsType = {
    dialogs: DialogItemPropsType[];
    messages: MessagePropsType[];
};

export const Dialogs: React.FC<DialogsPropsType> = ({ dialogs, messages }) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogs.map((dialog) => (
                    <DialogItem name={dialog.name} id={dialog.id} />
                ))}
            </div>
            <div className={style.messages}>
                {messages.map((message) => (
                    <Message message={message.message} />
                ))}
            </div>
        </div>
    );
};
