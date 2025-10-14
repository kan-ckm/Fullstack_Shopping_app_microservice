'use client'
import { Calendar, ChevronUp, Home, Inbox, Plus, Search, Settings, Shirt, ShoppingBasket, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AddCategory from './add_and_edit/AddCategory'
import AddOrder from './add_and_edit/AddOrder'
import AddProduct from './add_and_edit/AddProduct'
import AddUser from './add_and_edit/AddUser'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Sheet, SheetTrigger } from './ui/sheet'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from './ui/sidebar'
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]
const AppSideBar = () => {
    return (
        <Sidebar collapsible='icon'>
            < SidebarHeader className='py-4' >
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                                <Image src='/4313d2e14004666a464f64e05784f14e.jpg' width={20} height={20} alt='logo' />
                                <span className='ml-1'>Kan</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader >
            <SidebarSeparator />
            <SidebarContent>
                {/* <SidebarGroup> là mặc định trong sidebar giúp nhóm các content khác nhau đc chia ra */}
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Aplication
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {
                                items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                        {
                                            item.title === "Inbox" && (
                                                <SidebarMenuBadge>28</SidebarMenuBadge>
                                            )
                                        }
                                    </SidebarMenuItem>
                                ))
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {/*group product */}
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Products
                    </SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus /> <span className="sr-only">Add Product</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={'/products'}>
                                        <Shirt />
                                        <span>See All Products</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    {/* bảng nhập */}
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <SidebarMenuButton asChild>
                                                <Link href={'#'}>
                                                    <Plus />
                                                    <span>Add Product</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SheetTrigger>
                                        <AddProduct />
                                    </Sheet>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            {/* add category */}
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    {/* bảng nhập */}
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <SidebarMenuButton asChild>
                                                <Link href={'#'}>
                                                    <Plus />
                                                    <span>Add Category</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SheetTrigger>
                                        <AddCategory />
                                    </Sheet>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {/* group users */}
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Users
                    </SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus /> <span className="sr-only">Add User</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={'/users'}>
                                        <User />
                                        <span>See All Users</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    {/* bảng nhập */}
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <SidebarMenuButton asChild>
                                                <Link href={'#'}>
                                                    <Plus />
                                                    <span>Add User</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SheetTrigger>
                                        <AddUser />
                                    </Sheet>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {/* group order */}
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Orders / Payments
                    </SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus /> <span className="sr-only">Add Order</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={'/users'}>
                                        <ShoppingBasket />
                                        <span>See All Transaction</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    {/* bảng nhập */}
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <SidebarMenuButton asChild>
                                                <Link href={'#'}>
                                                    <Plus />
                                                    <span>Add Order</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SheetTrigger>
                                        <AddOrder />
                                    </Sheet>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton >
                                    <Avatar className='w-6 h-6'>
                                        <AvatarImage src="/4313d2e14004666a464f64e05784f14e.jpg" />
                                        <AvatarFallback>Kan</AvatarFallback>
                                    </Avatar> Kan <ChevronUp className='ml-auto' />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                                <DropdownMenuItem>Account</DropdownMenuItem>
                                <DropdownMenuItem>Setting</DropdownMenuItem>
                                <DropdownMenuItem>Sign out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar >
    )
}

export default AppSideBar
