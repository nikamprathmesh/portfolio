import React from 'react'

import CardComp from './CardComp'
import ProjectData from './ProjectData'
import Top_bar from './Top_bar'
export default function Projects() {
  return (
    <>
        <Top_bar/>
        <div className='project_heading'>
            <p>My Projects</p>
        </div>
        <div className='card_main'>
            <div className='card_sub_main'>
                {
                    ProjectData.map((elem)=>{
                        return(
                            <CardComp 
                            key={elem.id}
                                project_title={elem.Project_title}
                                card_image ={elem.Card_image}
                                description = {elem.Project_description}
                                technology={elem.Technologies}
                                
                                />
                                )
                            })
                }
            </div>
        </div>
    </>
  )
}
