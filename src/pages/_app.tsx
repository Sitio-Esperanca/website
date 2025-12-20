import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { useEffect } from "react";
import "aos/dist/aos.css";

import { theme } from "@/styles/theme";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let mounted = true;

    const initAOS = async () => {
      if (typeof window === "undefined") return;
      const Aos = (await import("aos")).default;
      if (!mounted) return;
      Aos.init({
        duration: 900,
        easing: "ease-out-cubic",
        once: true,
        offset: 40,
      });
    };

    initAOS();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
