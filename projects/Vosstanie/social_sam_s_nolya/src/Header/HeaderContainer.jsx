import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import { setUsersDataAC } from "../reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                debugger
                let {id, login, email} = response.data.data
                if(response.data.resultCode === 0) {
                    this.props.setUsersData(id, login, email)
                }

            })
    }

    render() {
        return (
           <Header {...this.props} />
        )

    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth,
        login: state.login
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        setUsersData: (id, login, email) => {
            dispatch(setUsersDataAC(id, login, email))
        },

    }
}

const AuthHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
export default AuthHeaderContainer


