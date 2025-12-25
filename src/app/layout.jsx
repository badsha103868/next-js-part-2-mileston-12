import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// font set
const poppins = Poppins({
  weight:["400", "500", "700"],
  subsets:["latin"],
})

// export const metadata = {
//   title: "Grill Restaurant",
//   description: "Best Restaurant in Khulna",
// };
//  dynamic meta data set
export const metadata = {
  title: {
    default:"Grill Restaurant",
    template:"%s | Grill Restaurant"
  },
  description: "Best Restaurant in Khulna",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  antialiased`}
      >
        <header className="px-5 py-2 flex justify-between items-center gap-5 bg-stone-800">
          <Link href={"/"}>
            {/* <img src="/logo.avif" alt="" className="w-[120px] h-[60px]" /> */}
          <Image width={120} height={30} src="/logo.avif" alt="" className="w-[120px] h-[60px]"></Image>
          </Link>
          <div className="space-x-5 text-white">
            <Link className="btn" href={"/foods"}>
              Food
            </Link>
            <Link className="btn" href={"/reviews"}>
              Reviews
            </Link>
          </div>
        </header>

        <main className="px-5 py-8">
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}
