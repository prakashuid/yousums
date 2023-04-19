import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './Nav'
export default function App({ Component, pageProps }: AppProps) {
  return < div className="bg-zinc-300">
      <Navbar/>
      <Component {...pageProps} />
  </div>
}
