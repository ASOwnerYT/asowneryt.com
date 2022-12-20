import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "ASOwnerYT";
export const siteTitle = "ASOwnerYT's Blog";

export default function Layout({ children, home }) {
  return (
    <div className="mx-auto max-w-xl px-4 pt-12 pb-24">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="ASOwnerYT's Blog website" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
        <Image
          priority
          src="/images/profile.jpg"
          className="rounded-full"
          height={144}
          width={144}
          alt=""
        />
        <h1 className="my-4 text-4xl font-bold">
          <Link href="/">{name}</Link>
        </h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-12">
          <Link href="/" className="text-blue-800 dark:text-blue-200">
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  );
}
