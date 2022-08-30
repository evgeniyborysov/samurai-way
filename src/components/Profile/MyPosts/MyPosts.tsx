import React, { useRef } from "react";
import { Post, PostPropsType } from "./Post/Post";
import style from "./MyPosts.module.css";

export type PostsPropsType = {
	posts: PostPropsType[];
	addPost: (post: string) => void;
};

export const MyPosts: React.FC<PostsPropsType> = ({ posts, addPost }) => {
	const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

	const onClickButtonHandler = () => {
		if (null !== textAreaRef.current) {
			addPost(textAreaRef.current.value);
			textAreaRef.current.value = "";
		}
	};

	return (
		<div className={style.post}>
			My posts
			<h3>New post</h3>
			<div>
				<textarea ref={textAreaRef}></textarea>
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
