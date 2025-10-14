"use client"
import { ProductType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import useCartStore from '@/stores/cartStores'
import { toast } from 'sonner'
const ProductCard = ({ product }: { product: ProductType }) => {
    const [productType, setProductType] = useState({
        size: product.sizes[0],
        color: product.colors[0]
    })
    const { addToCart } = useCartStore()
    const handleProductType = ({ type, value }: { type: "size" | "color"; value: string }) => {
        setProductType(prev => ({ ...prev, [type]: value }));
    }

    // const handleProductType = ({ type, value }: { type: "size" | "color"; value: string }) => {
    //     // logic ở đây
    //     console.log(type, value);
    // };
    const handleAddToCart = () => {
        addToCart({
            ...product,
            quantity: 1,
            selectedSize: productType.size,
            selectedColor: productType.color,

        })
        toast.success('Product added to cart')
    }

    return (
        <div className='shadow-xl rounded-lg overflow-hidden'>
            {/* img */}
            <Link href={`products/${product.id}`}>
                <div className='relative aspect-[2/3]'>
                    <Image src={product.images?.[productType.color] || ''} alt='product' fill className='object-cover hover:scale-110 transition-all duration-300' />
                </div>
            </Link>
            {/* PRODUCT DETAIL */}
            <div className='flex flex-col gap-4 p-4'>
                <h1 className='font-medium'>{product.name}</h1>
                <p className='text-sm text-gray-500'>{product.description}</p>
                {/* PRODUCT TYPE */}
                <div className='flex items-center gap-4 text-xs'>
                    {/* SIZE */}
                    <div className='flex flex-col gap-1'>
                        <span className='text-sm text-gray-500'>Size</span>
                        {/* <select name="size" id="size" className='ring ring-gray-300 rounded-md px-2 py-1'>
                            {product.sizes.map(size => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select> */}

                        <Select value={productType.size}
                            onValueChange={(value) => handleProductType({ type: "size", value })} >
                            <SelectTrigger className='py-1 px-4'>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent side='bottom'>
                                {
                                    product.sizes.map(size => (
                                        <SelectItem key={size} value={size}>{size.toUpperCase()}</SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </div>
                    {/* COLORS */}
                    <div className='flex flex-col gap-1'>
                        <span className='text-gray-500'>Color</span>
                        <div className='flex items-center gap-2'>
                            {
                                product.colors.map(color => (
                                    <div key={color} className={`cursor-pointer border-1 ${productType.color === color ? "border-gray-400" : "border-gray-200"} rounded-full p-[1.2px]`} onClick={() => handleProductType({ type: "color", value: color })}>
                                        <div className='w-[14px] h-[14px] rounded-full' style={{ backgroundColor: color }} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* PRICE AND ADD TO CARD BUTTON */}
                <div className='flex items-center justify-between'>
                    <p className='font-medium'>{product.price.toFixed(2)}</p>
                    <Button onClick={handleAddToCart} className='shadow-lg cursor-pointer gap-2 text-black bg-white hover:bg-black hover:text-white transition-all duration-300 flex items-center '>
                        <ShoppingCart className='w-4 h-4 align-middle' />  Add to card
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard