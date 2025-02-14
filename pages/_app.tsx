import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useMediaQuery } from 'react-responsive'

export default function App({ Component, pageProps }: AppProps) {

  const isMobile = useMediaQuery({query: '(max-width: 1000px)'})

  return (
    <>
    <Header isMobile={isMobile}/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}
