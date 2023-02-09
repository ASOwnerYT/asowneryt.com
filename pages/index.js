import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { FaDiscord, FaYoutube, FaMastodon } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

const socialMediaIcons = [
  {
    name: "YouTube",
    icon: FaYoutube,
    link: "https://www.youtube.com/asowneryt",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    link: "https://discord.gg/R8jZxhkQGp",
  },
  {
    name: "Mastodon",
    icon: FaMastodon,
    link: "https://mastodon.nzoss.nz/@asowneryt",
  },
  {
    name: "Fiverr",
    icon: SiFiverr,
    link: "https://www.fiverr.com/asowneryt",
  }
]

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white">
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        </Head>
        <section className="flex justify-center space-x-3 pb-3">
          {socialMediaIcons.map((social, index) => (
            <a href={social.link} key={index} role="button">
              <social.icon className="h-10 w-10" title={social.name} />
            </a>
          ))}
        </section>
        <section className="text-2xl">
          <p className="font-bold">Greetings! I'm ASOwnerYT</p>
          <ul className="list-inside list-disc">
            <li>HTML, CSS, JS</li>
            <li>React and NextJS</li>
            <li>Video editing</li>
          </ul>
        </section>

        <section className="pt-px text-2xl">
          <h2 className="my-4 text-2xl font-bold">Blog</h2>
          <ul className="m-0 list-disc p-0">
            {allPostsData.map(({ id, date, title }) => (
              <li className="mb-5" key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className="text-slate-600 dark:text-slate-400">
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </div>
  );
}
