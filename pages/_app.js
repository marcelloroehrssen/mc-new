// import "../css/customcss.css";
import React from "react";
import Head from "next/head";
import '../src/components/NetflixSlider/Content.scss';
import '../src/components/NetflixSlider/Item.scss'
import '../src/components/NetflixSlider/Mark.scss'
import '../src/components/NetflixSlider/ShowDetailsButton.scss'
import '../src/components/NetflixSlider/SlideButton.scss'
import '../src/components/NetflixSlider/Slider.scss'
import '../src/components/NetflixSlider/SliderWrapper.scss'

export default function MyApp({Component, pageProps}) {
    return (<>
        <Head>
            <title>Speriamo bene stavolta...</title>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossOrigin="anonymous"
            />
        </Head>
        <Component {...pageProps} />
    </>)
}