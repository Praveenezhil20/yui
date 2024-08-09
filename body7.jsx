import React from 'react';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';


function Body7() {
    return (

            <Box sx={{ flexGrow: 1 ,bgcolor:'#f5f5f5',height:'300px',marginTop:'30px'}}>
                <Grid container spacing={1} columns={16}>

                

                    <Grid item xs={4}>
                        
                            
                        <Box sx={{ padding: { xs: '0 16px', sm: '0 32px' } }}>
                        <div style={{
                            textAlign: 'left',
                            fontSize: '1.3rem',
                            width: '100%',
                            marginTop: '70px'
                        }}>
                            <h1 style={{ margin: '0',whiteSpace: 'nowrap' }}>
                            Helping a local
                            </h1>
                            <h1 style={{ margin: '0' ,whiteSpace: 'nowrap',color:'green'}}>
                            business reinvent itself
                            </h1>
                            <p style={{ color: 'black', textAlign: 'left', margin: '10px 0', fontSize: '1rem' ,whiteSpace: 'nowrap'}}>
                            We reached here with our hard work and dedication
                            </p>
                            
                        </div>
                    </Box>
                    </Grid>
                    <Grid item xs={6} sx={{
                        height: '100px',
                        marginTop: '45px',
                        marginLeft:'30px',
                        gap: '0px',
                        opacity: '0px'
                    }}>
                        <Box sx={{ width: '100%' ,marginLeft:'400px',marginTop:'25px'}}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 6, md: 9 }}>
                                <Grid  >
                                <Grid item xs={2} sx={{ width: '100%',marginBottom:'70px'}} >
                                    <Box sx={{display:'flex'}}>
                                        <Box>
                                        <img src="/Icon4.png" alt=""/>
                                        </Box>
                                        <Box sx={{marginLeft:'10px'}}>
                                            <b style={{fontSize:'20px',margin:'0'}}>2,245,000
                                            </b>
                                            <p style={{fontSize:'15px',margin:'0'}}>
                                                Members
                                            </p>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={2}sx={{ width: '100%' }}>
                                <Box sx={{display:'flex'}}>
                                        <Box>
                                        <img src="/Icon5.png" alt=""/>
                                        </Box>
                                        <Box sx={{marginLeft:'10px'}}>
                                            <b style={{fontSize:'20px',margin:'0'}}>8,28,000
                                            </b>
                                            <p style={{ fontSize: '15px', margin: '0', whiteSpace: 'nowrap' }}>Event Bookings</p>
                                        </Box>
                                    </Box>
                                </Grid>

                                </Grid>
                                <Grid>
                                <Grid item xs={2}sx={{ width: '100%' ,marginLeft:'30px',marginBottom:'70px'}}>
                                <Box sx={{display:'flex'}}>
                                        <Box>
                                        <img src="/Icon6.png" alt=""/>
                                        </Box>
                                        <Box >
                                            <b style={{fontSize:'20px',margin:'0'}}>46,328
                                            </b>
                                            <p style={{fontSize:'15px',margin:'0'}}>
                                                Clubs
                                            </p>
                                        </Box>
                                    </Box>
                                
                                </Grid>
                                <Grid item xs={2}sx={{ width: '100%' ,marginLeft:'50px'}}>
                                <Box sx={{display:'flex'}}>
                                        <Box>
                                        <img src="/Icon7.png" alt=""/>
                                        </Box>
                                        <Box >
                                            <b style={{fontSize:'20px',margin:'0'}}>1,926,000
                                            </b>
                                            <p style={{fontSize:'15px',margin:'0'}}>
                                                Payments
                                            </p>
                                        </Box>
                                    </Box>
                                </Grid>

                                </Grid>
                                
                                
                            </Grid>
                        </Box>
                    </Grid>
                    
                </Grid>
            </Box>


    );
}

export default Body7;





