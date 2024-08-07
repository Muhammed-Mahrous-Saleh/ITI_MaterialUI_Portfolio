import { Box, Typography } from "@mui/material";
import "../index.css";

// eslint-disable-next-line react/prop-types
export default function SectionTitle({ title }) {
    return (
        <Box className="flex items-center justify-center my-16 ">
            <Typography
                variant="h2"
                component="h3"
                className="section-title transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
                {title}
            </Typography>
        </Box>
    );
}
