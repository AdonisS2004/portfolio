import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Header />
        <main className="w-screen h-screen bg-landing-image bg-fixed bg-cover flex justify-center items-center">
          <div className="bg-neutral-900 bg-opacity-20 fixed left-0 top-0 right-0 z-10 w-screen h-screen"></div> {/* opacity overlay for bakcground image */}
          {children}
        </main>
        <Footer />
    </div>
  );
}