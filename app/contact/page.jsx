import PageTransitionProvider from "../components/pageTrasitionProvider";
import LetterMotionProvider from "../components/letterMotionProvider";
import SendMailForm from "../components/SendMailForm";

export default function Contacts() {
  const sayHelloText = "Squadron Link ";
  return (
    <PageTransitionProvider>
      <div className="h-full w-full  flex flex-col lg:flex-row items-center justify-center">
        {/* TEXT CONTAINER */}
        <LetterMotionProvider sayHelloText={sayHelloText} />
        {/* FORM CONTAINER */}
        <SendMailForm />
      </div>
    </PageTransitionProvider>
  );
}
