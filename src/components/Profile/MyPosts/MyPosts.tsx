import React, { useRef } from "react";
import { Post, PostPropsType } from "./Post/Post";
import style from "./MyPosts.module.css";
import { ActionTypes } from "../../../redux/state";
import {
	AddPostAC,
	UpdateNewPostTextAC,
} from "../../../redux/reducers/profileReducer";

export type PostsPropsType = {
	posts: PostPropsType[];
	newPostText: string;
	dispatch: (action: ActionTypes) => void;
};

export const MyPosts: React.FC<PostsPropsType> = ({
	posts,
	newPostText,
	dispatch,
}) => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const onClickButtonHandler = () => {
		if (textAreaRef.current) {
			const action = AddPostAC(textAreaRef.current.value);
			dispatch(action);
		}
	};

	const onChangeTextAreaHandler = () => {
		if (textAreaRef.current) {
			const action = UpdateNewPostTextAC(textAreaRef.current.value);
			dispatch(action);
		}
	};

	return (
		<div className={style.post}>
			My posts
			<h3>New post</h3>
			<div>
				<textarea
					ref={textAreaRef}
					value={newPostText}
					onChange={onChangeTextAreaHandler}
				/>
			</div>
			<div>
				<button onClick={onClickButtonHandler}>Add post</button>
			</div>
			<div>
				{posts.map((post) => (
					<Post
						key={post.id}
						id={post.id}
						post={post.post}
						likes={post.likes}
					/>
				))}
			</div>
		</div>
	);
};
