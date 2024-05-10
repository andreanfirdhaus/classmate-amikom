import React from 'react'
import { Coffee } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="py-8 sm:py-12">
            <div className="flex gap-2 justify-center items-center">
                <p className='text-sm text-foreground'>
                    Crafted by <span><a href="https://github.com/andreanfirdhaus" target="_blank" rel="noopener" className='underline underline-offset-4'>me</a></span> with
                </p>
                <Coffee size={20} />
            </div>
        </footer>
    )
}
