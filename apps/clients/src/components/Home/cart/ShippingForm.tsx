import { ShippingFormInputs, shippingFormSchema } from '@/types'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const ShippingForm = ({ setShippingForm }: { setShippingForm: (data: ShippingFormInputs) => void }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<ShippingFormInputs>({
        resolver: zodResolver(shippingFormSchema)
    })
    const router = useRouter()
    const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
        setShippingForm(data)
        router.push("/cart?step=3", { scroll: false })
    }
    return (

        <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleShippingForm)}>
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className='text-sx text-gray-500 font-medium'>Name</label>
                <input className='border-b border-gray-200 py-2 outline-none text-sm rounded-lg' type="text" id='name' placeholder='John Doe'{...register("name")} />
                {
                    errors.name && (
                        <p className='text-xs text-red-500'>{errors.name.message}</p>
                    )
                }
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className='text-sx text-gray-500 font-medium'>Email</label>
                <input className='border-b border-gray-200 py-2 outline-none text-sm rounded-lg' type="email" id='email' placeholder='text@gmail.com'{...register("email")} />
                {
                    errors.email && (
                        <p className='text-xs text-red-500'>{errors.email.message}</p>
                    )
                }
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="phone" className='text-sx text-gray-500 font-medium'>Phone</label>
                <input className='border-b border-gray-200 py-2 outline-none text-sm rounded-lg' type="text" id='phone' placeholder='213980123'{...register("phone")} />
                {
                    errors.phone && (
                        <p className='text-xs text-red-500'>{errors.phone.message}</p>
                    )
                }
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="address" className='text-sx text-gray-500 font-medium'>Adress</label>
                <input className='border-b border-gray-200 py-2 outline-none text-sm rounded-lg' type="text" id='address' placeholder='jdoawid'{...register("address")} />
                {
                    errors.address && (
                        <p className='text-xs text-red-500'>{errors.address.message}</p>
                    )
                }
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="city" className='text-sx text-gray-500 font-medium'>City</label>
                <input className='border-b border-gray-200 py-2 outline-none text-sm rounded-lg' type="text" id='city' placeholder='idadjoiaw'{...register("city")} />
                {
                    errors.city && (
                        <p className='text-xs text-red-500'>{errors.city.message}</p>
                    )
                }
            </div>
            < Button type='submit'
                className='cursor-pointer'>
                Continue
                <ArrowRight className='w-4 h-4' />
            </Button>        </form>
    )
}

export default ShippingForm