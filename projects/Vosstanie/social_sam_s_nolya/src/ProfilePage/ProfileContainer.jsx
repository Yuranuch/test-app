import React from 'react';
import style from "./ProfilePage.module.css"
import ProfilePage from "./ProfilePage";
import * as axios from "axios";
import {withRouter} from "react-router-dom";
class ProfileContainer extends React.Component {

    componentDidMount() {
        //this.props.toggleIsFetching(true)
        debugger
        let userId = this.props.match.params.userId
        if(!userId){userId=2}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
            .then(response => {

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

let WithUrlDataContainer = withRouter(ProfileContainer)

export default WithUrlDataContainer