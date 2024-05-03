"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PulseLoader } from "react-spinners";

const SendMailForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    setError(false);
    setSuccess(false);
    setIsLoading(true);
    console.log("👉🔥 ", form.current);

    emailjs
      .sendForm("service_hw47sqj", "template_g111eed", form.current, {
        publicKey: "7aKNPdxKP0LULQ2bZ",
      })
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-red-50 h-2/3 lg:h-3/4 w-full md:w-2/3 lg:w-1/2 lg:m-0 lg:m-15 flex flex-col p-8 lg:p-10 gap-6 rounded"
    >
      {/* TITLE MESSAGE */}
      <p className="font-semibold ">Dear Squadron Link Team,</p>
      {/* TEXT FIELD MESSAGE */}
      <textarea
        className="bg-red-50 outline-none resize-none border-t-red-50 border-l-red-50 border-r-red-50 border-b-black border-2 "
        name="user_message"
        id="user_message"
        rows="10"
      />
      {/* TEXT EMAIL ADDRESS MESSAGE */}
      <p className="font-semibold">My email address</p>
      {/* INPUT email FIELD */}
      <input
        className="bg-red-50 outline-none resize-none border-t-red-50 border-l-red-50 border-r-red-50 border-b-black border-2 "
        type="email"
        name="user_name"
      />
      {/* REGARDS MESSAGE */}
      <p className="font-semibold">Regards.</p>
      {/* BUTTON  SEND*/}
      <button className="bg-indigo-300 text-white p-4 rounded  font-semibold hover:bg-transparent hover:text-indigo-300 border-2 border-indigo-300">
        {isLoading ? <PulseLoader color="white" /> : "Send"}
      </button>
      {success && (
        <p className="text-green-600 font-semibold">
          Email Sent Successfully !
        </p>
      )}

      {error && (
        <p className="text-red-600 font-semibold ">Can't send the mail !</p>
      )}
    </form>
  );
};

export default SendMailForm;
