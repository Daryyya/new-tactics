import { IMeta } from "@/types/meta.interface";
import Head from "next/head";
import { FC } from "react";

const Meta: FC<IMeta> = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      {description ? (
        <meta name="description" content={description} />
      ) : (
        <meta name="robots" content="noindex" />
      )}
      {keywords ? <meta name="keywords" content={keywords.join(", ")} /> : null}
    </Head>
  );
};

export default Meta;
