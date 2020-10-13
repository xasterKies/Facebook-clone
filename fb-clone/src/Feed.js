import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post
                profilePic="https://pbs.twimg.com/profile_images/1308041397505855490/z9qBAhAy_400x400.jpg"
                message="Wow it worked"
                timestamp="This is a timestamp"
                username="Tiokeng Samuel"
                image="https://bucket.mg.co.za/wp-media/2019/06/f5a37fb1-00-yogan-pillay-south-africa-aids-conference-new-infections-innovations-696x445.jpeg"
            />
        </div>
    )
}

export default Feed
