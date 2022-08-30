import React from "react";
import "./Post.css";

export type PostPropsType = {
    id: number;
    post: string;
    likes: number;
};

export const Post: React.FC<PostPropsType> = ({
    post,
    likes,
    ...otherProps
}) => {
    return (
        <div className="user">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ&usqp=CAU"
                alt="user"
            />
            <div>{post}</div>
            <span>Like</span> {likes}
        </div>
    );
};
