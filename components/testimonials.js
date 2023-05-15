import Image from "next/image";
import React from "react";
import Container from "./container";

import plan1 from "../public/img/plan.svg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
        </div>

        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <h1 className="text-center text-3xl font-bold pb-5 flex justify-between">
              <span>Plan básico</span>
              <Avatar image={plan1} />
            </h1>
            <p className="text-md leading-normal text-justify">
              Este es el plan más económico, tiene el precio de <Mark>$18 al mes</Mark>. Ofrece una velocidad de descarga de hasta 10 Mbps y una velocidad de carga de hasta 2 Mbps. Es ideal para usuarios que solo necesitan internet para tareas básicas como navegar en redes sociales y correo electrónico.
            </p>
            <button onClick={() => {
              Swal.fire({
                title: 'Hemos abierto WhatsApp',
                text: 'Envíanos un mensaje para contratar este plan',
                icon: 'success',
                confirmButtonText: 'Ok'
              });
              let mensajeURLWhatsApp = `Hola, me gustaría contratar el plan básico de $18 al mes`;
              window.open(`https://wa.me/593962636441/?text=${mensajeURLWhatsApp}`, "_blank");
            }} className="bg-orange-500 rounded-lg p-2 mt-8 hover:bg-orange-600 transition-all ease-in-out">Contrátalo</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 overflow-hidden w-14 h-14">
        <Image
          src={props.image}
          width="80"
          height="80"
          alt="Avatar"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;