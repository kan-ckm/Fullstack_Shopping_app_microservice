'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { InputPassword } from '@/components/uicustom/InputPassword'
import { LoginFormInputs, loginFormSchema } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import RegisterDialog from './RegisterDialog'

const LoginDialog = () => {
    const form = useForm<LoginFormInputs>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })
    function onSubmit(values: LoginFormInputs) {
        console.log(values)
    }
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle className='flex justify-center items-center'>
                    Sign In
                </DialogTitle>
            </DialogHeader>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 rounded-md">
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

                </form>
                <DialogFooter >
                    <DialogClose asChild>
                        <Button className=' w-full text-md font-semibold' type="submit">Sign in</Button>
                    </DialogClose>
                </DialogFooter>
            </Form>
        </DialogContent>
    )
}

export default LoginDialog