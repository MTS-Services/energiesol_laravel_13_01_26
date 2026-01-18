import FrontendLayout from "@/layouts/frontend-layout";
import Banner from "@/layouts/include/home/banner";
import Default from "@/layouts/include/home/defaultPage";
import Header from "@/layouts/include/home/header";

export default function Home() {
  return (
    <FrontendLayout>
      <Header />
      <Banner />
      <Default />
      
      
    </FrontendLayout>
  );
}
