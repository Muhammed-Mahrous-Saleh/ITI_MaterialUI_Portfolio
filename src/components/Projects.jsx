/* eslint-disable react/prop-types */
import { Box, Grid } from "@mui/material";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

// eslint-disable-next-line react/prop-types
export default function Projects({ projects }) {
    return (
        <>
            <SectionTitle title={"Projects"} />
            <Box>
                <Grid
                    className="mx-auto "
                    container
                    spacing={4}
                    justifyContent="center"
                    alignContent="center"
                    alignItems="center"
                >
                    {projects.map((project, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <ProjectCard {...project} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}
