import {
  WrenchScrewdriverIcon,
  CalendarDaysIcon,
  BanknotesIcon,
  WifiIcon,
  UserGroupIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/beneficios.svg";
import benefitTwoImg from "../public/img/beneficios2.svg";

const benefitOne = {
  title: "¡Los mejores beneficios!",
  desc: "Nos enorgullece ofrecer una tecnología de última generación y una atención al cliente excepcional, lo que nos permite brindar una experiencia de internet sin interrupciones para nuestros usuarios.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Instalación gratuita",
      desc: "Al contratar los servicios de MaxiCom, los usuarios no tendrán que preocuparse por el costo de la instalación, ya que esta es completamente gratuita.",
      icon: <WrenchScrewdriverIcon />,
    },
    {
      title: "Primer mes gratuito",
      desc: "MaxiCom ofrece a los nuevos clientes el primer mes de servicio completamente gratis así probarán la calidad y velocidad de internet antes de comprometerse con un plan a largo plazo.",
      icon: <CalendarDaysIcon />,
    },
    {
      title: "Planes económicos",
      desc: "MaxiCom ofrece una variedad de planes asequibles que se adaptan a las necesidades y presupuestos de sus clientes, planes familiares desde $18.",
      icon: <BanknotesIcon />,
    },
  ],
};

const benefitTwo = {
  title: "¡Nuestro servicio es excepcional!",
  desc: "En MaxiComp, nos dedicamos a brindar soluciones de internet confiables y de alta calidad para satisfacer las necesidades de nuestros clientes.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Internet de Alta Velocidad",
      desc: "MaxiCom ofrece internet de fibra óptica de alta velocidad, lo que significa que los usuarios pueden disfrutar de una navegación rápida y fluida sin demoras ni interrupciones.",
      icon: <WifiIcon />,
    },
    {
      title: "Excelente servicio al cliente",
      desc: "MaxiCom se enorgullece de ofrecer un servicio al cliente excepcional, con personal capacitado y amable que está disponible para ayudar a los clientes con cualquier problema o pregunta que puedan tener.",
      icon: <UserGroupIcon />,
    },
    {
      title: "Estabilidad de la conexión",
      desc: "Con MaxiCom no te preocuparás por inestabilidad en tu conexión. Esto significa que los usuarios pueden disfrutar de una conexión confiable y constante, incluso en momentos de alta demanda",
      icon: <GlobeAltIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };
