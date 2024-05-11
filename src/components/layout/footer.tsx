import React from 'react'
import { Coffee } from 'lucide-react'
import { cn } from '@/lib/utils';

interface FooterProps {
    className?: string;
}

export default function Footer({ className }: FooterProps) {
    return (
        <footer className={cn("", className)}>
            <div className="flex justify-center items-center gap-2">
                <p className='text-sm text-foreground'>
                    Crafted by <span><a href="https://github.com/andreanfirdhaus" target="_blank" rel="noopener" className='underline underline-offset-4'>me</a></span> with
                </p>
                <Coffee size={20} />
            </div>
        </footer>
    )
}
