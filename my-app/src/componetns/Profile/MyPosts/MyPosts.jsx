import React from 'react';
import store from './redux/state';
import s from'./MyPosts.module.css';
import Posts from './Posts/Posts';


const MyPosts = (props) => {
    console.log(props.text)

    let newPostElement = React.createRef();

    let onPostChenge = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text)
        console.log(text)
    }

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    };

    let postsElements = 
        props.posts.map ( p => <Posts message={p.message} like={p.likeCount}/>);
            return (
                <div className={s.postsBlock}>
                    <div> 
                        <h3>My post</h3>                
                    <div>
                        <textarea onChange={onPostChenge} ref={newPostElement}  
                            value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={ addPost } >Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
                <div>
                    {props.text}
                </div>

            </div>
    );
}

export default MyPosts;