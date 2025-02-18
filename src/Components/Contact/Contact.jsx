import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact-module.css";

export default function Contact() {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type) => {
    const newToast = { id: Date.now(), message, type, visible: true };
    setToasts((prevToasts) => [newToast, ...prevToasts]);

    setTimeout(() => {
      removeToast(newToast.id);
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) =>
      prevToasts.map((toast) =>
        toast.id === id ? { ...toast, visible: false } : toast
      )
    );

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target["floating_Name"].value.trim();
    const email = e.target["floating_Email"].value.trim();
    const message = e.target["floating_message"].value.trim();

    if (name.length < 3) {
      addToast("The name must be at least 3 characters long.", "error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      addToast("Please enter a valid email address.", "error");
      return;
    }

    if (message.length < 10) {
      addToast("The message must be at least 10 characters long.", "error");
      return;
    }

    emailjs
      .sendForm(
        "smtp.gmail.com",
        "template_5xjzakj",
        e.target,
        "syWNNT_EUME6K5Fqb"
      )
      .then(
        () => {
          addToast("The message was sent successfully", "success");
          e.target.reset();
        },
        () => {
          addToast("The message failed to send, please try again.", "error");
        }
      );
  };

  return (
    <>
      <div className="row mt-24">
        <div className="col-12 justify-content-center text-center pointer-events-none  ">
          <h2 className="dark:text-[#FED29B] text-3xl font-font dark:bg-[#0d121d] rounded-2xl bg-pink-100 text-sky-500 border-sky-300 dark:border-[#FED29B] border w-max mx-auto px-9 py-5 h-max mt-10 mb-7">
            Contact
          </h2>
        </div>
      </div>
      <div className="row">
        <div className=" d-md-flex md:flex-col lg:flex-row gap-4 justify-content-lg-between">
          <div className=" col-md-6 mx-auto  col-lg-5 col-12 mb-5 md:mb-0 text-center pointer-events-none overflow-hidden  bg-[#1A243A] hover:bg-gray-700  focus:outline-none  text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 ">
            <div className="relative  -translate-x-5    px-5 text-2xl after:content-[''] after:absolute after:h-[100%] after:w-[3px] after:py-[4.2rem] after:-mt-[1.5rem] after:bg-black after:right-0 after:top-0">
              <FontAwesomeIcon
                className="icon-style  px-5 text-3xl"
                icon={faPhone}
              />
            </div>

            <div className=" me-auto ms-4 xl:-translate-x-4 text-left -translate-x-5 sm:-translate-x-0  rtl:text-right">
              <div className="mb-1 text-left text-sm md:text-lg">Phone:</div>
              <div className="-mt-1 font-sans md:text-2xl text-sm  font-semibold">
                +201098454946
              </div>
            </div>
          </div>

          <div className=" col-md-8 col-xl-5 col-lg-6 col-12 mx-auto  justify-content-center text-center pointer-events-none overflow-hidden   bg-[#1A243A] hover:bg-gray-700  focus:outline-none  text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 ">
            <div className="relative -translate-x-3 sm:-translate-x-4 px-5 text-2xl after:content-[''] after:absolute after:h-[100%] after:w-[3px] after:py-[5.48rem] after:-mt-[2.45rem] after:bg-black after:right-0 after:top-0">
              <FontAwesomeIcon
                className="icon-style  px-5 text-3xl"
                icon={faEnvelope}
              />
            </div>

            <div className=" me-auto -translate-x-5 sm:-translate-x-0 lg:-translate-x-4 ms-4 text-left rtl:text-right">
              <div className="mb-1 text-left text-sm md:text-lg">Gmail:</div>
              <div className="-mt-1 font-sans md:text-2xl text-sm font-semibold">
                sayedragheb92@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-14">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto  ">
            <div className="relative mb-6" id="contact-section-row">
              <input
                type="text"
                id="floating_Name"
                name="floating_Name"
                className="block text-white  focus:ring-transparent px-2.5 pb-2.5 pt-4 w-full text-sm  f   rounded-lg border-1 border-gray-900 bg-moon appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none  focus:border-black peer  dark:bg-[#374151]"
                placeholder=" "
              />
              <label
                htmlFor="floating_Name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#1A243A] rounded-lg  px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-[#FED29B] dark:bg-[#374151]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 cursor-text"
              >
                Full Name
              </label>
            </div>
            <div className="relative mb-7">
              <input
                type="email"
                id="floating_Email"
                name="floating_Email"
                className="block text-white focus:ring-transparent px-2.5 pb-2.5 pt-4 w-full text-sm   rounded-lg border-1 border-gray-900 bg-moon appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none  focus:border-black peer dark:bg-[#374151]"
                placeholder=" "
              />
              <label
                htmlFor="floating_Email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#1A243A] rounded-lg  px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-[#FED29B] dark:bg-[#374151] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 cursor-text"
              >
                Your Email
              </label>
            </div>

            <div className="relative mb-7">
              <textarea
                id="floating_message"
                name="floating_message"
                rows={4}
                className="block text-white focus:ring-transparent px-2.5 pb-2.5 pt-4 w-full text-sm  rounded-lg border border-gray-900 bg-moon appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none  focus:border-black peer dark:bg-[#374151]"
                placeholder=" "
                defaultValue={""}
              ></textarea>
              <label
                htmlFor="floating_message"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#1A243A] rounded-lg px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-[#FED29B] dark:bg-[#374151] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/4 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 cursor-text"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="text-white bg-[#1A243A] hover:bg-[#141c2d] transition-all duration-150  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#0D121D] dark:text-[#FED29B] dark:hover:bg-[#c7a377] dark:hover:text-[#0D121D] "
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="fixed top-4 right-4 z-50">
        {toasts.map((toast) => {
          let icon, bgColor, textColor;

          switch (toast.type) {
            case "success":
              icon = (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
              );
              bgColor = "bg-green-100 dark:bg-green-800";
              textColor = "text-green-500 dark:text-green-200";
              break;
            case "error":
              icon = (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                </svg>
              );
              bgColor = "bg-red-100 dark:bg-red-800";
              textColor = "text-red-500 dark:text-red-200";
              break;
            case "warning":
              icon = (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                </svg>
              );
              bgColor = "bg-orange-100 dark:bg-orange-700";
              textColor = "text-orange-500 dark:text-orange-200";
              break;
            default:
              icon = null;
              bgColor = "bg-gray-100 dark:bg-gray-800";
              textColor = "text-gray-500 dark:text-gray-200";
          }

          return (
            <div
              key={toast.id}
              className={`toast flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 ${
                toast.visible ? "" : "hide"
              }`}
            >
              <div
                className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg ${bgColor} ${textColor}`}
              >
                {icon}
                <span className="sr-only">{toast.type} icon</span>
              </div>
              <div className="ms-3 text-sm font-normal">{toast.message}</div>
              <button
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                onClick={() => removeToast(toast.id)}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
          );
        })}
      </div>

      <br />
    </>
  );
}
