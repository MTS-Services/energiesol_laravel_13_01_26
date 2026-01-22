import { ContactForm } from '@/components/cards/contact-form';

function Contact() {
    return (
        <div className="relative isolate z-10  bg-linear-to-r from-btn-primary/15 to-info/5">
            <div
                className="absolute  -z-10  top-0 right-0 bg-cover bg-center bg-no-repeat w-1/2 h-full opacity-70"
                style={{
                    backgroundImage: "url('/images/frame_dot.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                }}
            ></div>
            
            <div className="z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-10 lg:px-0 lg:py-20">
                <div className="mb-3 flex flex-row items-center justify-center gap-3">
                    <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                    <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                        FULL-SERVICE APPROACH
                    </p>
                </div>
                <div className="mb-5 flex flex-col items-start justify-start lg:mb-10 lg:items-center lg:justify-center">
                    <h2 className="mb-2 text-center font-montserrat text-3xl font-semibold lg:text-[40px]">
                        End-to-End Solar Expertise
                    </h2>
                    <p className="text-center text-base text-secondary lg:px-78 lg:text-lg">
                        As your full-service solar partner, we support you at
                        every step — from initial consultation to final
                        commissioning and grid connection. Our digital process
                        ensures clarity, comfort, and full transparency.
                    </p>
                </div>

                <ContactForm />
            </div>
        </div>
    );
}

export { Contact };
