import React, { useState, useEffect, useRef } from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const Oferta = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const images = [
    "/icons/33.webp",
    "/icons/28.webp",
    "/icons/36.webp",
    "/icons/7.webp",
    "/icons/8.webp",
    "/icons/9.webp",
    "/icons/10.webp",
    "/icons/11.webp",
    "/icons/12.webp",
    "/icons/13.webp",
    "/icons/14.webp",
    "/icons/15.webp",
    "/icons/16.webp",
    "/icons/17.webp",
    "/icons/18.webp",
    "/icons/19.webp",
    "/icons/20.webp",
    "/icons/22.webp",
    "/icons/23.webp",
    "/icons/24.webp",
    "/icons/25.webp",
    "/icons/26.webp",
    "/icons/27.webp",
    "/icons/1-2.jpg",
    "/icons/29.webp",
    "/icons/30.webp",
    "/icons/32.webp",
    "/icons/35.webp",
    "/icons/2-2.jpg",
  ]
  const galleryRef = useRef(null)

  const goLeft = () => {
    setActiveIndex(prevIndex =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    )
  }

  const goRight = () => {
    setActiveIndex(prevIndex =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    )
  }

  const handleImageClick = index => {
    setActiveIndex(index)
    if (index === activeIndex) {
      setIsModalOpen(true) // Otwórz modal, jeśli kliknięto na aktywny obraz
    }
  }

  useEffect(() => {
    // Przesunięcie, aby aktywne zdjęcie było na środku
    const galleryWidth = galleryRef.current.offsetWidth
    const itemWidth = galleryWidth / 3 // Ponieważ chcemy, aby 3 zdjęcia były widoczne
    const scrollTo = itemWidth * activeIndex - itemWidth // Przesuwamy, aby aktywne zdjęcie było na środku
    galleryRef.current.scrollLeft = scrollTo
  }, [activeIndex])

  return (
    <div className="wrapper">
      <Seo
        title="Ceramika Białystok - Oferta"
        description="Odkryj pełną ofertę materiałów budowlanych w hurtowni Ceramika. Klinkier, ceramika i wiele więcej dostępne od ręki w Białymstoku."
      />
      <Header onMenuToggle={isOpen => setIsMenuOpen(isOpen)} />

      <div className={isMenuOpen ? "blurred" : ""} id="offers">
        <h2>{title}</h2>
        <p className="underh2offers">
        {description}
        </p>
        <div className="offers-boxes-row">
          <div className="offers-box">
            <img src="/icons/elewacje.webp" />
            <p>ELEWACJE</p>
            <ul>
              <li>
                <a href="https://klinkiernia.com.pl/pl/5-cegly-klinkierowe">
                  Cegły klinkierowe
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/13-cegly-ksztaltowe">
                  Cegły kształtowe
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/12-cegly-recznie-formowane">
                  Cegły elewacyjne ceramiczne " ręcznie formowane"
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/209-plytki-recznie-formowane">
                  Płytki elewacyjne ceramiczne " ręcznie formowane "
                </a>
              </li>
              <li>
                <a
                  href="https://klinkiernia.com.pl/pl/20-plytki-elewacyjne
"
                >
                  Płytki elewacyjne klinkierowe
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/346-kamienie-elewacyjne">
                  Kamienie elewacyjne{" "}
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/19-plytki-parapetowe">
                  Parapety klinkierowe zewnętrzne 5 producentów
                </a>
              </li>
            </ul>
          </div>

          <div className="offers-box">
            <img src="/icons/10.webp" />
            <p>Dachy i systemy kominowe</p>
            <ul>
              <li>
                <a href="https://klinkiernia.com.pl/pl/572-dachowki-ceramiczne">
                  Dachówki ceramiczne Roben , Wienerberger , Braas ( ceramiczne
                  i betonowe )
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/21-systemy-kominowe">
                  Systemy kominowe PEKABET
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/176-dodatki">
                  Kratki wentylacyjne kominowe
                </a>
              </li>
            </ul>
          </div>

          <div className="offers-box">
            <img src="/icons/schody.webp" />
            <p>Schody</p>
            <ul>
              <li>
                <a href="https://klinkiernia.com.pl/pl/178-klinkier-na-schody-tarasy-i-elewacje">
                  Płyty granitowe
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/179-klinkier-paradyz">
                  Płytki PARADYZ wewnętrzne i zewnętrzne
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/461-cerrad">
                  Płytki CERRAD wewnętrzne i zewnętrzne
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/195-klinkier-gresmanc">
                  Płytki zewnętrzne GRESMANC
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/177-bruki-klinkierowe">
                  Bruk klinkierowy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="offers-boxes-row gapboxes">
          <div className="offers-box">
            <img src="/icons/7.webp" />
            <p>Mała architektura i ogrodzenia</p>
            <ul>
              <li>
                <a href="https://klinkiernia.com.pl/pl/637-ogrodzenia-gladkie-pustaki">
                  Pustaki betonowe gładkie Styrobud{" "}
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/413-lupane-pustaki-ogrodzeniowe">
                  Pustaki betonowe łupane Teknoamerblok
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/18-daszki-na-slupki-ogrodzeniowe">
                  Daszki na słupki i kształtki klinkierowe ZCE Gołowczyński i
                  King Klinker
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/177-bruki-klinkierowe">
                  Bruk klinkierowy 4 producentów
                </a>
              </li>
            </ul>
          </div>

          <div className="offers-box">
            <img src="/icons/glue.webp" />
            <p>Chemia budowlana</p>
            <ul>
              <li>
                <a href="https://klinkiernia.com.pl/pl/248-zaprawy-kleje-spoiny">
                  Zaprawy z trasem do klinkieru MTB , BOLIX
                </a>
              </li>
              <li>
                <a
                  href="https://klinkiernia.com.pl/pl/673-zaprawy-klejowe-do-plytek
"
                >
                  Kleje do płytek elastyczny i wysokoelastyczny MTB
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/601-chemia-budowlana">
                  Impregnaty , plastyfikatory , płyny czyszczące FIBAR ,SIME
                  PLAST
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/672-spoiny-do-plytek-podlogowych">
                  Spoiny do płytek podłogowych
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/671-spoiny-do-plytek-elewacyjnych">
                  Nanospoiny do płytek elewacyjnych{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="offers-box">
            <img src="/icons/materialy.webp" />
            <p>Materiały konstrukcyjne</p>
            <ul>
              <li>
                <a
                  href="https://klinkiernia.com.pl/pl/481-keraterm-pustaki-ceramiczne
"
                >
                  Pustaki ceramiczne Wienerberger i Keraterm
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/487-betonowe-elementy-konstrukcyjne">
                  Pustaki betonowe Teknoamerblok
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/214-wyroby-ogniotrwale">
                  Cegły , płytki i zaprawy szamotowe atestowane OZMO
                </a>
              </li>
              <li>
                <a
                  href="https://klinkiernia.com.pl/pl/491-zamocowania-elewacji
"
                >
                  Systemy mocowań elewacji
                </a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/609-dystanse-listwy-tetki-krzyzaki-kliny">
                  Dystanse , listwy , krzyżaki , tetki , kliny
                </a>
              </li>
              <li>
                <a href="">Cegły palone zwykłe</a>
              </li>
              <li>
                <a href="https://klinkiernia.com.pl/pl/482-elementy-betonowe">
                  Betonowe bloczki fundamentowe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={
          isMenuOpen
            ? "blurred offer-text-top-gallery"
            : "offer-text-top-gallery"
        }
      >
        <p>
          Bardzo dużą część dostępnych u nas materiałów, możesz obejrzeć na żywo
          przy Baranowickiej 144 w Białymstoku.
        </p>
      </div>

      <section id="office" className={isMenuOpen ? "blurred" : ""}>
        <div className="office-gallery-container">
          <div className="office-gallery" ref={galleryRef}>
            {images.map((src, index) => (
              <div
                key={src}
                className={index === activeIndex ? "active" : ""}
                onClick={() => handleImageClick(index)}
              >
                <img src={src} alt={`Obraz ${index + 1}`} />
              </div>
            ))}
            <button className="left-go" onClick={goLeft}>
              {"<"}
            </button>
            <button className="right-go" onClick={goRight}>
              {">"}
            </button>
          </div>
        </div>
      </section>

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
            <a
              href="https://www.facebook.com/profile.php?id=100054375226875&ref=embed_page"
              target="_blank"
            >
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
          <a
            href="https://www.facebook.com/profile.php?id=100054375226875&ref=embed_page"
            target="_blank"
          >
            <img src="/icons/facebookcera.png" /> Facebook
          </a>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img
              src={images[activeIndex]}
              alt={`Powiększenie ${activeIndex + 1}`}
            />
            <button className="modal-close" onClick={closeModal}>
              X
            </button>
            <button className="modal-left" onClick={() => goLeft()}>
              {"<"}
            </button>
            <button className="modal-right" onClick={() => goRight()}>
              {">"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/src/data/oferta/oferta.md/" }) {
      frontmatter {
        title
        description
      }
    }
  }
`

export default Oferta
