import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import PopupWidgetWhatsapp from "../components/popupWidgetWhatsapp";

import logoMaxi from "../public/faviconMaxi.ico";

const Home = () => {
  return (
    <>
      <Head>
        <title>MaxiCom - Proveedor de Internet por fibra óptica, máxima velocidad</title>
        <meta
          name="description"
          content="MaxiCom es un proveedor de internet por fibra óptica, con la máxima velocidad y estabilidad."
        />
        <link rel="icon" type="image/x-icon" href="/faviconMaxi.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        id="servicios"
        pretitle="Beneficios de MaxiCom"
        title="Nuestros Servicios">
        Si estás buscando una empresa de internet de fibra óptica de alta velocidad en tu área, MaxiCom es la elección perfecta para ti. Descubre nuestros planes de internet de alta velocidad y comienza a disfrutar de una experiencia de internet sin interrupciones hoy mismo.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        id="planes"
        pretitle="planes"
        title="Estos son nuestros planes de servicio">
        Los planes de MaxiCom se adaptan a cualquier tipo de necesidad, navega sin límites a precios increíbles.
      </SectionTitle>
      <Testimonials />
      <SectionTitle
        id="por-que-maxi"
        pretitle="Mira un video"
        title="¿Por qué MaxiCom?">
        En MaxiCom, nuestro objetivo es brindar a nuestros clientes una experiencia de internet de alta calidad y sin preocupaciones. Con planes de servicio accesibles, alta velocidad y una conexión confiable, estamos comprometidos en proporcionar lo mejor a nuestros usuarios
      </SectionTitle>
      <Video />
      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta /> */}
      <Footer />
      {/* <PopupWidget /> */}
      <PopupWidgetWhatsapp />
    </>
  );
}

export default Home;