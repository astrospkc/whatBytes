import Image from "next/image";
import Dashboard from "./dashboard/page"
import { SkillSummaryProvider } from "@/context/SkillSummaryProvider";


export default function Home() {
  return (
    <SkillSummaryProvider>
      <div>
        <Dashboard />
      </div>
    </SkillSummaryProvider>

  );
}
