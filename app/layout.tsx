import "./globals.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "INFIN ALPHA",
  description: "Investment Platform",

  icons: {
    icon: "/Favicon1.png",
    shortcut: "/Favicon1.png",
    apple: "/Favicon1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlex.className} bg-white text-gray-900 antialiased`}
      >
        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}