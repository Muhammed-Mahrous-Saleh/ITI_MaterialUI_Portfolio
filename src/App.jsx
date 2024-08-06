import { Avatar, Box, Typography } from "@mui/material";
import "./App.css";

function App() {
    return (
        <>
            <Box className="container flex justify-center items-center h-lvh gap-16 mx-auto ">
                <Avatar
                    alt="Travis Howard"
                    src="/images/2.jpg"
                    sx={{ width: 300, height: 300 }}
                />
                <Box sx={{ width: "100%", maxWidth: 600 }}>
                    <Typography variant="h2" gutterBottom>
                        Hi, It`s{" "}
                        <Typography variant="span">Mohamed 👋</Typography>
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                        Software Developer
                    </Typography>
                    <Typography variant="h3" color={"Highlight"}>
                        Frontend and cross platform.
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default App;
