import ProductList from '@/components/Home/filter/product/ProductList'
import React from 'react'

const ProductsPage = async ({ searchParams }: { searchParams: { category: string } }) => {
    const category = await searchParams.category
    return (
        <div className=''>
            <ProductList category={category} params="products" />
        </div>
    )
}

export default ProductsPage