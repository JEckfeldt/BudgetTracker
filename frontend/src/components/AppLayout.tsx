import SummaryCards from "./SummaryCards";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SummaryCards />

      <div className="mt-10">
        {children}
      </div>
    </>
  );
}