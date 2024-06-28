import Image from "next/image";
import Boost from "./component/Boost/page";
import Header from "./component/Header/page";
// import Header from "./component/Header/page.jsx"; 

export default function Home() {
  return (
    <main className="flex min-h-screen bg-custom-gradient  flex-col items-center justify-between p-24">
      {/* <Header/> */}
      <Boost/>
    </main>
  );
}
