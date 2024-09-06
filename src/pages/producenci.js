import React, { useState, useEffect, useRef } from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Seo from "../components/seo"

const Producenci = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="wrapper">
      <Header onMenuToggle={isOpen => setIsMenuOpen(isOpen)} />
      <Seo title="Ceramika Białystok - Producenci" description="Przeglądaj produkty od czołowych producentów klinkieru i innych materiałów budowlanych, które oferujemy w hurtowni Ceramika w Białymstoku." />
      
      <h2 className={isMenuOpen ? "blurred headtitleprod" : "headtitleprod"}>PRODUCENCI</h2>
      <div className={`${isMenuOpen ? "blurred producents-mobile" : "producents-mobile"}`}>
         <img src="/icons/prod-mob1.png" />
         <img src="/icons/prod-mob2.png" />
      </div>

      {/* <div className="producents-desktop">
         <img src="/icons/prod-mob1.png" />
      </div> */}

      <section className={`${isMenuOpen ? "blurred" : ""}`} id="footer">
        <div className="logo-footer">
          <img src="/icons/CERAMIKAlogo.png" />
        </div>
        <div className="medium-flex">
          <div className="partners">
            <Link to="/producenci">Producenci</Link>
            <Link to="/partnerzy">Partnerzy</Link>
          </div>
          <div className="contact-footer">
            <a>Viber: +48857474947</a>
            <a href="https://www.facebook.com/profile.php?id=100054375226875&ref=embed_page" target="_blank">
              <img src="/icons/facebookcera.png" /> Facebook
            </a>
          </div>
        </div>
        <div className="partnersd">
            <Link to="/producenci">Producenci</Link>
            <Link to="/partnerzy">Partnerzy</Link>
          </div>
          <div className="contact-footerd">
            <a>Viber: +48857474947</a>
            <a href="https://www.facebook.com/profile.php?id=100054375226875&ref=embed_page" target="_blank">
              <img src="/icons/facebookcera.png" /> Facebook
            </a>
          </div>
      </section>
    </div>
  )
}

export default Producenci