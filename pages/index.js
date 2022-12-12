import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

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
    <div className="dark:bg-slate-900 min-h-screen dark:text-white">
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
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
