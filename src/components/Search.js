import React from 'react';
import icons from '../ultis/icon';

const {IoSearchOutline} = icons;

const Search = () => {
  return (
    <div className='w-full flex items-center bg-[#DDE4E4] rounded-[20px]'>
        <span className='h-10 pl-4 flex items-center justify-center text-gray-500'>
            <IoSearchOutline size={20}/>
        </span>
        <input 
            type='text'
            className='w-full outline-none bg-[#DDE4E4] px-4 py-2 rounded-[20px] h-10 text-gray-500'
            placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
        />
    </div>
  )
}

export default Search;