import Dashboard from "@/components/Dashboard";
import { MainPanel } from "@/components/MainPanel";
import Navbar from "@/components/Navbar";
import RightPanel from "@/components/RightPanel";

export default function Home() {
  return (
    <div className=" ">
      {/* <div className=" w-[16%] bg-amber-500"></div> */}
      <Dashboard className="  h-full ">
        <Navbar />
        <div className=" flex h-full">
          <MainPanel />
          <RightPanel />
        </div>
      </Dashboard>
    </div>
  );
}
