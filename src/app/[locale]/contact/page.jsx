import PageTransitionProvider from "../../components/pageTrasitionProvider";
import LetterMotionProvider from "../../components/letterMotionProvider";
import SendMailForm from "../../components/SendMailForm";
import { useTranslations } from "next-intl";

export default function Contacts() {
  const sayHelloText = "Squadron Link ";
  const t = useTranslations("Index");
  return (
    <PageTransitionProvider>
      <div className="h-full w-full  flex flex-col lg:flex-row items-center justify-center">
        {/* TEXT CONTAINER */}
        <LetterMotionProvider sayHelloText={sayHelloText} />
        <p>{t("title")}</p>
        {/* FORM CONTAINER */}
        <SendMailForm />
      </div>
    </PageTransitionProvider>
  );
}
