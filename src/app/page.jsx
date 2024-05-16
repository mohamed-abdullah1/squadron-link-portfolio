import { redirect } from "next/navigation";
const HomePage = ({ children }) => {
  //   redirect("/en");
  return <>{children}</>;
};

export default HomePage;
