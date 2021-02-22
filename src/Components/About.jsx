import Card from "./Card";

function About() {
    return(
        <div id="about" className="header-container">
          <h2>ABOUT</h2>
          <div className="cards-container">
            <Card
            title="Learning"
            text="One of my life goals is to learn something new every single day.
            I love reading books, specifically self-help books. I also love reading articles
            about new technologies and watch how people care about the future more every day."
            secondtext="Another thing I put a lot of time into is my habits, I believe that
            successfully people are those with successful habits."
            />
            <Card
            title="Exercise"
            text="Another one of my life goals is to exercise every day. I enjoy jumping rope,
            going for a run, lifting weights. I consider working out a really important thing
            for me because it keeps me strong and it keeps me healthy."
            secondtext="I try to get an hour of exercise done every single day."
            />
            <Card
            title="Video Games"
            text="I have been playing video games since I can remember, my first console was a NES my
            dad bought me, then a SNE, then gameboys and after that DS's. Although I became fully into
            pc games once I had my first laptop."
            secondtext="I enjoy playing some league of legends, or genshin impact. I usually play them
            in my free time."
             /> 
          </div>
        </div>
    )
};

export default About;