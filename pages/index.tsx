import Head from 'next/head'
import Map from '../components/Map'
import ImageGallery from '../components/ImageGallery'
import Services from '../components/Services'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Salón Mundo Risas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <ImageGallery/>
      <Services/>
      <Map/>
    </div>
  )
}