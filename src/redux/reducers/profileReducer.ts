const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type AddPostActionType = {
	type: typeof ADD_POST;
	message: string;
};

export type UpdateNewPostTextActionType = {
	type: typeof UPDATE_NEW_POST_TEXT;
	newText: string;
};

export type ProfileReducerActionTypes =
	| AddPostActionType
	| UpdateNewPostTextActionType;

const initState = {
	posts: [
		{ id: "1", post: "Hi, how are you?", likes: 11 },
		{ id: "2", post: "How are u?", likes: 15 },
		{ id: "3", post: "How are u?", likes: 15 },
		{ id: "4", post: "How are u?", likes: 15 },
	],
	newPostText: "IT-kamasutra.com",
};

export const profilePageReducer = (
	state: any = initState,
	action: ProfileReducerActionTypes
): any => {
	if (action.type === ADD_POST) {
		const newPost = {
			id: new Date().getTime().toString(),
			post: action.message,
			likes: 0,
		};
		state.posts.push(newPost);
		state.newPostText = "";
	}
	if (action.type === UPDATE_NEW_POST_TEXT) {
		state.newPostText = action.newText;
	}
	return state;
};

export const AddPostAC = (message: string): AddPostActionType => {
	return { type: ADD_POST, message };
};

export const UpdateNewPostTextAC = (
	newText: string
): UpdateNewPostTextActionType => {
	return { type: UPDATE_NEW_POST_TEXT, newText };
};
