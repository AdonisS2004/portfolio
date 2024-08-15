export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="w-4/5 h-3/4 rounded-xl bg-neutral-900 bg-opacity-50 z-30 flex justify-center items-center text-white font-customInter">
            {children}
        </main>
    );
  }
  