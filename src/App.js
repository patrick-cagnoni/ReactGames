import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import GlobalStyle from './theme/globalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

import { setProducts } from './store/ducks/products'
import data from './services/products-api'

import Minicart from './components/Minicart'
import Header from './components/Header'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    data.then(products => {
      dispatch(setProducts(products))
    })
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Minicart />
        <Header />
        <Products />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
