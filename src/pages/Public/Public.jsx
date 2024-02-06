import PublicNavbar from "../../components/public/Navbar"
import Hero from "../../components/public/Hero"
import Goals from "../../components/public/GoalsSection"
import Footer from "../../components/public/PublicPageFooter"

const Public = () => {
  return (
    <div>
      <PublicNavbar />
      <Hero />
      <Goals />
      <Footer />
    </div>
  )
}

export default Public