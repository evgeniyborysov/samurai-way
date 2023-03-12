import React, { ChangeEvent } from "react";
import {
	AddMessageAC,
	UpdateNewMessageAC,
} from "../../redux/reducers/messageReducer";
import { ActionTypes } from "../../redux/state";
import { DialogItem, DialogItemPropsType } from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import { Message, MessagePropsType } from "./Message/Message";

type DialogsPropsType = {
	dialogs: DialogItemPropsType[];
	messages: MessagePropsType[];
	message: string;
	dispatch: (action: ActionTypes) => void;
};

export const Dialogs: React.FC<DialogsPropsType> = ({
	dialogs,
	messages,
	message,
	dispatch,
}) => {
	const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const action = UpdateNewMessageAC(e.currentTarget.value);
		dispatch(action);
	};
	const onClickButtonHandler = () => {
		const action = AddMessageAC();
		dispatch(action);
	};

	return (
		<>
			<div className={style.dialogs}>
				<div className={style.dialogsItems}>
					{dialogs.map((dialog) => (
						<DialogItem
							key={dialog.id}
							name={dialog.name}
							id={dialog.id}
						/>
					))}
				</div>
				<div className={style.messages}>
					{messages.map((message) => (
						<Message
							key={message.id}
							id={message.id}
							message={message.message}
						/>
					))}
				</div>
			</div>
			<input value={message} onChange={onChangeInputHandler} />
			<button onClick={onClickButtonHandler}>Add message</button>
		</>
	);
};
