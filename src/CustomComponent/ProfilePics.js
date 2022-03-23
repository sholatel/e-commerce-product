import React from 'react'
import profilePic from '../images/image-avatar.png'
import NavStyle from '../CustomComponentStyle/ProfilePicStyle.css'


function ProfilePics () {
    return <div id="profile-div">
                <img src={profilePic} width={"20px"} height={"20px"}/>
            </div>
} 
export default ProfilePics