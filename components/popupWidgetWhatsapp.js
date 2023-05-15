import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Disclosure, Transition } from "@headlessui/react";

import wspSvg from "../public/whatsapp.svg";

const PopupWidget = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");

  const [nombre, setNombre] = useState("")
  const [mensaje, setMensaje] = useState("")

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const onSubmit = async (data, e) => {
    //llevar a una url en otra pestaña
    let mensajeURLWhatsApp = `Hola,%20mi%20nombre%20es%20${nombre}%20y%20este%20mensaje%20envié%20desde%20la%20página%20web%20de%20MaxiCom:%20${mensaje}`;
    window.open(`https://wa.me/593962636441/?text=${mensajeURLWhatsApp}`, "_blank");
  };

  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="fixed z-40 flex items-center justify-center transition duration-300 bg-[#128C7E] rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none hover:bg-[#075E54] focus:bg-[#25D366] ease">
              <span className="sr-only">Open Contact form Widget</span>
              <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
                className="absolute w-6 h-6 text-white">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px" height="25px" fill="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" stroke="#fff" className="text-white fill-white"><path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z" /></svg>
                {" "}
              </Transition>

              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute w-6 h-6 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>{" "}
              </Transition>
            </Disclosure.Button>
            <Transition
              className="fixed  z-50 bottom-[100px] top-0 right-0  left-0 sm:top-auto sm:right-5 sm:left-auto"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5">
              <Disclosure.Panel className=" flex flex-col  overflow-hidden left-0 h-full w-full sm:w-[350px] min-h-[250px] sm:h-[600px] border border-gray-300 dark:border-gray-800 bg-white shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]">
                <div className="flex flex-col items-center justify-center h-32 p-5 bg-orange-600">
                  <h3 className="text-lg text-white">¡Envíanos un mensaje!</h3>
                  <p className="text-white opacity-50">
                    Usualmente respondemos al instante
                  </p>
                </div>
                <div className="flex-grow h-full p-6 overflow-auto bg-gray-50 ">
                  {!isSubmitSuccessful && (
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                      <input
                        type="hidden"
                        value="YOUR_ACCESS_KEY_HERE"
                        {...register("apikey")}
                      />
                      <input
                        type="hidden"
                        value={`${userName} sent a message from Nextly`}
                        {...register("subject")}
                      />
                      <input
                        type="hidden"
                        value="Nextly Template"
                        {...register("from_name")}
                      />
                      <input
                        type="checkbox"
                        className="hidden"
                        style={{ display: "none" }}
                        {...register("botcheck")}></input>

                      <div className="mb-4">
                        <label
                          htmlFor="full_name"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                          Tu nombre y apellido
                        </label>
                        <input
                          type="text"
                          id="full_name"
                          placeholder="Jhon Díaz"
                          {...register("name", {
                            required: "Sí no nos dices tu nombre, ¿cómo sabremos cómo llamarte?",
                            maxLength: 80,
                          })}
                          className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${errors.name
                            ? "border-red-600 focus:border-red-600 ring-red-100"
                            : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                            }`}
                        />
                        {errors.name && (
                          <div className="mt-1 text-sm text-red-400 invalid-feedback">
                            {errors.name.message}
                          </div>
                        )}
                      </div>


                      <div className="mb-4">
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                          Tu mensaje
                        </label>

                        <textarea
                          rows="4"
                          id="message"
                          {...register("message", {
                            required: "Tu mensaje es muy importante para nosotros",
                          })}
                          placeholder="Necesito información sobre la cobertura del servicio y los precios de los planes..."
                          className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md h-28 focus:outline-none focus:ring   ${errors.message
                            ? "border-red-600 focus:border-red-600 ring-red-100"
                            : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                            }`}
                          required></textarea>
                        {errors.message && (
                          <div className="mt-1 text-sm text-red-400 invalid-feedback">
                            {errors.message.message}
                          </div>
                        )}
                      </div>
                      <div className="mb-3">
                        <button
                          type="submit"
                          onClick={() => {
                            let nombre = document.getElementById("full_name").value
                            let mensaje = document.getElementById("message").value
                            let nombreSinEspacios = nombre.replace(/\s/g, '%20');
                            let mensajeSinEspacios = mensaje.replace(/\s/g, '%20');
                            setNombre(nombreSinEspacios);
                            setMensaje(mensajeSinEspacios);
                          }}
                          href="https://wa.me/593962636441/?text=tu%20texto%20personalizado"
                          target="_blank"
                          className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                          {isSubmitting ? (
                            <svg
                              className="w-5 h-5 mx-auto text-white animate-spin"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          ) : (
                            "Enviar Mensaje"
                          )}
                        </button>
                      </div>
                      <p
                        className="text-xs text-center text-gray-400"
                        id="result">
                        <span>
                          Powered by{" "}
                          <a
                            href="https://Web3Forms.com"
                            className="text-gray-600"
                            target="_blank"
                            rel="noopener noreferrer">
                            Web3Forms
                          </a>
                        </span>
                      </p>
                    </form>
                  )}

                  {isSubmitSuccessful && !isSuccess && (
                    <>
                      <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                        <svg
                          width="60"
                          height="60"
                          className="text-green-300"
                          viewBox="0 0 100 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                            stroke="currentColor"
                            strokeWidth="3"
                          />
                        </svg>
                        <h3 className="py-5 text-xl text-green-500">
                          Abrimos tu WhatsApp con el mensaje que nos enviaste y te responderemos lo antes posible 🚀
                        </h3>
                        <p className="text-gray-700 md:px-3">{Message}</p>
                        <button
                          className="mt-6 text-indigo-600 focus:outline-none"
                          onClick={() => reset()}>
                          Volver
                        </button>
                      </div>
                    </>
                  )}

                  {!isSubmitSuccessful && isSuccess && (
                    <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 97 97"
                        className="text-red-400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
                          stroke="CurrentColor"
                          strokeWidth="3"
                        />
                      </svg>

                      <h3 className="text-xl text-red-400 py-7">
                        Oops, Something went wrong!
                      </h3>
                      <p className="text-gray-700 md:px-3">{Message}</p>
                      <button
                        className="mt-6 text-indigo-600 focus:outline-none"
                        onClick={() => reset()}>
                        Go back
                      </button>
                    </div>
                  )}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div >
  );
}

export default PopupWidget;