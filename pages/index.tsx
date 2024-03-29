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

  useEffect(() => {
    setTimeout(() => {
      setShowBadge(true)
    },5000)
  },[])

  return (
    <div>
      <Head>
        <title>Salón Mundo Risas</title>
        <meta name="description" content="El salón de fiestas perfecto para vos" />
        <meta name="robots" content="all"/>
        <meta name="author" content="Salón Mundo Risas"/>
        <meta name="publisher" content="Eventos Mundo Risas, Villa Ballester"/>
        <meta name="theme-color" content="#FECE1A" />
        <link rel="apple-touch-icon" href="/favicon.ico"></link>
        <link rel="apple-touch-icon-precomposed" href="/favicon.ico"></link>
        <link href='localhost:3000' rel='canonical'/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;500;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
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