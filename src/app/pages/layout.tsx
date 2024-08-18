export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="w-5/6 h-4/5 rounded-xl bg-neutral-900 bg-opacity-70 z-30 flex justify-center items-center text-white font-customInter shadow-2xl shadow-slate-200">
            {children}
        </main>
    );
  }
  