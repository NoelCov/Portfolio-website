import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';


function ProjectContainer(props) {
    return (
    <div className="project-container">
        <h3 style={{paddingTop: "20px"}}>{props.title}</h3>
        <hr />
        <h5>{props.text}</h5>
        <p className="project-container-subtitle">Technologies used for this project: </p>
        <ul style={{listStyle: "none"}}>
        {props.items.map((item, key) => <li key={key}>{item}</li> )}
        </ul>
        <Button 
        endIcon={<GitHubIcon />}
        variant="contained"
        size="large"
        href={props.href}
        target="_blank"
        style={{margin: "30px 0 10px 20px"}}
        >Project</Button>
        {props.btn}
    </div>
    
    )
};

export default ProjectContainer;