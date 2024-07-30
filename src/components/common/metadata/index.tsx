import { MetadataProperties } from "@/types/components/common/MetadataProperties.type";
import Head from "next/head";
import React from "react";

const Metadata = ({ title, description }: MetadataProperties) => {
  return (
    <Head>
      <title>{title}</title>
      <meta content={title} name="title" />
      <meta content={description} name="description" />
      <meta content={title} name="og:title" />
      <meta content={description} name="og:description" />
      <meta content="googlebot" name="robots" />
    </Head>
  );
};

export default Metadata;
