'use client'
import React from 'react'
import {

    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,

} from "@/components/ui/sheet"
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '../ui/button'
const formSchema = z.object({
    fullName: z
        .string()
        .min(2, { message: 'Full name must be at least 2 characters' })
        .max(50),
    email: z
        .string()
        .email({ message: 'Invalid email address!' }),
    phone: z
        .string()
        .min(10, { message: '' })
        .max(15),
    address: z.string().min(2),
    city: z.string().min(2),
})
const EditUser = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "Kan",
            email: 'kan123@gmail.com',
            phone: '+84 123 9201 343',
            address: '32c/D177/cuchi',
            city: 'Hồ Chí Minh'
        },
    })
    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle className='mb-4'>Edit User</SheetTitle>
                <SheetDescription asChild>
                    <Form {...form}>
                        <form className='space-y-8'>

                            <FormField
                                control={form.control}
                                name='fullName'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full name</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter the full name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />



                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Only admin can see your email.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <FormField
                                control={form.control}
                                name='phone'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Only admin can see your phone number (optional).
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <FormField
                                control={form.control}
                                name='address'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Address</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter user address (optional).
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='city'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>city</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter user city (optional).
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* <Form {...form}>

<FormField
control={form.control}
name='city'
render={({ field }) => (
    <FormItem>
    <FormLabel>City</FormLabel>
    <FormControl >
    <Select>
    <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Role" />
    </SelectTrigger>
    <SelectContent>
    <SelectItem value="admin">Admin</SelectItem>
    <SelectItem value="user">User</SelectItem>
    
    </SelectContent>
    </Select>
    </FormControl>
    <FormDescription>
    This is your public display Location.
    </FormDescription>
    <FormMessage />
    </FormItem>
    )}
    />
    
    </Form> */}
                            <Button type='submit'>Submit</Button>
                        </form>
                    </Form>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    )
}

export default EditUser