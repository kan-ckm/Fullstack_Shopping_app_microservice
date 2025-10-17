import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import { Toaster } from 'sonner'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mx-auto p-4 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
            <Navbar />
            {children}
            <Toaster />
            <Footer />
        </div>
    )
}

export default layout