
import { Bell, Home, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, DialogTrigger } from '../ui/dialog'
import SreachBar from './Search'
import ShoppingCartIcon from './ShoppingCartIcon'
import LoginDialog from '../Home/auth/LoginDialog'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import RegisterDialog from '../Home/auth/RegisterDialog'

const Navbar = () => {
    return (
        <nav className='w-full flex items-center justify-between border-b border-gray-200 pb-4'>
            {/* LEFT */}
            <Link href={'/'} className='flex items-center'>
                <Image src='/logo.png'
                    alt='logo' width={36} height={36}
                    className='w-6 h-6 md:w-9 md:h-9' />
                <p className='hidden md:block text-md font-medium tracking-wider'>TOMATO</p>
            </Link>
            {/* RIGHT */}
            <div className='flex items-center gap-6 '>
                <SreachBar />
                <Link href={'/'}>
                    <Home className='w-4 h-4 text-gray-600' />
                </Link>
                <Bell className='w-4 h-4 text-gray-600' />
                <ShoppingCartIcon />
                {/* auth dialog */}
                <HoverCard openDelay={100} closeDelay={200} >
                    <HoverCardTrigger><User className='w-5 h-5 text-gray-600' /></HoverCardTrigger>
                    <HoverCardContent className='w-30 h-20 '>
                        <div className="flex flex-col gap-2">
                            <Dialog>
                                <DialogTrigger className='h-4'>
                                    <span className='text-sm font-semibold'>Sign in</span>
                                </DialogTrigger>
                                <LoginDialog />
                            </Dialog>
                            <div className="border-b" />
                            <Dialog>
                                <DialogTrigger className='h-4'>
                                    <span className='text-sm font-semibold'>Sign up</span>
                                </DialogTrigger>
                                <RegisterDialog />
                            </Dialog>
                        </div>
                    </HoverCardContent>
                </HoverCard>

            </div>
        </nav>
    )
}

export default Navbar