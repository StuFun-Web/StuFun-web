import React, { useState } from 'react';
import ChatRoom from '../Chat/ChatHome';
import Navbar from '../Navbar';
import Profile from '../Profile';
import ClassRoom from './ClassRoom';
    

function Dashboard() {

    const current = global.config.nav;

    return (
        <> 
            <Navbar></Navbar>
            {current == "Classroom" ? <ClassRoom/> : current == "Chat" ? <ChatRoom/> : <Profile/>}
        </>
    )
}
export default Dashboard;