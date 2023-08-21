import "./globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Nike by vabank.dev | Next.js, Tailwind CSS",
  description: "Next.js, Tailwind CSS, Nike by vabank.dev, training project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
