import React from 'react';
import style from "./ProfilePage.module.css"
import ProfilePage from "./ProfilePage";

const ProfileContainer = (props) => {
    let changePostText = (e) => {
        let newPostText = e.currentTarget.value
        props.onChangePostText(newPostText)
    }
    let addPostClick = () => {

        let newPostText = props.newPostText
        let newPost = {id: 7, postText: newPostText, likes: 5}
        props.onAddPostClick(newPost)
    }

    return (

        <div className={style.profile}>
            <ProfilePage {...props} changePostText={changePostText} addPostClick={addPostClick} />
        </div>
    )

}


export default ProfileContainer