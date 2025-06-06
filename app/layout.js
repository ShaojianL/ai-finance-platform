import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Header from "@/components/header";


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Arasaka Finance",
  description: "Perfection is necessary",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}`}
        >
          {/** header */}
          <Header></Header>
          <main className="min-h-screen">
            {children}
          </main>
          {/** footer */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>
                Made with precision
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
