import React from 'react'
import InfoCard from '../InfoCard/InfoCard'
import FollowersCard from '../FollowerCard/FollowerCard'
const ProfileLeft = () => {
  return (
   <div className="ProfileSide">
       {/* <LogoSearch/> */}
       <InfoCard/>
       <FollowersCard/>
   </div>
  )
}

export default ProfileLeft