import { MessageActionType, messageReducer } from "./reducers/messageReducer";
import {
	profilePageReducer,
	ProfileReducerActionTypes,
} from "./reducers/profileReducer";

export type ActionTypes = MessageActionType | ProfileReducerActionTypes;

type PostType = {
	id: string;
	post: string;
	likes: number;
};
type MessageType = {
	id: number;
	message: string;
};
type DialogType = {
	id: number;
	name: string;
};

type ProfilePageType = {
	posts: PostType[];
	newPostText: string;
};

type DialogsPageType = {
	messages: MessageType[];
	dialogs: DialogType[];
	newMessage: string;
};

type SidebarType = {};

export type RootStateType = {
	profilePage: ProfilePageType;
	dialogsPage: DialogsPageType;
	sidebar: SidebarType;
};

export type StoreType = {
	_state: RootStateType;
	_callSubscriber: () => void;
	getState: () => RootStateType;
	subscriber: (observer: () => void) => void;
	dispatch: (action: any) => void;
};

const store: StoreType = {
	_state: {
		profilePage: {
			posts: [
				{ id: "1", post: "Hi, how are you?", likes: 11 },
				{ id: "2", post: "How are u?", likes: 15 },
				{ id: "3", post: "How are u?", likes: 15 },
				{ id: "4", post: "How are u?", likes: 15 },
			],
			newPostText: "IT-kamasutra.com",
		},
		dialogsPage: {
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
		},
		sidebar: {},
	},
	_callSubscriber() {
		console.log("State");
	},
	getState(): RootStateType {
		return this._state;
	},
	subscriber(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		this._state = profilePageReducer(this._state, action);
		this._state = messageReducer(this._state, action);

		this._callSubscriber();
	},
};

export default store;
