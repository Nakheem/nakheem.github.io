import logo from './logo.svg';
import './App.css';
import Nav from './Compnent/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import profileImg from './Images/ProfileImage.png'
import About from './Compnent/About'
import Cards from './Compnent/Cards'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cats from'./Images/Cat.jpg';
import BlogWebSite from "./Images/BlogWebSite.png";
import League from "./Images/League-of-Legends-Logo.png";
import ArtGallery from "./Images/ArtGallery.jpg";
import UBC from "./Images/UBC_logo.png";
import CTC from "./Images/CTC.png";
import OC from "./Images/OC.png";

function App() {
  return (
    <div className="App">
      <body>
      <Container>
      <Nav />
        <About />
        
          <Row>
          <p> Projects</p>
          <Cards title="League of Legends Data analyst"  buttonText="More Information" 
          information = " Worked with the League of Legends public API to retrieve information from thousands of games with the goal of finding strategies used by skilled players to win games.
                        Grouped data based on win rate, and tried to find correlations in different metrics and those win rates."
                        image={League} alt="Cat" link = {"https://www.youtube.com/watch?v=X4VEX-JXPqY"} buttonTitle = "Youtube Link" github = {"https://github.com/Nakheem/Data301"} />
          <Cards title="Blog Web site"  buttonText="Yes it does!" 
            information = "Created a website with HTML, CSS, JavaScript, PHP and Ajax for online discussions and personalized blog posts. 
                          As part of a group project, I used the Agile Scrum method and Jira to assign tasks. " 
            image={BlogWebSite} alt="Cat" github = {"https://github.com/Nakheem/360Website"} />
          <Cards title="Version 1 of website"  buttonText="More information" 
            information = "My old website, using static HTML and CSS. Based on a template" 
            image={BlogWebSite} alt="Cat" github = {"https://github.com/Nakheem/OldWebSite"} buttonTitle = {"Vist site"} link = {"https://nakheem.github.io/OldWebSite/"}/>  
          </Row>
       </Container>
       <Container>
          <Row>
          <p> Work Experience </p>
          <Cards title="Canadian Tire Data Analyst Intern" buttonText="What I did do" 
          information = "  Analysed Supplier Performance fines by reviewing different web-based systems, such as SPS commerce, retrieving data from EDW tables or pulling reports and reviewing them in Excel to identify discrepancies and determine whether fines were justified.
          Collaborated with various stakeholders at different levels within the organization to communicate reasons for the acceptance or reversal of fines.
          " 
          image={CTC} alt="Cat" />
          <Cards title="UBC Web Developer CO OP"  buttonText="What do I do!" 
          information = "Developed features for a new University website, that would allow new Computer Science students to solve programming problems." 
          image={UBC} alt="Cat" />
          </Row>
       </Container>
       <Container>
          <Row>
          <p>Education</p>
          <Cards title="Bachelors of Arts In Computer Science"  buttonText="More information" 
          information = "University of British Columbia, Department of Science and Arts  2020-2023" 
          image={UBC} alt="Cat" />
          <Cards title="Assoicates of Arts"  buttonText="More information"
          information = "Associate of Arts 2017 - 2020"
          image={OC} alt="Cat" />
          </Row>
       </Container>    
         </body>
    </div>
  );
}

export default App;
