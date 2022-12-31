import '../styles/index.css'

import { Xanh_Mono } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'
const xanh = Xanh_Mono({
  weight: ['400'],
  variable: '--font-xanh',
  subsets: ['latin'],
})
function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={`${xanh.variable} font-mono`}>
        <Component {...pageProps} />
        <Analytics />{' '}
      </main>
    </>
  )
}

export default MyApp
