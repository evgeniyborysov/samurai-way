import { rerenderEntireTree } from "../render";

type PostType = {
	id: number;
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
};

type DialogsPageType = {
	messages: MessageType[];
	dialogs: DialogType[];
};

type SidebarType = {};

export type RootStateType = {
	profilePage: ProfilePageType;
	dialogsPage: DialogsPageType;
	sidebar: SidebarType;
};

let state: RootStateType = {
	profilePage: {
		posts: [
			{ id: 1, post: "Hi, how are you?", likes: 11 },
			{ id: 2, post: "How are u?", likes: 15 },
			{ id: 3, post: "How are u?", likes: 15 },
			{ id: 4, post: "How are u?", likes: 15 },
		],
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
	},
	sidebar: {},
};

export const addPost = (post: string) => {
	let newPost = { id: 5, post, likes: 0 };
	state.profilePage.posts.push(newPost);
	rerenderEntireTree(state);
};

export default state;
