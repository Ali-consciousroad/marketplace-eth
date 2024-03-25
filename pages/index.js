import { Navbar, Footer, Hero, Breadcrumbs } from "@components/common";
import { CourseList } from "@components/common/course";
import { OrderCard } from "@components/common/order";
import { EthRates, WalletBar } from "@components/common/web3";
import Course from "./course";

export default function Home() {
  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <Navbar />
          <div className="fit">
            <Hero />
            <Breadcrumbs />
            <WalletBar />
            <EthRates />
            <OrderCard />
            <CourseList />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
