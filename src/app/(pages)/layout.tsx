import Navbar from "@/components/Navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full bg-transparent">{children}</div>
    </>
  );
};

export default PageLayout;
