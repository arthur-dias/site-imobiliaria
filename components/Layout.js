import Header from './Header'
import Newsletter from './Newsletter'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Layout
