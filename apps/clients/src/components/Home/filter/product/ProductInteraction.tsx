'use client'
import { Button } from '@/components/ui/button';
import useCartStore from '@/stores/cartStores';
import { ProductType } from '@/types'
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'sonner';

const ProductInteraction = ({ product,
    selectedColor,
    selectedSize }:
    {
        product: ProductType;
        selectedColor: string,
        selectedSize: string
    }) => {
    const router = useRouter()
    const pathanme = usePathname()
    const searchParams = useSearchParams()
    const [quantity, setQuanity] = useState(1)
    const { addToCart } = useCartStore()
    const handleTypeChagne = (type: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(type, value)
        router.push(`${pathanme}?${params.toString()}`, { scroll: false })
    }
    const handleQuatityChane = (type: "indecrement" | "decrement") => {
        if (type === "indecrement") {
            setQuanity(prev => prev + 1)
        } else {
            if (quantity > 1) {
                setQuanity(prev => prev - 1)
            }
        }
    }
    const handleAddToCart = () => {
        addToCart({
            ...product,
            selectedColor,
            selectedSize,
            quantity
        })
        toast.success('Product added to cart')
    }
    return (
        <div className='flex flex-col gap-4 mt-4'>
            {/* SIZE */}
            <div className="flex flex-col text-xs gap-2">
                <span className='text-gray-500'>Size</span>
                <div className="flex items-center gap-2 p">
                    {
                        product.sizes.map(size => (
                            <div className={`cursor-pointer border-1 p-[2px] ${selectedSize === size ?
                                "border-gray-600" : "border-gray-300"}`} key={size} onClick={() => handleTypeChagne("size", size)}>
                                <div className={`w-6 h-6 text-center flex items-center justify-center ${selectedSize === size ?
                                    "bg-black text-white" : 'bg-white text-black'}`}>{size.toUpperCase()}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* COLOR */}
            <div className="flex flex-col text-sm gap-2">
                <span className='text-gray-500'>Color</span>
                <div className="flex items-center gap-2 p">
                    {
                        product.colors.map(color => (
                            <div className={`cursor-pointer border-1 p-[2px] ${selectedColor === color ?
                                "border-gray-300" : "border-white"}`} key={color} onClick={() => handleTypeChagne("color", color)}>
                                <div className='w-6 h-6' style={{ backgroundColor: color }} />
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* QUANTITY */}
            <div className="flex flex-col text-sm gap-2">
                <span className='text-gray-500'>Quantity</span>
                <div className="flex items-center gap-2">
                    <button className='cursor-pointer border-1 border-gray-300 p-1' onClick={() => handleQuatityChane("decrement")}>
                        <Minus className='w-4 h-4' />
                    </button>
                    <span>{quantity}</span>
                    <button className='cursor-pointer border-1 border-gray-300 p-1' onClick={() => handleQuatityChane("indecrement")}>
                        <Plus className='w-4 h-4' />
                    </button>
                </div>
            </div>
            {/* BUTTONS */}
            <Button className='cursor-pointer shadow-lg text-sm font-medium' onClick={() => handleAddToCart()}>
                <Plus className='w-4 h-4' />
                Add to Cart
            </Button>
            <Button className='bg-white shadow-lg text-black ring-1 ring-gray-400 hover:bg-gray-50 text-sm font-medium' >
                <ShoppingCart className='w-4 h-4' />
                Buy this Item
            </Button>
        </div>
    )
}

export default ProductInteraction