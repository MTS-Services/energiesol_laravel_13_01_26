export default function review() {
    return (
        <div>
            <div className="z-10 mx-auto max-w-7xl px-6 py-15 lg:px-0 lg:py-30">
                <div className="mb-3 flex flex-row items-center justify-center gap-3">
                    <span className='after:content[" "] relative inline-block h-5 w-5 rounded-[3px] bg-btn-primary after:absolute after:top-1 after:left-1 after:h-5 after:w-5 after:rounded-[3px] after:bg-info'></span>
                    <p className="mt-1 text-sm font-normal uppercase md:text-base md:text-secondary">
                        Client Stories
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center">
                    <h2 className="font-montserrat text-3xl font-semibold lg:text-[40px]">
                        Our clients love to{' '}
                    </h2>
                    <h2 className="font-montserrat text-3xl font-semibold text-secondary italic lg:text-[40px]">
                        <span className="font-playfair-display font-semibold text-info italic">
                            Recommend
                        </span>{' '}
                        us
                    </h2>
                </div>

                <div className="features grid grid-cols-1 gap-6 pt-6 lg:pt-10">
                    <div className="feature-item relative z-10 flex flex-row rounded-md bg-secondary p-3 pb-12  border border-primary/70">
                        <div className="absolute top-4 left-0 -z-10 h-full w-[101%] bg-secondary rounded-md hidden"></div>

                        <div className="relative z-10 h-auto w-full overflow-hidden rounded-md">
                            <img
                                src="/images/feature1.png"
                                alt="Feature image"
                            />
                        </div>

                        <div className="relative z-10">
                            <h3 className="mb-3 pt-4 font-montserrat text-2xl font-semibold text-primary">
                                Built on Industry Expertise
                            </h3>
                            <p className="font-open-sans text-base text-primary">
                                Leverage the stability and deep knowledge of a
                                global energy leader...
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
