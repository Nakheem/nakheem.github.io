import './App.css';
import Nav from './Compnent/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
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
import oldWebSite from "./Images/OldWebSite.png";
import GalacticHoarder from "./Images/GalacticHoarder.svg";
import SummonersSnackrifice from "./Images/SummonersSnackrifice.svg";

function App() {
  return (
    <div className="App">
      <div className="page">
      <Container>
      <Nav className='m-auto' />
        <About /> 
          <Row className="cardGrid">
          <p className='header' id='Projects'> Projects</p>
          <Cards title="League of Legends Data analyst"  buttonText="More Information" 
          information = " Worked with the League of Legends public API to retrieve information from thousands of games with the goal of finding strategies used by skilled players to win games.
                        Grouped data based on win rate, and tried to find correlations in different metrics and those win rates."
                        image={League} alt="Cat" link = {"https://www.youtube.com/watch?v=X4VEX-JXPqY"} buttonTitle = "Youtube Link" github = {"https://github.com/Nakheem/Data301"} />
          <Cards title="League of Legends Search Engine"  buttonText="More information" 
            information = "Crated a League of Legend Search Bar to allow players to look up information about Champions and Players. It uses React and Bootstrap" 
            image={League} alt="Cat" github = {"https://github.com/Nakheem/leaguesearch"} />  
          <Cards title="Backend For League of Legends Search"  buttonText="More information" 
            information = "Crated to allow the search bar to connect to Riot API. Allowing players to look up match history. It uses Node.js, express js, Mongo DB backend" 
            image={League} alt="Cat" github = {"https://github.com/Nakheem/lol-api-app"} />  
          <Cards title="Blog Web site"  buttonText="MORE INFORMATION!"  
            information = "Created a website with HTML, CSS, JavaScript, PHP and Ajax for online discussions and personalized blog posts. 
                          As part of a group project, I used the Agile Scrum method and Jira to assign tasks. " 
            image={BlogWebSite} alt="Cat" github = {"https://github.com/Nakheem/360Website"} />
          <Cards title="Version 1 of website"  buttonText="More information" 
            information = "My old website, using static HTML and CSS. Based on a template" 
            image={oldWebSite} alt="Cat" github = {"https://github.com/Nakheem/OldWebSite"} buttonTitle = {"Vist site"} link = {"https://nakheem.github.io/OldWebSite/"}/>
          </Row>
       </Container>
       <Container>
          <Row className="cardGrid">
          <p className='header' id='GameJams'> Game Jams</p>
          <Cards title="Galactic Hoarder: Abduct and Arrange"  buttonText="More information"
            information = "A game jam game made in Unity 6 with C#. You play as a Galactic Hoarder, carefully filling your spaceship's container with abducted earthly valuables.
                          Pieces fall like Tetris blocks: move them with the arrow keys, rotate them with Q and E, and don't overflow the container!
                          Made with a team of five, where I was one of three programmers."
            image={GalacticHoarder} alt="Galactic Hoarder cover art" buttonTitle = "Play on itch.io" link = {"https://wiredball.itch.io/galactic-hoarder-abduct-and-arrange"} />
          <Cards title="Summoner's Snackrifice"  buttonText="More information"
            information = "A game jam game made in Unity 6 with C#. A run of timed card mini-games: a 52 card pickup game where you drag the cards back into place,
                          a memory matching game, and Must Be Over 21 To Enter, where you have to place cards to make 21."
            image={SummonersSnackrifice} alt="Summoner's Snackrifice cover art" buttonTitle = "Play on itch.io" link = {"https://wiredball.itch.io/summoners-snackrfice"} />
          </Row>
       </Container>
       <Container>
          <Row className="cardGrid">
          <p className='header' > Work Experience </p>
          <Cards title="Canadian Tire Application Developer" buttonText="What do I do!"
          information = "Nov 2023 - Current. I build and maintain internal Angular web applications used by over 500 stores, giving them real-time access to sales, margins, and top-performing products.
          I own the full lifecycle, from requirements to testing and user support, and reached 100% store adoption within one month.
          I also build RESTful APIs with Java Spring, write automated tests with Jasmine, and help migrate legacy Excel tools to web applications." 
          image={CTC} alt="Canadian Tire logo" />
          <Cards title="Canadian Tire Supply Chain Process Analyst CO OP" buttonText="What I did do!"
          information = "Sept 2022 - Sept 2023. Audited supplier shipping data using EDW databases and SPS EDI systems to identify discrepancies.
          Created a Python script to automate error detection that flagged over 500 errors in Excel-based audits on its first run.
          Communicated with internal teams and external vendors to resolve shipping disputes, acting as mediator between stakeholders."
          image={CTC} alt="Canadian Tire logo" />
          <Cards title="UBC Web Developer CO OP"  buttonText="What I did do!"
          information = "May 2021 - Sep 2021. Added a scoring system and leaderboard to an existing coding practice platform for UBC students.
          Used a Django backend to support RESTful API requests from the frontend and manage data in a SQLite database, and wrote JUnit tests to validate student code submissions against multiple correct solutions."
          image={UBC} alt="UBC logo" />
          </Row>
       </Container>
       <Container>
          <Row className="cardGrid">
          <p className='header'>Education</p>
          <Cards title="Bachelors of Arts In Computer Science"  buttonText="More information" 
          information = "University of British Columbia, Department of Science and Arts  2020-2023" 
          image={UBC} alt="Cat" />
          <Cards title="Assoicates of Arts"  buttonText="More information"
          information = "Associate of Arts 2017 - 2020"
          image={OC} alt="Cat" />
          </Row>
       </Container>
         </div>
    </div>
  );
}

export default App;
