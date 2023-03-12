const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const ADD_MESSAGE = "ADD-MESSAGE";

type UpdateNewMessageActionType = {
	type: typeof UPDATE_NEW_MESSAGE;
	message: string;
};

type AddMassageActionType = {
	type: typeof ADD_MESSAGE;
};

export type MessageActionType =
	| UpdateNewMessageActionType
	| AddMassageActionType;

const initState = {
	messages: [
		{ id: 1, message: "Hello" },
		{ id: 2, message: "How are u?" },
		{ id: 3, message: "Yo-YO-yo" },
	],
	dialogs: [
		{ id: 1, name: "Tim" },
		{ id: 2, name: "Oliver" },
		{ id: 3, name: "Stela" },
		{ id: 4, name: "Mary Jane" },
		{ id: 5, name: "Ron" },
	],
	newMessage: "New message",
};

export const messageReducer = (
	state: any = initState,
	action: MessageActionType
): any => {
	if (action.type === UPDATE_NEW_MESSAGE) {
		const newMessage = action.message;
		state.newMessage = newMessage;
	}
	if (action.type === ADD_MESSAGE) {
		const newMessage = {
			id: Math.random(),
			message: state.newMessage,
		};
		state.messages.push(newMessage);
		state.newMessage = "";
	}
	return state;
};

export const UpdateNewMessageAC = (
	message: string
): UpdateNewMessageActionType => {
	return { type: UPDATE_NEW_MESSAGE, message };
};

export const AddMessageAC = (): AddMassageActionType => {
	return { type: ADD_MESSAGE };
};
