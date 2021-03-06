import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';

const ParallaxImage = (props) => {
    return (
        <ParallaxProvider>
            <ParallaxBanner
                className="your-class"
                layers={[
                    {
                        image: props.src,
                        amount: 0.3,
                        expanded: true
                    },

                ]}
                style={{
                    height: '50vh',
                    minHeight: '430px'
                }}
            >
                <div className="container">
                    <h1 className="title parallax__title">Wykonujemy pod klucz<br />
                        elektrownie słoneczne</h1>
                </div>
            </ParallaxBanner>
        </ParallaxProvider>
    );
}



export default ParallaxImage;