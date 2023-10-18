import Layout from "@/components/layout";
import Head from "next/head";

export default function Home() {
    return (
    <Layout>
        <Head>
            <title>Furry Writer</title>
        </Head>
        <section>
            <div className="font-bold text-4xl">Furry Writer Home</div>
        </section>
    </Layout>
    );
}