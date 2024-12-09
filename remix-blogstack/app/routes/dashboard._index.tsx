import { BlogSection } from "~/components/BlogSection";
import { BillsSection } from "~/components/BillSection";
import { ProfileCard } from "~/components/ProfileCard";
import Writeblog from "~/components/Writeblog";

export default function DashboardPage() {
  return (
      <div className="grid md:grid-cols-[1fr_7ss00px] sm:p-10 p-5 gap-6">
        <div className="col-span-0.5">
          <ProfileCard />
          <Writeblog />
       </div>
        <div className="space-y-6">
          <BlogSection />
          <BillsSection />
        </div>
      </div>
  );
}
