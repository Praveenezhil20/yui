

import React from 'react';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Body4() {
    return (
        <Box 
            sx={{ 
                flexGrow: 1, 
                height: 'auto', // Set to auto for responsive height
                marginTop: { xs: '20px', sm: '30px' },
                padding: { xs: '0 16px', sm: '0 32px' } // Add padding for mobile screens
            }}
        >
            <Grid container spacing={2} columns={16} alignItems="center">
                {/* Image Section */}
                <Grid 
                    item 
                    xs={12} 
                    sm={6} 
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'center', sm: 'flex-start' }, // Center image on mobile
                        marginTop: { xs: '10px', sm: '0' }, // Adjust margin for mobile
                    }}
                >
                    <img 
                        src="/Frame 35.png" 
                        alt="" 
                        style={{
                            maxWidth: '100%', // Make the image responsive
                            height: 'auto'
                        }} 
                    />
                </Grid>

                {/* Text Section */}
                <Grid 
                    item 
                    xs={12} 
                    sm={10} 
                    sx={{
                        marginTop: { xs: '20px', sm: '0' }, // Adjust margin for mobile
                        paddingLeft: { sm: '150px' }, // Add padding on larger screens
                    }}
                >
                    <Box>
                        <div style={{
                            textAlign: 'left', 
                            fontSize: '1rem', // Adjust font size for responsiveness
                            width: '100%', 
                        }}>
                            <h1 style={{ margin: '10px 0' }}>
                            The unseen of spending three
                            </h1>
                            <h1 style={{ margin: '10px 0' }}>
                            years at Pixelgrade
                            </h1>
                            <p style={{ 
                                color: 'black', 
                                textAlign: 'left', 
                                fontSize: '1rem', // Adjust font size for responsiveness
                                margin: '10px 0' 
                            }}>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae 
                                est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. 
                                Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. 
                                Donec elementum pulvinar odio.
                            </p>
                            <Button 
                                sx={{ 
                                    bgcolor: 'green', 
                                    color: 'white', 
                                    marginTop: '20px', 
                                    textTransform: 'none' 
                                }} 
                                variant="contained"
                            >
                                Learn More
                            </Button>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Body4;
