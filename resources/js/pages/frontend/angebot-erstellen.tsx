import FrontendLayout from '@/layouts/frontend-layout';
import { useEffect } from 'react';

export default function AngebotErstellen() {
    useEffect(() => {
        const iframe = document.getElementById('ifrGuest-energyhouse-1') as HTMLIFrameElement;
        const container = document.querySelector('[data-iframe-container]') as HTMLElement;
        
        if (iframe) {
            const updateIframeSize = () => {
                if (window.innerWidth >= 768) {
                    console.log('Desktop mode - setting width to 1088px, height to 1088px');
                    iframe.style.width = '1088px';
                    iframe.style.height = '800px';
                    if (container) {
                        container.style.padding = '32px';
                    }
                } else {
                    console.log('Mobile mode - setting width to 100%, height to 600px, no padding');
                    iframe.style.width = '100%';
                    iframe.style.height = '1088px';
                    if (container) {
                        container.style.padding = '0px';
                    }
                }
            };

            updateIframeSize();
            window.addEventListener('resize', updateIframeSize);

            return () => {
                window.removeEventListener('resize', updateIframeSize);
            };
        }
    }, []);

    return (
        <FrontendLayout>
            <div className="relative z-10 mx-auto max-w-7xl px-6 pb-8 lg:gap-x-10 lg:px-8 lg:py-42 lg:pb-20">
                <div style={{ margin: '0 auto', padding: '24px' }}>
                    <div data-iframe-container style={{ borderRadius: '24px', backgroundColor: 'white', padding: '32px' }}>
                        <h1 style={{ marginBottom: '32px', textAlign: 'center', fontFamily: 'Playfair Display, serif', fontSize: '30px', fontWeight: 600, color: '#1f2937' }}>
                            Angebot erstellen
                        </h1>

                        <div style={{ width: '100%', overflow: 'hidden' }}>
                            <iframe
                                style={{
                                    width: '100%',
                                    height: '600px',
                                    border: '0px',
                                    backgroundColor: 'transparent'
                                }}
                                title="Reonic Element energyhouse 1"
                                id="ifrGuest-energyhouse-1"
                                allow="geolocation"
                                scrolling="yes"
                                src="https://portal.reonic.de/public/6d388a92-de80-4953-b75c-a88ba43a0c86/energyhouse?frontendId=d31a71cf-bd3c-4e47-8067-d8c8bb8c1e94&sourceUrl=https%3A%2F%2Fsolar-barsbuettel.de%2F&direct=energyhouse"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
