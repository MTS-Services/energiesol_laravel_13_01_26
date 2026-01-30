import { Link } from '@inertiajs/react'
import React from 'react'
import { Button } from './button'
import { Icon } from '../icon'
import { LucideIcon, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
interface Props {
    href?: string 
    IconNode?: LucideIcon
    className?: string
    children?: React.ReactNode

}
function ActionButton({ href, IconNode = Plus, className, children  }: Props) {
  return (
  <>
            <Link href={href || '#'}>
              <Button className={cn('px-4 py-2 h-auto bg-black hover:bg-black/80', className)}>
                <Icon iconNode={IconNode} variant='default' />
                {children || 'Create'}
               
              </Button>
            </Link>
  </>
  )
}

export { ActionButton }

