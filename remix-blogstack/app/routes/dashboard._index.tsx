import { BlogSection } from "~/components/BlogSection";
import { BillsSection } from "~/components/BillSection";
import { Layout } from "~/components/Layout";
import { ProfileCard } from "~/components/ProfileCard";
import Writeblog from "~/components/Writeblog";

export default function DashboardPage() {
  return (
    <Layout>
      <div className="grid md:grid-cols-[1fr_400px] gap-6">
        <div>
          <ProfileCard />
          <Writeblog />
       </div>
        <div className="space-y-6">
          <BlogSection />
          <BillsSection />
        </div>
      </div>
    </Layout>
  );
}
