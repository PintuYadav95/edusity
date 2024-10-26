import './About.css'
import about_icon from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
         <div className="about-left">
            <img src={about_icon} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
         </div>
         <div className="about-right">
             <h3>ABOUT UNIVERSITY</h3>
             <h2>Nurturing Tomorrow1`s Leaders Today</h2>
             <p>Edusity crosses worldwide barriers and borders to bring teachers and students together on the same platform. It has all the 
             features and tools a teacher would need in todays environment to run an engaging classroom, including interactive whiteboard, audio and video support, 
              student participation,
              one-on-one and group interaction, directed and taught coursework options, exams and testing options, grading and much more.
              Edusity is the only online learning platform that allows parents to actively check and monitor their childs performance and progress in the classroom</p>
              <p>Edusity is available on a Software as a service (SaaS) model where teachers can sign up
              and put their courses online using our platform. In this model, we bring the students to the teachers
               and promote their courses through our online initiatives</p>
         </div>
    </div>
  )
}

export default About