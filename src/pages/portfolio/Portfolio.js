import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  IconButton,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import "./styles.css";

const projects = [
  {
    title: "Fetch",
    description:
      "An app that helps pet owner find new friends for their furry family members. Created using MERN stack, React-image-crop Mongoose, Axios, Materialize, Multer, Imgur, Animate.css, Passport Raise Da Woof!",
    imageUrl: "/assets/project-images/fetch.png",
    deployedLink: "https://fetch-woof-312.herokuapp.com/",
    githubLink: "https://github.com/raise-da-woof/fetch",
  },
  {
    title: "My Pantry",
    description:
      "App that provides recipes to users with ingredients the users have on hand. Built with Spoonacular API, MySQL, Passport, Bulma,Express, Express Handlebars, ESLint. Travis.",
    imageUrl: "/assets/project-images/mypantry.png",
    deployedLink: "https://shielded-harbor-38774.herokuapp.com/",
    githubLink: "https://github.com/Hot-Fixers/mypantry",
  },
  {
    title: "Shaker",
    description:
      "Shaker is a web app for discovering new cocktails and drinks. Favorite drinks can be stored in localStorage, recalled for future use and deleted is necessary. Shaker also features the Google maps api, allow users to pull up a map of bars near them that may be serving the new and interesting cocktails they find!",
    imageUrl: "/assets/project-images/shaker.png",
    deployedLink: "https://json-d3rulo.github.io/shaker/",
    githubLink: "https://github.com/JSON-D3RULO/shaker",
  },
  {
    title: "Fitness Tracker",
    description:
      "The fitness tracker allows users to create, track and manage workouts/exercises using Chart.js. Its built using Express, MongoDB, Mongoose, and Chart js.",
    imageUrl: "/assets/project-images/fitness-tracker.png",
    deployedLink: "https://full-fitness.herokuapp.com/",
    githubLink: "https://github.com/Mohmedvaid/fitness-tracker",
  },
  {
    title: "CR-Shift Scheduler",
    description:
      "A simple app that allows the users to add names and schedules times for any activity. The app then automatically creates displays shift according to the availibility of the people. Its created with jQuery, MongoDB and Express",
    imageUrl: "/assets/project-images/cr-shift.png",
    deployedLink: "https://cr-shift.herokuapp.com/",
    githubLink: "https://github.com/Mohmedvaid/cr-shift",
  },
  {
    title: "Note Taker",
    description:
      "Note takers is simple app that allows the users to create and save notes for future. The notes are saved in the local storage of the browser",
    imageUrl: "/assets/project-images/note-taker.png",
    deployedLink: "https://whispering-sea-22703.herokuapp.com/",
    githubLink: "https://github.com/Mohmedvaid/note-taker",
  },
  {
    title: "Employee Manager",
    description:
      "Employee-tracker is a CLI content management system that allows the user to manage employees. The app allows the user to add/remove employees, departments and roles. Roles, Managers and employees can be views edited accordingly.",
    imageUrl: "/assets/project-images/employee-manager.png",
    githubLink: "https://github.com/Mohmedvaid/employee-tracker",
  },
];

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject({});
  };

  return (
    <div>
      <h1 className="heading">My Projects</h1>
      <div className="card-container">
        <Grid container spacing={6} justifyContent="center">
          {projects.map((project, index) => (
            <Grid
              key={index}
              item
              lg={3} // Adjusted width for larger screens
              md={4} // Adjusted width for medium screens
              sm={6}
              xs={12}
              data-aos="zoom-in-down"
            >
              <Card
                className="portfolio-cards"
                elevation={2}
                style={{ width: "100%" }}
              >
                <CardMedia
                  component="img"
                  alt={project.alt}
                  height="390"
                  image={project.imageUrl}
                  style={{ objectFit: "cover" }}
                />
                <CardContent
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <IconButton
                    aria-label="more"
                    onClick={() => handleOpen(project)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            {selectedProject.title}
          </DialogTitle>
          <DialogContent dividers>
            <CardMedia
              component="img"
              alt={selectedProject.alt}
              height="140"
              image={selectedProject.imageUrl}
              style={{ objectFit: "cover", width: "100%" }}
            />
            <Typography variant="h5" component="div">
              {selectedProject.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {selectedProject.description}
            </Typography>
            <a
              href={selectedProject.deployedLink}
              target="_blank"
              rel="noreferrer"
            >
              Deployed Link
            </a>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Portfolio;
