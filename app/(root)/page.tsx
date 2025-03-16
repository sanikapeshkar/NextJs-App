import { Navbar } from "@/components/Navbar/Navbar";
import SearchForm from "@/components/SearchForm/SearchForm";
import Image from "next/image";

export default async function Home({searchParams}:{
  searchParams:Promise<{query?:string}>
}) {
  const query = (await searchParams).query;
  return (
    <section className="pink_container">
      <h1 className="heading">
        Pitch Your startup <br /> Connect with Entrepreneurs
      </h1>
      <p className="subheading !max-w-3xl">
        Submit ideas, Vote on Pitches and Get Noticed on virtual competition
      </p>
      <SearchForm query={query}/>
    </section>
  );
}
