
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { LogOut, Moon, Settings, User } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from './ui/dropdown-menu'
import { ThemeToggle } from './ui/theme'
import { SidebarTrigger } from './ui/sidebar'

const Navbar = () => {
    return (
        <nav className='flex p-4 items-center justify-between sticky top-0 bg-background z-10'>
            {/* left */}
            <SidebarTrigger className='cursor-pointer' />
            {/* right */}
            <div className='flex items-center gap-4'>
                <Link href={'/'}>
                    Dashborad
                </Link>
                {/* theme */}
                <ThemeToggle />
                {/* user menu */}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="/4313d2e14004666a464f64e05784f14e.jpg" />
                            <AvatarFallback>Kan</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <User className='w-[1.2rem] h-[1.2rem] mr-2' />
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className='w-[1.2rem] h-[1.2rem] mr-2' />
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem variant='destructive'>
                            <LogOut className='w-[1.2rem] h-[1.2rem] mr-2' />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>

                </DropdownMenu>
            </div>
        </nav>
    )
}

export default Navbar
