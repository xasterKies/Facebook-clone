import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import localHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import ChatIcon from "@material-ui/icons/StorerontIcon"


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src={user.PhotoURL} title={user.displayName}/>
            <SidebarRow Icon={localHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorerontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
        </div>
    )
}

export default Sidebar
