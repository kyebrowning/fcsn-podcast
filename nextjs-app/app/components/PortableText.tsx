/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { Image } from "next-sanity/image";
import { urlForImage } from "@/sanity/lib/utils";

import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";

import ResolvedLink from "@/app/components/ResolvedLink";

export default function CustomPortableText({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children, value }) => (
        // Add an anchor to the h1
        <h1 className="group relative">
          {children}
          <a
            href={`#${value?._key}`}
            className="absolute left-0 top-0 bottom-0 -ml-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </a>
        </h1>
      ),
      h2: ({ children, value }) => {
        // Add an anchor to the h2
        return (
          <h2 className="group relative">
            {children}
            <a
              href={`#${value?._key}`}
              className="absolute left-0 top-0 bottom-0 -ml-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </a>
          </h2>
        );
      },
    },
    marks: {
      link: ({ children, value: link }) => {
        return <ResolvedLink link={link}>{children}</ResolvedLink>;
      },
    },
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null;
        }

        return (
          <div className="my-4">
            <Image
              src={
                 urlForImage(value)
                ?.url() as string
              }
              alt={value.alt || 'Image'}
              width={100} // Match the width used in urlFor
              height={215} // Adjust based on your needs or aspect ratio
              className="w-full rounded-lg"
              sizes="(max-width: 768px) 100vw, 800px" // Responsive sizes
              priority={false} // Set to true for above-the-fold images
            />
          </div>
        );
      },
      iframe: ({ value }) => {
        // Ensure the iframe has a valid URL
        if (!value?.url) {
          return null;
        }

        // Optional: Validate or sanitize the URL
        const isValidUrl = (url: string) => {
          try {
            new URL(url);
            return true;
          } catch {
            return false;
          }
        };

        if (!isValidUrl(value.url)) {
          return <p>Invalid iframe URL</p>;
        }

        return (
          <div className="my-4">
            <iframe
              style={{borderRadius: '12px'}}
              src={value.url}
              width={value.width || "100%"}
              height={value.height || "350"}
              frameBorder="0"
              allowFullScreen
              allow={'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'}
              title="Embedded content"
              className="w-full"
            />
          </div>
        );
      },
    },
  };

  return (
    <div
      className={["prose prose-a:text-red-500", className]
        .filter(Boolean)
        .join(" ")}
    >
      <PortableText components={components} value={value} />
    </div>
  );
}
