import { Box, Typography } from "@mui/material";

function Footer() {
    return (
        <Box className="bg-gray-900 text-gray-300 py-8">
            <Box className="container mx-auto px-4 flex flex-col items-center">
                <Typography variant="body1" className="mb-4">
                    &copy; 2024 Mohamed Alaa Mahrous. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
