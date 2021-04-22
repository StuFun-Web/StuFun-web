import React, { useState } from 'react';
import SNavbar from './SNavbar'
import SClassRoom from './SClassRoom'
import ChatRoom from '../Chat/ChatHome'
import Profile from '../Profile';
    

function DashboardStu() {

    const current = global.config.nav;

    return (
        <> 
            <SNavbar></SNavbar>
            {current == "Classroom" ? <SClassRoom/> : current == "Chat" ? <ChatRoom/> : <Profile/>}
        </>
    )
}
export default DashboardStu;