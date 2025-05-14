import Link from "next/link";
import Image from "next/image";

import { sanityFetch } from "@/sanity/lib/live";
import { episodePostQuery } from "@/sanity/lib/queries";
import DateComponent from "@/app/components/Date";
import { Post as PostType } from "@/sanity.types";

const Post = ({ post }: { post: PostType }) => {
  const { _id, title, slug, excerpt, date } = post;

  return (
    <Link href={`/posts/${slug}`}>
      <div key={_id} className="max-w-sm rounded-2xl shadow-lg bg-white border border-gray-200 overflow-hidden">
      <Image
        src={'/images/apple-podcast-img.png'}
        alt={title}
        className="w-full h-48 object-cover"
        width={100}
        height={48}
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <DateComponent dateString={date}/>
      </div>
    </div>
    </Link>
  );
};

const Posts = ({
  children,
  heading,
  subHeading,
}: {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
}) => (
  <div>
    {heading && (
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
    )}
    {subHeading && (
      <p className="mt-2 text-lg leading-8 text-gray-600">{subHeading}</p>
    )}
    <div className="mt-6 pt-6 border-t border-gray-200 flex flex-row gap-4 items-center">
      {children}
    </div>
  </div>
);

export const EpisodePosts = async () => {
  const { data } = await sanityFetch({ query: episodePostQuery, perspective: "published", });

  return (
    <Posts heading='Episodes'>
      {data.map((post: any) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  );
};
