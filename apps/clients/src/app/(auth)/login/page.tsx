'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { InputPassword } from '@/components/uicustom/InputPassword'
import { LoginFormInputs, loginFormSchema } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

const LoginPage = () => {
    const form = useForm<LoginFormInputs>({
        resolver: zodResolver(loginFormSchema)
    })
    function onSubmit(values: LoginFormInputs) {
        console.log(values)
    }
    return (
        <div className='max-w-md mx-auto mt-10 '>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 shadow-lg p-5 rounded-md">
                    <div className="flex justify-center items-center">
                        <h1 className='text-2xl font-medium'>Sign in</h1>
                    </div>

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

                    <div className="flex justify-end gap-1 items-center">
                        <p className='text-sm font-medium'>Don't have an account?</p>
                        <Link href={'/register'} className='text-md font-semibold hover:underline'>
                            Sign up
                        </Link>
                    </div>
                </form>
                <Button className='w-full text-md font-semibold' type="submit">Sign in</Button>
            </Form>
        </div>
    )
}

export default LoginPage