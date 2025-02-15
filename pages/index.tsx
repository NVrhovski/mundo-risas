import Head from 'next/head'
import Map from '../components/Map'
import ImageGallery from '../components/ImageGallery'
import Services from '../components/Services'
import Contact from '../components/Contact'
import { useMediaQuery } from 'react-responsive'
import HelpBadge from '../components/HelpBadge'
import { useEffect, useState } from 'react'
import Hero from '../components/Hero'

export default function Home() {

  const isMobile = useMediaQuery({query: '(max-width: 1000px)'})
  const [showBadge, setShowBadge] = useState(false);
  const LDJSON = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Salón Mundo Risas",
    "image": "https://mundorisas.com/favicon.ico",
    "@id": "",
    "url": "https://mundorisas.com",
    "telephone": "+54 11 6433-8628",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pueyrredon 2139",
      "addressLocality": "Villa Ballester",
      "postalCode": "B1653",
      "addressCountry": "AR"
    }  
  };

  useEffect(() => {
    setTimeout(() => {
      setShowBadge(true)
    },5000)
  },[])

  return (
    <div>
      <Head>
        <title>Salón Mundo Risas | Villa Ballester</title>
        <meta name="description" content="El salón de fiestas perfecto para vos" />
        <meta name="robots" content="all"/>
        <meta name="author" content="Salón Mundo Risas"/>
        <meta name="publisher" content="Eventos Mundo Risas, Villa Ballester"/>
        <meta name="theme-color" content="#FECE1A" />
        <link rel="apple-touch-icon" href="/favicon.ico"></link>
        <link rel="apple-touch-icon-precomposed" href="/favicon.ico"></link>
        <link href='https://mundorisas.com/' rel='canonical'/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;500;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
        <meta property="og:title" content="Salón Mundo Risas | Villa Ballester" />
        <meta property="og:description" content="El salón de fiestas perfecto para vos" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mundorisas.com/" />
        <meta property="og:image" content="https://mundorisas.com/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LDJSON) }}
        />
      </Head>
      <Hero/>
      <Services isMobile={isMobile}/>
      <ImageGallery isMobile={isMobile}/>
      <Contact/>
      <Map/>
      {isMobile ? '' : 
          showBadge ? 
          <HelpBadge setShowBadge={setShowBadge}/>
          : ''
      }
    </div>
  )
}