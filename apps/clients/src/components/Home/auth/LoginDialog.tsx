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
import { authService } from '@repo/shared-api';
import { toast } from 'sonner'
const LoginDialog = () => {
    const form = useForm<LoginFormInputs>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })
    async function onSubmit(values: LoginFormInputs) {
        try {
            const res = await authService.login(values)
            console.log('✅ Response:', res.data)
            console.log('✅ Response headers:', res.headers) // Xem Set-Cookie
            // Kiểm tra cookie
            console.log('🍪 Cookies:', document.cookie)
            console.log('check', res.data.message)
            if (res.status === 200) {
                toast.success(res.data.message)
            }
            console.log('Response:', res)
        } catch (e) {
            console.log('lỗi:', e)
        }
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
                    <Button className=' w-full text-md font-semibold' type="submit">Sign in</Button>

                </form>

            </Form>
        </DialogContent>
    )
}

export default LoginDialog