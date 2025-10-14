'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
const datafilter = [
    {
        value: "newest",
        item: "Newest"
    },
    {
        value: "oldest",
        item: "Oldest"
    },
    {
        value: "asc",
        item: "Price: Low to High"
    },
    {
        value: "desc",
        item: "Price: High to Low"
    }
]
const FiterProduct = () => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const handleFilter = (value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set("sort", value)
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
    }
    const sort = searchParams.get("sort") || undefined
    return (
        <div className='flex justify-end gap-2 text-sm my-6'>
            <Select name='sort' value={sort} onValueChange={(e) => handleFilter(e)}>
                <SelectTrigger className=''>
                    <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent >
                    {
                        datafilter.map(items => (
                            <SelectItem key={items.value} value={items.value}>{items.item}</SelectItem>
                        ))
                    }
                </SelectContent>

            </Select>
        </div>
    )
}

export default FiterProduct