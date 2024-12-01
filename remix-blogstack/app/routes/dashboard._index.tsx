import { AccountsSection } from "~/components/AccountSection";
import { BillsSection } from "~/components/BillSection";
import { Layout } from "~/components/Layout";
import { ProfileCard } from "~/components/ProfileCard";

export default function DashboardPage() {
  return (
    <Layout>
      <div className="grid md:grid-cols-[1fr_400px] gap-6">
        <ProfileCard />
        <div className="space-y-6">
          <AccountsSection />
          <BillsSection />
        </div>
      </div>
    </Layout>
  );
}
