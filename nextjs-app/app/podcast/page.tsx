import { sanityFetch } from "@/sanity/lib/live";
import { episodePostQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { EpisodePosts } from "../components/Episodes";
import Image from "next/image";
import PageBanner from "../components/PageBanner";
import Head from "next/head";
import Link from "next/link";

type Props = {
    params: Promise<{ slug: string }>;
  };

const spotifyUrl = "https://open.spotify.com/show/2N1bUJXknfmi8owdlXzu1Y?si=yeRyfUWVQaauzTV8Gr7IzQ";

const rssFeed = "https://anchor.fm/s/10435ba10/podcast/rss"

export default async function PostPage() {
  return (
    <div className="mb-12 lg:mb-24">
      <Head>
        <title>{'FCSN Podcast'}</title>
      </Head>
        <PageBanner title={'Free Cities Sports Network Podcast'} />
        <div className="flex flex-col lg:flex-row justify-around gap-4">
            <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="px-3">
                <Image
                    className="rounded-2xl shadow-md transition-shadow object-cover"
                    alt={"Image to redirect to Spotify show"}
                    src={"/images/spotifySub.png"}
                    width={500}
                    height={100}
                    priority
                />
            </a>
            <a href={rssFeed} target="_blank" rel="noopener noreferrer" className="px-3">
                <Image
                    className="rounded-2xl shadow-md transition-shadow object-cover"
                    alt={"Image to copy RSS feed link"}
                    src={"/images/rssFeed.png"}
                    width={500}
                    height={100}
                    priority
                />
            </a>
        </div>
        <div className="container my-12 lg:my-12 grid gap-12">
          <Suspense>{await EpisodePosts()}</Suspense>
        </div>
        
    </div>
  )};