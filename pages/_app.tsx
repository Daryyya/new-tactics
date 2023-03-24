import "@/assets/styles/globals.scss";
import ScrollObserver from "@/utils/ScrollObserver/ScrollObserver";
import type { AppProps } from "next/app";
import FormController from "@/utils/FormCollector/FormContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <FormController>
        <Component {...pageProps} />
      </FormController>
    </ScrollObserver>
  );
}
