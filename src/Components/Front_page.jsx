import React from 'react'
import Button from 'react-bootstrap/Button';
import Profile_photo from "../Images/Profile_photo.jpg"
import {Link} from "react-router-dom"
const Front_page = () => {
    
  return (
    <div className='front_page'>
        <div className='front_page_div'>
            <h1>
                Hello I'm a <span id='typing_text'>Web Developer</span>
            </h1>
            <p>My objective is to work with an organisation that provides me an opportunity to grow and exploit my potential to excel
                in area of my preview so as to help the organisation in the accomplishment of its goal.</p>
            <div className='front_page_buttons'>
             <Link to="/about"><Button>About me</Button></Link>
             <Link to="/projects"><Button>See Projects</Button></Link>
            </div>
        </div>
        <div className='profile_photo'>
            <img src={Profile_photo} alt="Not Found"  />
        </div>
    </div>
  )
}

export default Front_page