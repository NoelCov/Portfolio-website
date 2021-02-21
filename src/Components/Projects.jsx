import ProjectContainer from "./Project-Container";
import Button from '@material-ui/core/Button';
import DataUsageIcon from '@material-ui/icons/DataUsage';

function Projects() {
    return (
        <div>
            <ProjectContainer 
                title="E-Commerce Book Store"
                text="This project was made thinking in what an online book store has.
                The project has a mongoose DB where you can add, delete books depending
                on your inventory. As you add more inventory all you have to do is add it to the DB
                and because I used react, it'll be added to the list automatically. You won't have to do
                anything to it. The customer can go to the website, read
                what each book is about, add books to their cart, and make the purchase."
                items={['HTML', 'CSS', 'Node JS / React JS', 'Bootstrap / Material-UI', 'Mongoose']}
                href="https://github.com/NoelCov/BookStore-Project"
                btn={
                    <Button variant="contained"
                    size="large"
                    endIcon={<DataUsageIcon />}
                    href="https://github.com/NoelCov/BookStore-API"
                    target="_blank"
                    style={{margin: "30px 0 10px 20px"}}
                    >API</Button>
                }
            />
            <ProjectContainer
                title="Habit Tracker"
                text="I created this project thinking in a way to be able to track my daily habits
                because I believe is it very important. So in this app you can do exactly that. 
                The user can add habits very easily, if they click on the habit it'll be deleted. 
                The website uses Mongoose to store the habits, so if the user closes the website 
                and they come back the next day, the habits will still be there. They do not dissapear 
                until the user clicks on it."
                items={['HTML', 'CSS', 'Node JS / React JS', 'Bootstrap / Material-UI', 'Mongoose']}
                href="https://github.com/NoelCov/Habits"
                btn={
                    <Button variant="contained"
                    size="large"
                    endIcon={<DataUsageIcon />}
                    href="https://github.com/NoelCov/HabitsAPI"
                    target="_blank"
                    style={{margin: "30px 0 10px 20px"}}
                    >API</Button>
                }
            />
            <ProjectContainer
                title="Web-Scrapper for Amazon"
                text="I created this project because when I buy things on amazon, I usually get the cheapest ones
                so, to save time. I can use the app which will ask me what Item I'm looking for. Then It will email me
                the cheapest results it found based on the Item I'm looking for. The email will contain the name
                of the item, the price, and the link to amazon in case I decide to buy it.
                The amount of items the program emails you, can be changed inside the function: get_email_content()."
                items={['Python', 'Selenium / BeautifulSoup', ]}
                href="https://github.com/NoelCov/Amazon-WebScraper"
             />
        </div>
    )
};

export default Projects;