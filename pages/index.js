import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Greetings! I'm ASOwnerYT</p>
        <p>
          i will add more description latr
        </p>
      </section>
    </Layout>
  );
}
