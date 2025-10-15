'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { InputPassword } from '@/components/uicustom/InputPassword'
import { RegisterFormInputs, registerFormSchema } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { Resolver, useForm } from 'react-hook-form'

const RegisterPage = () => {
    const form = useForm<RegisterFormInputs>({
        resolver: zodResolver(registerFormSchema) as Resolver<RegisterFormInputs>,
    });
    function onSubmit(values: RegisterFormInputs) {
        console.log(values)
    }
    return (
        <div className='max-w-md mx-auto mt-10 '>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 shadow-lg p-5 rounded-md">
                    <div className="flex justify-center items-center">
                        <h1 className='text-2xl font-medium'>Sign up</h1>
                    </div>

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
                    <div className="flex justify-end gap-1 items-center">
                        <p className='text-sm font-medium'>You already have an account?</p>
                        <Link href={'/login'} className='text-md font-semibold hover:underline'>
                            Sign in
                        </Link>
                    </div>
                    <Button className='w-full text-md font-semibold' type="submit">Sign up</Button>
                </form>
            </Form>
        </div>
    )
}

export default RegisterPage