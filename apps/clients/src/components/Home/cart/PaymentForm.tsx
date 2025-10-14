import { Button } from '@/components/ui/button'
import { PaymentFormInputs, paymentFormSchema } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

const PaymentForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormInputs>({
        resolver: zodResolver(paymentFormSchema)
    })
    const router = useRouter()
    const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {
    }
    return (

        <form className='flex flex-col gap-4' onSubmit={handleSubmit(handlePaymentForm)}>
            <div className="flex flex-col gap-1">
                <label htmlFor="cardHolder" className='text-sx text-gray-500 font-medium'>Name on card</label>
                <input className='border-b border-gray-200 py-2 outline-none text-sm rounded-lg' type="text" id='cardHolder' placeholder='John Doe'{...register("cardHolder")} />
                {
                    errors.cardHolder && (
                        <p className='text-xs text-red-500'>{errors.cardHolder.message}</p>
                    )
                }
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="cardNumber" className='text-sx text-gray-500 font-medium'>Number on card</label>
                <input className='border-b border-gray-200 py-2 outline-none text-sm rounded-lg' type="text" id='cardHolder' placeholder='242424 242424 242424'{...register("cardHolder")} />
                {
                    errors.cardNumber && (
                        <p className='text-xs text-red-500'>{errors.cardNumber.message}</p>
                    )
                }
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="expirationDate" className='text-sx text-gray-500 font-medium'>expiration Date</label>
                <input className='border-b border-gray-200 py-2 outline-none text-sm rounded-lg' type="text" id='expirationDate' placeholder='01/32'{...register("expirationDate")} />
                {
                    errors.expirationDate && (
                        <p className='text-xs text-red-500'>{errors.expirationDate.message}</p>
                    )
                }
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="cvv" className='text-sx text-gray-500 font-medium'>CVV</label>
                <input className='border-b border-gray-200 py-2 outline-none text-sm rounded-lg' type="text" id='cvv' placeholder='123'{...register("cvv")} />
                {
                    errors.cvv && (
                        <p className='text-xs text-red-500'>{errors.cvv.message}</p>
                    )
                }
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Image src={"/klarna.png"} alt='klarna' width={50} height={25} className='rounded-md' />
                <Image src={"/cards.png"} alt='cards' width={50} height={25} className='rounded-md' />
                <Image src={"/stripe.png"} alt='stripe' width={50} height={25} className='rounded-md' />
            </div>
            < Button type='submit'
                className='cursor-pointer'>
                Checkout
                <ShoppingCart className='w-4 h-4' />
            </Button>        </form>
    )
}

export default PaymentForm