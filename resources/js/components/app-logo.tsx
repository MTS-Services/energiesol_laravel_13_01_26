
import { cn } from '@/lib/utils';

export default function AppLogo({className  }: {className?: string}) {
    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
       <p className={cn('font-montserrat font-semibold text-lg lg:text-[28px] text-secondary',className)}> <span className='text-info'>E</span>nergie <span className='text-info'>S</span>olution <span className='text-info'>N</span>ord</p>
        </div>
    );
}