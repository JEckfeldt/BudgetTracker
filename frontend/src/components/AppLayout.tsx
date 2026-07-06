import SummaryCards from "./SummaryCards";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8FAF7] text-[#1F2A24] p-8">
      <SummaryCards />

      <main className="mt-10">
        {children}
      </main>
    </div>
  );
}