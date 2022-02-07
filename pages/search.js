import Head from "next/head";
import Header from "../components/Header";

function Search() {
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}

export default Search;
