import React from 'react';
import s from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './Profileinfo/Profileinfo';



const Profile = (props) => {
    return (    
        <div>
            <ProfileInfo/>
            <MyPosts 
                posts={props.posts} 
                addPost={props.addPost} 
                updateNewPostText={props.updateNewPostText}
                text = {props.artem}
                />
        </div>
    );
}


export default Profile;