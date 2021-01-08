import React from 'react';
import style from "./ProfilePage.module.css"
import ProfilePage from "./ProfilePage";
import * as axios from "axios";

class ProfileContainer extends React.Component {

    componentDidMount() {
        //this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                debugger
                this.props.setProfile(response.data)

                //this.props.toggleIsFetching(false)
            })
    }


    render() {
        let changePostText = (e) => {
            let newPostText = e.currentTarget.value
            this.props.onChangePostText(newPostText)
        }
        let addPostClick = () => {

            let newPostText = this.props.newPostText
            let newPost = {id: 7, postText: newPostText, likes: 5}
            this.props.onAddPostClick(newPost)
        }

        return (

            <div className={style.profile}>
                <ProfilePage {...this.props} changePostText={changePostText} addPostClick={addPostClick}/>
            </div>
        )

    }
}


export default ProfileContainer