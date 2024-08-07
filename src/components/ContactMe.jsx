import { Box, IconButton, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SectionTitle from "./SectionTitle";

function ContactMe() {
    return (
        <Box className="flex flex-col items-center justify-center">
            <SectionTitle title={"Contact Me"} />
            <Box className="flex space-x-4 mb-16">
                <Link
                    href="mailto:your.email@example.com?subject=Contact%20Me"
                    target="_blank"
                    rel="noopener"
                >
                    <IconButton aria-label="email">
                        <EmailIcon fontSize="large" className="text-gray-500" />
                    </IconButton>
                </Link>
                <Link
                    href="https://www.facebook.com/yourprofile"
                    target="_blank"
                    rel="noopener"
                >
                    <IconButton aria-label="facebook">
                        <FacebookIcon
                            fontSize="large"
                            className="text-blue-500"
                        />
                    </IconButton>
                </Link>
                <Link
                    href="https://www.twitter.com/yourprofile"
                    target="_blank"
                    rel="noopener"
                >
                    <IconButton aria-label="twitter">
                        <TwitterIcon
                            className="text-blue-500"
                            fontSize="large"
                        />
                    </IconButton>
                </Link>
                <Link
                    href="https://www.instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener"
                >
                    <IconButton aria-label="instagram">
                        <InstagramIcon
                            className="text-pink-500"
                            fontSize="large"
                        />
                    </IconButton>
                </Link>
                <Link
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener"
                >
                    <IconButton aria-label="linkedin">
                        <LinkedInIcon
                            fontSize="large"
                            className="text-blue-700"
                        />
                    </IconButton>
                </Link>
            </Box>
        </Box>
    );
}

export default ContactMe;
