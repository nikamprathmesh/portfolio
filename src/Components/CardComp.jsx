import React from 'react'
export default function (props) {
  return (
    <div>
        <div className="card_body">
            <div className='card_inner centre'>
                <div className='project_title'>
                    <p>{props.project_title}</p>
                </div>
                <div className='card_image'>
                    <img src={props.card_image} alt="Not found project image"  />
                </div>  
                <div className='project_description'>
                    <p>{props.description}</p>
                </div>
                <div className='technologies'>
                    <p>Technologies Used : <span>{props.technology}</span></p>
                </div>
                <div>
                    <div className='card_buttons'>
                        <button><a href="https://github.com/nikamprathmesh/Calculator" target="_blank">See Code</a></button>
                        <button><a href="https://thriving-eclair-afaff3.netlify.app/" target="_blank">Live Project</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
