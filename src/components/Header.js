import React from 'react'
import icons from '../ultis/icon';
import Search from './Search';

const {
    AiOutlineArrowLeft,
    AiOutlineArrowRight
} = icons;
const Header = () => {
    return (
        <div className='w-full flex justify-between items-center'>
            <div className='w-full flex gap-6 items-center'>
                <div className='flex gap-6 text-gray-400'>
                <span><AiOutlineArrowLeft size={24}/></span>
                <span><AiOutlineArrowRight size={24}/></span>
                </div>
                <div className='w-1/2'>
                   <Search/>
                </div>
            </div>
            <div>
                dang nhap
            </div>
        </div>
    )
}

export default Header