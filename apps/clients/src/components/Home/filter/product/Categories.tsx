"use client"
import {
    Footprints,
    Glasses,
    Briefcase,
    Shirt,
    ShoppingBasket,
    Hand,
    Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from 'react'

const categories = [
    {
        name: "All",
        icon: <ShoppingBasket className="w-4 h-4" />,
        slug: "all",
    },
    {
        name: "T-shirts",
        icon: <Shirt className="w-4 h-4" />,
        slug: "t-shirts",
    },
    {
        name: "Shoes",
        icon: <Footprints className="w-4 h-4" />,
        slug: "shoes",
    },
    {
        name: "Accessories",
        icon: <Glasses className="w-4 h-4" />,
        slug: "accessories",
    },
    {
        name: "Bags",
        icon: <Briefcase className="w-4 h-4" />,
        slug: "bags",
    },
    {
        name: "Dresses",
        icon: <Venus className="w-4 h-4" />,
        slug: "dresses",
    },
    {
        name: "Jackets",
        icon: <Shirt className="w-4 h-4" />,
        slug: "jackets",
    },
    {
        name: "Gloves",
        icon: <Hand className="w-4 h-4" />,
        slug: "gloves",
    },
];
const Categories = () => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const selectedCategory = searchParams.get("category")
    const handleChange = (value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set("category", value || "all")
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
    }
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm ">
            {
                categories.map(categorie => (
                    <div className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md 
                    ${categorie.slug === selectedCategory ? "bg-white" : "text-gray-500"}`} key={categorie.name}
                        onClick={() => handleChange(categorie.slug)}
                    >
                        {
                            categorie.icon
                        }
                        {
                            categorie.name
                        }
                    </div>
                ))
            }
        </div >
    )
}

export default Categories