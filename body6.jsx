
import { East } from '@mui/icons-material';

import React from 'react';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Body6() {
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
                        src="/image 9.png" 
                        alt="" 
                        style={{
                            maxWidth: '100%', // Make the image responsive
                            height: 'auto'
                        }} />
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
                            
                            <p style={{ 
                                color: 'black', 
                                textAlign: 'left', 
                                fontSize: '1rem', // Adjust font size for responsiveness
                                margin: '10px 0' 
                            }}>
                                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
                                massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                                In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus.
                                In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
                                commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis 
                                libero. Donec consectetur faucibus ipsum id gravida.
                            </p>
                            <h1 style={{ margin: '10px 0' ,color:"green"}}>
                                Tim Smith 
                            </h1>
                            < p style={{ margin: '10px 0' }}>
                                British dragon Boat Racing Association
                            </p>
                            
                        </div>
                    </Box>
                    <Box 
                                display='flex' 
                                sx={{ 
                                    flexDirection: { xs: 'column', sm: 'row' }, // Stack items on mobile
                                    alignItems: { xs: 'center', sm: 'flex-start' },
                                    marginTop: '30px' 
                                }}
                            >
                                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1} sx={{alignContent:'center',marginTop:'30px',width:'100%' }}> 
                <Box gridColumn="span 2">
                    <img src="/Logo.png" alt=""/>
                </Box>
                <Box gridColumn="span 2">
                    <img src="/Logo (1).png" alt=""/>
                </Box>
                <Box gridColumn="span 2">
                    <img src="/Logo (2).png" alt=""/>
                </Box>
                <Box gridColumn="span 2">
                    <img src="/Logo (3).png" alt=""/>
                </Box>
                <Box gridColumn="span 2">
                    <img src="/Logo (4).png" alt=""/>
                </Box>
                <Box gridColumn="span 2">
                    <img src="/Logo (5).png" alt=""/>
                </Box>
                
            </Box>
                                <Box 
                                    sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        marginTop: '34px',
                                        marginLeft: { sm: '2px' }
                                    }}
                                >
                                    <Button sx={{ color: 'green', whiteSpace: 'nowrap', textTransform: 'none' }}>Meet All Customers</Button>
                                    <East fontSize="large" sx={{ color: 'green', marginLeft: '5px' }} />
                                </Box>
                            </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Body6;
