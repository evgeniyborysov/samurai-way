import style from "./Message.module.css";

export type MessagePropsType = {
    message: string;
};

export const Message = (props: MessagePropsType) => {
    return <div className={style.message}>{props.message}</div>;
};
