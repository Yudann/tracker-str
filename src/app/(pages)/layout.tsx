import Navbar from "@/components/Navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-x-hidden w-screen h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default PageLayout;
