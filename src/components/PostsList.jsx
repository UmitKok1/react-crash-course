import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {
    useState([posts, setPosts] = useState([]));

    function addPostHandler(postData) {
        setPosts((existingPosts)=>[postData,...existingPosts]);
    }
    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting} onAddPost={addPostHandler}>
                    <NewPost
                        onCancel={onStopPosting}
                    />
                </Modal>
            )}

            <ul className={classes.posts}>

                <Post author="Manuel" body="Check out the full course!" />
            </ul>
        </>
    );
}

export default PostsList;
