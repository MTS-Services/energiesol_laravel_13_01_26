import Frontend from '@/actions/App/Http/Controllers/Frontend'
import Configurator1 from '@/components/sections/configurator/configurator-1'
import Banner from '@/components/sections/configurator/configurator-1'
import FrontendLayout from '@/layouts/frontend-layout'
import React from 'react'

export default function configurator() {
    return (
        <FrontendLayout>
            <div className='flex-1'>
                <Configurator1 />
            </div>
        </FrontendLayout>
    )
}
