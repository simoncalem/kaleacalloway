import '../styles/index.css'

import { Fragment_Mono, Xanh_Mono } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'
const xanh = Xanh_Mono({
  weight: ['400'],
  variable: '--font-xanh',
  subsets: ['latin'],
})
const fragment = Fragment_Mono({
  weight: ['400'],
  variable: '--font-fragment',
  subsets: ['cyrillic-ext', 'latin', 'latin-ext'],
})
function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-fragment: ${fragment.style.fontFamily};
          }
        `}
      </style>
      <main className={`${xanh.variable}  font-mono`}>
        <Component {...pageProps} />
        <Analytics />{' '}
      </main>
    </>
  )
}

export default MyApp
