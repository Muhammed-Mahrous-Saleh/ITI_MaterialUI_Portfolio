import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
function ProjectCard({ ...project }) {
    const handleCardClick = () => {
        window.open(project.link, "_blank", "noopener,noreferrer");
    };
    return (
        <Box className="duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex justify-center">
            <Card className="max-w-sm m-4" onClick={handleCardClick}>
                <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {project.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {project.date}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default ProjectCard;
