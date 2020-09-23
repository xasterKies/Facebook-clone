import React from 'react'
import './SidebarRow.css'

function SidebarRow({src, Icon, title}) {
    return (
        <div class="sidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}

            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
