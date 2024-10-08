import React, { useState, useEffect, useRef } from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Seo from "../components/seo"

const Realizacje = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const images = [
    "/icons/realizacja1.webp",
    "/icons/realizacja2.webp",
    "/icons/realizacja3.webp",
    "/icons/realizacja4.webp",
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
      <Seo title="Ceramika Białystok - Realizacje" description="Zobacz nasze dotychczasowe realizacje i projekty z wykorzystaniem klinkieru i innych materiałów z hurtowni Ceramika w Białymstoku." />
      <Header onMenuToggle={isOpen => setIsMenuOpen(isOpen)} />

      <section className={isMenuOpen ? "blurred" : ""} id="realization">
        <h2 className="headtitlerealization">REALIZACJE</h2>

        <div className="realization-txt">
          <h3>WSPIERAMY MARZENIA O IDEALNYM DOMU</h3>

          <ul>
            Jaki to ten idealny dom? Z perspektywy naszej firmy, specjalizującej
            się w materiałach budowlanych, idealny dom to:
            <li style={{ paddingTop: '15px' }}>
              Dom z duszą, z kompozycjami idealnie dopasowanymi do gustu
              klienta. Dzięki ogromnemu wyborowi materiałów jesteśmy w stanie
              sprostać wielu pomysłom, tworząc wymarzone realizacje.
            </li>
            <li>
              Dom, który przetrwa lata. Specjalizujemy się w klinkierze, surowcu
              odpornym na mrozy i promienie UV. Dzięki temu pęknięcia, problemy
              z izolacją termiczną czy blaknięcie koloru nie będą stanowić
              zagrożenia.
            </li>
          </ul>

          <p style={{ paddingTop: '5px' }}>
            Realizujemy projekty niezależnie od ich skali, wspierając Twoje
            marzenia o idealnym domu.
          </p>
          <p>
            Poniżej przedstawiamy realizację budowli miejskich miasta Białystok.
          </p>
        </div>
      </section>

      <section id="office" className={isMenuOpen ? "blurred" : ""}>
        <div className="office-gallery-container">
          <div className="office-gallery realizationgallery" ref={galleryRef} style={{ maxHeight: '500px' }}>
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

      <section className={isMenuOpen ? "blurred opinions" : "opinions"}>
         <h3>OPINIE</h3>
         <div className="box-with-opinions">
               <img src="/icons/opinia1.webp" />
               <img src="/icons/opinia2.webp" />
               <img src="/icons/opinia3.webp" />
         </div>
         <div className="box-with-opinions">
               <img src="/icons/opinia4.webp" />
               <img src="/icons/opinia5.webp" />
               <img src="/icons/opinia6.webp" />
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

export default Realizacje
