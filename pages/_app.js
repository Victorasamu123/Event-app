import { Footer } from '../components/footer/footer'
import { Header } from '../components/header/header'
import MainLayout from '../components/layout/main-layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <>
    <MainLayout>
    <Component {...pageProps} />
    </MainLayout>
    </>
    )
}
