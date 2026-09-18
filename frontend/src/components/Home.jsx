import React from 'react'
import pic from '../assets/pic.jpg'
import video from '../assets/video.mp4'
import pic2 from '../assets/pic2.jpg'
const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2><br/>
      <p>This is the home page of our React application.</p>
      <p>Here you can find some images and a video.</p>
      <br/>
      <img src={pic} className="base" width="350" height="350" alt="Logo" />
      <video src={video} className="base" width="300" height="300" controls />
      <img src={pic2} className="base" width="300" height="300" alt="Logo" />
      <br></br>
      
      
    </div>
  )
}

export default Home
