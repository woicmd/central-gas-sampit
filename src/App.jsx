import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Products from './components/Products'
import Order    from './components/Order'
import Partners from './components/Partners'
import Gallery  from './components/Gallery'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Order />
        <Partners />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
