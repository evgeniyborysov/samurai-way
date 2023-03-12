import style from "./Message.module.css";

export type MessagePropsType = {
	id: number;
	message: string;
};

export const Message: React.FC<MessagePropsType> = ({ id, message }) => {
	return <div className={style.message}>{message}</div>;
};
