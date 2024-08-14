import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Header />
        <main className="w-screen h-screen bg-landing-image bg-fixed bg-cover flex justify-center items-center">
            {children}
        </main>
        <Footer />
    </div>
  );
}