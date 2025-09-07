import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import React from 'react'
const ProductReviewCard = () => {
    return(
        <div>
            <Grid container spacing={2} justifyContent="flex-start">
                <Grid item xs ={1}>
                    <Box>
                        <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>R</Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div className="space-y-1 text-left">
                        <div>
                            <p className='font-semibold text-lg'>Raju Kumar</p>
                            <p className='opacity-70'>April 5, 2023</p>
                            <Rating value={4.5} name='half-rating' readOnly/>
                        </div>
                    </div>
                    
                    <p>Well-researched and beautifully written.</p>
                </Grid>
            </Grid>

        </div>
    );
};
export default ProductReviewCard;