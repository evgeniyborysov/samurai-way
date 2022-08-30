import React from "react";
import { MyPosts, PostsPropsType } from "./MyPosts/MyPosts";
import { PostPropsType } from "./MyPosts/Post/Post";
import "./Profile.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    posts: PostPropsType[];
    addPost: (post: string) => void;
};

export const Profile: React.FC<ProfilePropsType> = ({ posts, addPost }) => {
    return (
        <div className="profile">
            <ProfileInfo />
            <MyPosts posts={posts} addPost={addPost} />
        </div>
    );
};
