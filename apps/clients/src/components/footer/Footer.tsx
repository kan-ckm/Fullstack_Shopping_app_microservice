import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-16 gap-8 md:gap-0 flex flex-col items-center md:flex-row md:items-start md:justify-between bg-gray-800 p-8 rounded-md'>
            <div className='flex flex-col items-center gap-4 md:items-start'>
                <Link href={'/'} className='flex items-center'>
                    <Image src='/logo.png'
                        alt='logo' width={36} height={36}
                    />
                    <p className='hidden md:block text-md font-medium tracking-wider text-white'>TOMATO</p>
                </Link>
                <p className='text-sm text-gray-400'>
                    2025 TrendTomato.
                </p>
                <p className='text-sm text-gray-400'>
                    All rights reserved.
                </p>
            </div>
            <div className='flex flex-col items-center md:items-start text-gray-300 gap-4 text-sm'>
                <p className='text-sm text-amber-50'>Links</p>
                <Link href={'/'}>Homepage</Link>
                <Link href={'/'}>contact</Link>
                <Link href={'/'}>Terms of Service</Link>
                <Link href={'/'}>Privacy Polly</Link>
            </div>
            <div className='flex flex-col items-center md:items-start text-gray-300 gap-4 text-sm'>
                <p className='text-sm text-amber-50'>Links</p>
                <Link href={'/'}>test</Link>
                <Link href={'/'}>test</Link>
                <Link href={'/'}>test</Link>
                <Link href={'/'}>test</Link>
            </div>
            <div className='flex flex-col items-center md:items-start text-gray-300 gap-4 text-sm'>
                <p className='text-sm text-amber-50'>Links</p>
                <Link href={'/'}>test</Link>
                <Link href={'/'}>test</Link>
                <Link href={'/'}>test</Link>
                <Link href={'/'}>test</Link>
            </div>

        </div>
    )
}

export default Footer