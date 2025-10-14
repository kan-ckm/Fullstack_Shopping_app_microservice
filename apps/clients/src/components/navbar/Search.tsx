import { Search } from 'lucide-react'
import React from 'react'

const SreachBar = () => {
    return (
        <div className='hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-md'>
            <Search />
            <input id='search' placeholder='Search...' className='outline-0 text-sm' />
        </div>
    )
}

export default SreachBar