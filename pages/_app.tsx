import '../styles/index.css'

// pages/_app.js
import { Xanh_Mono } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'
const xanh = Xanh_Mono({ weight: ['400'] })
function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={xanh.className}>
        <Component {...pageProps} />
        <Analytics />{' '}
      </main>
    </>
  )
}

export default MyApp
