import "@/assets/styles/globals.scss";
import ScrollObserver from "@/utils/ScrollObserver/ScrollObserver";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
  );
}
