import React from 'react'
import '../mainContainer/MainContainer.css'
const Suggestions = () => {
  return (
    <div className="suggestionContainer">
    <div className="profileBox">
        <div className="sideProfile">
            <img src="https://wallpaperaccess.com/full/5045061.jpg" alt="" />
            <div className="usernameS">
                <h2 className="usernameH">
                    name
                </h2>
                <span className="popular">popular</span>
            </div>
        </div>
        <a href="#" className="followBtn">Follow</a>
    </div>
  </div>
  )
}

export default Suggestions