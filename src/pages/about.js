import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <div>
      <h1>About page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quae
        consequuntur rem quis inventore odio at earum, minima quidem amet? Eius
        voluptatem vero qui libero accusantium perspiciatis veniam maiores
        commodi.
      </p>
      <Link to="/contact">Contact me</Link>
      <Footer />
    </div>
  )
}

export default AboutPage
