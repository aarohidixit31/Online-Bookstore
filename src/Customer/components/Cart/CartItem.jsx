import React from 'react'
import { IconButton } from '@mui/material'
import { Button } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const  CartItem  = () => {
    return (
        <div className='p-5 shadow-lg border  rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-contain object-top'  src="https://covers.openlibrary.org/b/isbn/9781476738024-L.jpg
                    " alt="" />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>A Man Called Ove</p>
                    <p className='opacity-70'>By: Fredrik Backman(2012)</p>
                    <p className='opacity-70 mt-2'>Seller: Crishtaliyo Joseph</p>
                    <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                        <p className='font-semibold'>Rs.199</p>
                        <p className='opacity-50 line-through'>Rs.211</p>
                        <p className='text-green-600 font-semibold'>5% off</p>
                    </div>
                </div>
                
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                    <div className='flex items-center space-x-2'>
                        <IconButton>
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm'>3</span>
                            <IconButton sx={{color:'RGB(145 85 253)'}}>
                                <AddCircleOutlineIcon/>
                            </IconButton>
                        
                    </div>
                    <div>
                        <Button sx={{color:'RGB(145 85 253)'}}>remove</Button>
                    </div>
            </div>
        </div>
    )
}
export default CartItem