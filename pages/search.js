import Head from "next/head";
import Header from "../components/Header";

function Search() {
  return (
    <div>
      <Head>
        <tite>Search Results</tite>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}

export default Search;
