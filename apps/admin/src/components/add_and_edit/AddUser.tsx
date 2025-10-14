'use client'
import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
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
const AddUser = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle className='mb-4'>Add User</SheetTitle>
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

export default AddUser