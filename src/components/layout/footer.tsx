import React from 'react'
import { Coffee } from 'lucide-react'
import { cn } from '@/lib/utils';

interface FooterProps {
    className?: string;
}

export default function Footer({ className }: FooterProps) {
    return (
        <footer className={cn("py-4 sm:py-6", className)}>
            <div className="flex gap-2 justify-center items-center">
                <p className='text-sm text-foreground'>
                    Crafted by <span><a href="https://github.com/andreanfirdhaus" target="_blank" rel="noopener" className='underline underline-offset-4'>me</a></span> with
                </p>
                <Coffee size={20} />
            </div>
        </footer>
    )
}
