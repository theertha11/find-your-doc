import Context from '../store/Context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <Context>
      <Component {...pageProps} />
    </Context>
  )
}

export default MyApp
