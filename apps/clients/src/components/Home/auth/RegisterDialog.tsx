'use client'
import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { InputPassword } from '@/components/uicustom/InputPassword'
import { RegisterFormInputs, registerFormSchema } from '@/types'
import { Resolver, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
const RegisterDialog = () => {
    const form = useForm<RegisterFormInputs>({
        resolver: zodResolver(registerFormSchema) as Resolver<RegisterFormInputs>,
        defaultValues: {
            email: '',
            name: '',
            password: '',
            confirmPassword: ''
        }
    });
    function onSubmit(values: RegisterFormInputs) {
        console.log(values)
    }
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle className='flex justify-center items-center'>
                    Sign Up
                </DialogTitle>
            </DialogHeader>
            <Form {...form} >
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 rounded-md">


                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter the your name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email: </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter the email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password:</FormLabel>
                                    <FormControl>
                                        <InputPassword placeholder="Enter the password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password:</FormLabel>
                                    <FormControl>
                                        <InputPassword placeholder="Enter the confirm password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
                <DialogFooter >

                    <DialogClose asChild>

                        <Button className=' w-full text-md font-semibold' type="submit">Sign up</Button>
                    </DialogClose>

                </DialogFooter>
            </Form>
        </DialogContent>
    )
}

export default RegisterDialog