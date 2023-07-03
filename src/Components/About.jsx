import React from 'react'
import Top_bar from './Top_bar'
import { BiCalendarCheck } from "react-icons/bi";
import { LiaCertificateSolid } from "react-icons/lia";
import { BiSolidInstitution } from "react-icons/bi";
import Prathmesh_Nikam_Resume from "../Documents/Prathmesh_Nikam_Resume.pdf"
export default function About() {
  return (
    <>
        {/* <Top_bar/>
        <div>
          <div className="main_about">
            <div className="sec_about">
              <div className="me_section">
                <div className="myself">
                  <div>
                    <p>Me Myself & I</p>
                  </div>
                  <div>
                    I'm Front-End Developer located in Pune, pursuing final year of Computer Engineering at Goverment College of Engineering and Research, Avasari with 8.5 CGPA till third year. <br /> <br />
                    I have strong problem solving skills and learning ability which helps me to grow faster. <br /> <br />
                    Also I have interest in travelling and exploring new things. 
                  </div>
                </div>
                <div className="resume">
                  <button><Link>View Resume</Link></button>
                  <button><Link>Download Resume</Link></button>
                </div>
              </div>
              <div className="expr">
                <div className='internships_heading'>
                  <p>Internships</p>
                </div>
                <div>
                  <div className="pos">Web Developer Intern</div>
                  <div className="company_name">Learnclub</div>
                  <div className="tasks">
                    <li id="task1">Worked with UI and UX.</li>
                    <li id="task2">Practice software development lifecycle.</li>
                    <li id="task3">Developed and host learning web portal</li>
                    <li id="task4">Technologies used : HTML, CSS, php, Wordpress.</li>
                  </div>
                  <div className="certificate">
                    <a href="https://drive.google.com/file/d/1iLMaFlvYjlLOzfeJfCzzxqOn-zeuZqr2/view?usp=sharing">
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
              <div className="achievements">
                <div className='achievements_heading'>
                  <p>Achievements</p>
                </div>
                <div>
                  <div className="achievement_title">Secured AIR-6 in Robocon Competition host by IIT Delhi</div>
                  <div className="achievement_title">Solved 250+ coding questions on various platform</div>
                </div>
              </div>
              <div className="skillset">
                <div className='skills_heading'>
                  <p>Skills</p>
                </div>
                <div className="academics">
                  <p>Academic Skills</p>
                  <ul>
                    <li id="skill1">HTML</li>
                    <li id="skill2">CSS</li>
                    <li id="skill3">Javascript</li>
                    <li id="skill4">ReactJs</li>
                    <li id="skill5">NodeJs</li>
                    <li id="skill6">MySQL</li>
                    <li id="skill7">MongoDB</li>
                    <li id="skill8">AWS</li>
                    <li id="skill9">Java</li>
                    <li id="skill10">Spring</li>
                    <li id="skill11">Angular</li>
                    <li id="skill12">Python</li>
                    <li id="skill13">Figma</li>
                    <li id="skill14">Rest API</li>
                    <li id="skill15">UI/UX</li>
                    <li id="skill16">Wordpress</li>
                  </ul>
                </div>
                <div className="soft_skills">
                  <p>Soft Skills</p>
                  <ul>
                    <li id="soft_skill_1">Fast Learner</li>
                    <li id="soft_skill_2">Leadership</li>
                    <li id="soft_skill_3">Creativity</li>
                    <li id="soft_skill_4">Team Work</li>
                    <li id="soft_skill_5">Communication</li>
                  </ul>
                </div>
              </div>
              <div className="education">
                <div className="degree">
                  <div className="edu_title">
                    <p>BE Computer (Pursuing)</p>
                  </div>
                  <div className="college_name">
                    <p>Government College of Engineering and Research, Avasari, Pune</p>
                  </div>
                  <div className="percent">
                    <p>80.05%</p>
                  </div>
                </div>
                <div className="degree">
                  <div className="edu_title">
                    <p>Higher Secondary Education</p>
                  </div>
                  <div className="college_name">
                    <p>Vidya Pratishthan Baramati</p>
                  </div>
                  <div className="percent">
                    <p>64.15%</p>
                  </div>
                </div>
                <div className="degree">
                  <div className="edu_title">
                    <p>Secondary Education</p>
                  </div>
                  <div className="college_name">
                    <p>Bhairavanath Vidyalaya, Khadki</p>
                  </div>
                  <div className="percent">
                    <p>89.80%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        

<div class="main_about">
    <div id="myself">
      <div className="me_section">
        <div className="myself">
          <div className='myself_heading'>
            <p>Me Myself & I</p>
          </div>
          <div className='myself_para'>
            <p>
              I'm Front-End Developer located in Pune, pursuing final year of Computer Engineering at Goverment College of Engineering and Research, Avasari with 8.5 CGPA till third year. <br />
              I have strong problem solving skills and learning ability which helps me to grow faster. <br />
              Also I have interest in travelling and exploring new things. 
            </p>
          </div>
        </div>
        <div className="resume">
          <a className='resume_btn' href={Prathmesh_Nikam_Resume} target="_blank"  >View Resume</a>
          <a className='resume_btn' href={Prathmesh_Nikam_Resume} download>Download Resume</a>
        </div>
      </div>
    </div>
    <div id="education">
      <div className="education_sub">
        <div className="education_heading">
          <p>Education</p>
        </div>
        <div className="degree">
          <div className="edu_title">
            <p><BiCalendarCheck/></p>
            <p>BE Computer (Pursuing)</p>
          </div>
          <div className="college_name">
            <p><BiSolidInstitution/></p>
            <p>Government College of Engineering and Research, Avasari, Pune</p>
          </div>
          <div className="percent">
            <p><LiaCertificateSolid/></p>
            <p>80.05%</p>
          </div>
        </div>
        <div className="degree">
          <div className="edu_title">
            <p><BiCalendarCheck/></p>
            <p>Higher Secondary Education</p>
          </div>
          <div className="college_name">
            <p><BiSolidInstitution/></p>
            <p>Vidya Pratishthan Baramati</p>
          </div>
          <div className="percent">
            <p><LiaCertificateSolid/></p>
            <p>64.15%</p>
          </div>
        </div>
        <div className="degree">
          <div className="edu_title">
            <p><BiCalendarCheck/></p>
            <p>Secondary Education</p>
          </div>
          <div className="college_name">
            <p><BiSolidInstitution/></p>
            <p>Bhairavanath Vidyalaya, Khadki</p>
          </div>
          <div className="percent">
            <p><LiaCertificateSolid/></p>
            <p>89.80%</p>
          </div>
        </div>
      </div>
    </div>
    <div id="internship">
      <div className="expr">
        <div className='internships_heading'>
          <p>Internships</p>
        </div>
        <div className='internship_detail'>
          <div className="pos">
            Web Developer Intern
          </div>
          <div className="company_name">
            Learnclub
          </div>
          <div className="tasks">
            <div>
              <p>Responsibilities</p>
            </div>
            <ul>
              <li id="task1">Worked with UI and UX.</li>
              <li id="task2">Practice software development lifecycle.</li>
              <li id="task3">Developed and host learning web portal</li>
              <li id="task4">Technologies used : HTML, CSS, php, Wordpress.</li>
            </ul>
          </div>
          <div className="certificate">
            <a className='resume_btn' href="https://drive.google.com/file/d/1iLMaFlvYjlLOzfeJfCzzxqOn-zeuZqr2/view?usp=sharing">
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="achievements_main">
      <div className="achievements">
        <div className='achievements_heading'>
          <p>Achievements</p>
        </div>
        <div className='achievement_detail'> 
          <ul>
            <li>Secured AIR-6 in Robocon Competition host by IIT Delhi</li>
            <li>Solved 250+ coding questions on various platform</li>
          </ul>
        </div>  
      </div>
    </div>
  </div>


    </>
  )
}
