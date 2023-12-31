import GlobalContextProvider from "@/state/context/GlobalContext";
import "./globals.css";
import { Raleway } from "next/font/google";
import { MantineProvider } from "@mantine/core";
const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"/>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    />
    </head>
      <body className={raleway.className}>
        {/* <GlobalContextProvider> */}
        <MantineProvider>{children}</MantineProvider>
        {/* </GlobalContextProvider> */}
      </body>
    </html>
  );
}
