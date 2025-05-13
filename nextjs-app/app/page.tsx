import { Suspense } from "react";
import Link from "next/link";

import { AllPosts } from "@/app/components/Posts";

import Image from "next/image";
import Hero from "./components/Hero";

const imageUrl = 'images/site-bkg.png'

export default async function Page() {
  return (
    <>
      <Hero
        imageUrl={"/images/site-bkg.png"}
        imageAlt="Homepage Hero background image"
        heading="Welcome to the home of the Free Cities Sports Network!"
        pipImageUrl="/images/fcsn-logo.svg"
        pipImageAlt="Logo for Free Cities Sports Network"
        // subText="(more details coming soon™)"
      />
    </>
  );
}
