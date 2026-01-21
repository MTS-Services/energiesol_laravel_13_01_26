import { ConfiguratorCard } from '@/components/cards/configurator-card';


export default function StartConfigurator() {
    const item = {
        changeOrder: false,
    }
    return (
        <div className='pb-15 lg:pb-30'>
            <div className="relative bg-linear-to-r from-btn-primary/15 to-info/5 ">
            <div className='absolute right-0 top-0w-full inset-0'
                style={{
                    backgroundImage: "url('/images/frame_dot.png')",
                   
                    backgroundSize: 'contain',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
           
            <div className="relative z-10 mx-auto max-w-7xl px-6  lg:px-0 flex flex-row gap-5">
                 <ConfiguratorCard item={item} />
            </div>
        </div>
        </div>
    );
}
