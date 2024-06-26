"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PulseLoader } from "react-spinners";
import { useTranslations } from "next-intl";
import { useToast } from "@/components/ui/use-toast";

const SendMailForm = () => {
  const t = useTranslations("Contact");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Can't send the mail !");
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const messageRef = useRef();
  const form = useRef();
  function isValidEmail(email) {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Test if the email matches the regex pattern
    return emailRegex.test(email);
  }
  const { toast } = useToast();
  const sendEmail = async (e) => {
    e.preventDefault();

    setError(false);
    setSuccess(false);
    if (!emailRef.current.value || !messageRef.current.value) {
      return toast({
        title: t("error") + " 🔴",
        description: t("errorEnter"),
        variant: "destructive",
      });
      // setErrorMsg("You Must enter the email and message first");
      // return setError(true);
    }
    if (!isValidEmail(emailRef.current.value)) {
      return toast({
        variant: "destructive",
        title: t("error") + " 🔴",
        description: t("errorEmail"),
      });
      // setErrorMsg("This mail isn't valid");
      // return setError(true);
    }
    setIsLoading(true);
    try {
      const res = await emailjs.sendForm(
        "service_hw47sqj",
        "template_g111eed",
        form.current,
        {
          publicKey: "7aKNPdxKP0LULQ2bZ",
        }
      );
      setSuccess(true);
      toast({
        title: t("success") + " ✅",
        description: t("successMessage"),
      });
    } catch (err) {
      toast({
        title: t("error"),
        description: t("something went wrong"),
      });
      // setErrorMsg(err);
      // return setError(true);
    } finally {
      setIsLoading(false);

      form.current.reset();
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-red-50 dark:bg-slate-800 h-2/3 lg:h-3/4 w-full md:w-2/3 lg:w-1/2 lg:m-0 lg:m-15 flex flex-col p-8 lg:p-10 gap-6 rounded text-primary"
    >
      {/* TITLE MESSAGE */}
      <p className="font-semibold text-primary">{t("header")}</p>
      {/* TEXT FIELD MESSAGE */}
      <textarea
        ref={messageRef}
        className="bg-red-50 dark:bg-slate-800  outline-none resize-none dark:border-t-slate-800 dark:border-r-slate-800 dark:border-l-slate-800  dark:border-b-slate-800 border-t-red-50 border-l-red-50 border-r-red-50 border-b-black border-2 "
        name="user_message"
        id="user_message"
        rows="10"
      />
      {/* TEXT EMAIL ADDRESS MESSAGE */}
      <p className="font-semibold">{t("emailAddress")}</p>
      {/* INPUT email FIELD */}
      <input
        ref={emailRef}
        className="bg-red-50 dark:bg-slate-800 outline-none resize-none border-t-red-50 border-l-red-50 border-r-red-50 border-b-black border-2 dark:border-t-slate-800 dark:border-r-slate-800 dark:border-l-slate-800  dark:border-b-slate-800"
        type="email"
        name="user_name"
      />
      {/* REGARDS MESSAGE */}
      <p className="font-semibold">{t("regards")}</p>
      {/* BUTTON  SEND*/}
      <button className="bg-indigo-300 text-white p-4 rounded  font-semibold hover:bg-transparent hover:text-indigo-300 border-2 border-indigo-300">
        {isLoading ? <PulseLoader color="white" /> : t("send")}
      </button>
      {/* {success && (
        <p className="text-green-600 font-semibold">{t("successMessage")}</p>
      )}

      {error && <p className="text-red-600 font-semibold ">{t(errorMsg)}</p>} */}
    </form>
  );
};

export default SendMailForm;
