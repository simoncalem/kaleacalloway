import '../styles/index.css'

import { Fragment_Mono, Xanh_Mono } from '@next/font/google'
import localFont from '@next/font/local'
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
const blurry = localFont({ src: './GaussianBlur.ttf' })
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
      {/* <main className={`${xanh.variable}  font-mono`}> */}
      <main className={blurry.className}>
        <Component {...pageProps} />
        <Analytics />{' '}
      </main>
    </>
  )
}

export default MyApp
