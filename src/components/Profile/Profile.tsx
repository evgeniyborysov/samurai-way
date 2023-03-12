import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { PostPropsType } from "./MyPosts/Post/Post";
import "./Profile.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ActionTypes } from "../../redux/state";

type ProfilePropsType = {
	posts: PostPropsType[];
	newPostText: string;
	dispatch: (action: ActionTypes) => void;
};

export const Profile: React.FC<ProfilePropsType> = ({
	posts,

	newPostText,

	dispatch,
}) => {
	return (
		<div className="profile">
			<ProfileInfo />
			<MyPosts
				posts={posts}
				newPostText={newPostText}
				dispatch={dispatch}
			/>
		</div>
	);
};
