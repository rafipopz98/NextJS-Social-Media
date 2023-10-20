import React from 'react'
import './FollowerCard.css'

import { Followers } from '../../../public/Data/FollowerData'
const FollowersCard = () => {
  return (
    <div className="FollowersCard">
        <h3>Who is following you</h3>

        {Followers. map((follower, id)=>{
            return(
                <div key={id} className="follower">
                    <div>
                        <img src={follower.img} alt="images"  className='followerImage' />
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard