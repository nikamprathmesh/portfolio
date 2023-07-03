import React, { useState } from 'react'
import Top_bar from './Top_bar';
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

export default function Contact() {

    const [data, setdata] = useState({
        fname: "",
        ename: "",
        mno: "",
        messege: ""

    })

    const addEvent = (event) => {
        const { name, value } = event.target;

        setdata((preVal) => {
            return {
                ...preVal,
                [name]: value
            };
        })
    }

    const event_submit = (event) => {
        event.preventDefault();
        alert("form submitted succesfully...")
        setdata({
            fname: "",
            ename: "",
            mno: "",
            messege: ""

        })
    }
    return (
        <div>
            <Top_bar/>
            <div className='contact_main'>
                <div className='text-center contact_heading'>
                    <p>Contact Me</p>
                </div>
                <div>
                    <form className="contact_form" onSubmit={event_submit} >

                        <div>
                            <div className='field'>
                                <label className="label" htmlFor="Name" >Name</label>
                                <input type="text" className='textarea' name="fname" value={data.fname} onChange={addEvent} placeholder="Enter your Name" required />
                            </div >
                            <div className='field'>
                                <label className="label">Email-id</label>
                                <input type="email" className='textarea' name="ename" value={data.ename} onChange={addEvent} placeholder="Enter your Email Address" required />
                            </div>
                            <div className='field'>
                                <label className="label">Mobile Number</label>
                                <input type="text" className='textarea' name="mno" value={data.mno} onChange={addEvent} placeholder="Enter your Mobile No" required />
                            </div>
                            <div className='field' >
                                <label className='label'>Year of Study</label>
                                <select onChange={addEvent} defaultValue={'default'} className='select_option ' >
                                    <option value="Year of study" >Year of Study</option>
                                    <option value="1st year">1st</option>
                                    <option value="2nd year">2nd</option>
                                    <option value="3rd year">3rd</option>
                                    <option value="Final year">Final year</option>
                                </select>
                            </div>
                            <div className='field'>
                                <label className="label">Your Messege</label>
                                <textarea name='messege' value={data.messege} onChange={addEvent} className='textarea_messege' placeholder="Enter your messege here" required></textarea>
                            </div>
                            <div >
                                <button className='btn_submit' type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="reachout">
                    {/* <div className='reach_out_text'>
                        <p>Reach out to me</p>
                    </div> */}
                    <div>
                        <a target="_blank" href="mailto:prathameshnikam09@gmail.com">
                            <GrMail/>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://github.com/nikamprathmesh">
                            <BsGithub/>
                        </a>
                    </div>
                    <div>
                        <a href="tel:7387779282">
                            <BsFillTelephoneFill/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/pratham_7761" target="_blank"><BsInstagram/></a>
                    </div>
                    <div>
                        <a href="https://wa.me/+917387779282" target="_blank"><BsWhatsapp/></a>
                        
                    </div>
                    
                    
                </div>
            </div>
        </div>

    )
}
