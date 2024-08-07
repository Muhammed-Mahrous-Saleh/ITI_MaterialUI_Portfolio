import { Avatar, Box, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";

export default function Landing() {
    return (
        <Box
            id="home"
            className="container flex justify-center items-center h-100 md:h-lvh gap-16 mx-auto "
        >
            <Avatar
                alt="Travis Howard"
                src="/images/2.jpg"
                sx={{ width: 300, height: 300 }}
            />
            <Box sx={{ width: "100%", maxWidth: 600 }}>
                <Typography variant="h2" gutterBottom>
                    Hi, It`s <Typography variant="span">Mohamed 👋</Typography>
                </Typography>
                <Typography variant="h3" gutterBottom>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(1000)
                                .typeString("Software Engineer")
                                .pauseFor(3000)
                                .deleteChars(8)
                                .typeString("Developer")
                                .pauseFor(3000)
                                .deleteChars(19)
                                .typeString(
                                    '<span class="font-color-main">Frontend and Cross Platform Developer</span>'
                                )
                                .pauseFor(10000)
                                .deleteAll()
                                .start();
                        }}
                    />
                </Typography>
            </Box>
        </Box>
    );
}
