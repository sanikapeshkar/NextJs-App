import { Navbar } from "@/components/Navbar/Navbar";
import SearchForm from "@/components/SearchForm/SearchForm";
import Image from "next/image";

export default function Home() {
  return (
    <section className="pink_container">
      <h1 className="heading">
        Pitch Your startup <br /> Connect with Entrepreneurs
      </h1>
      <p className="subheading !max-w-3xl">
        Submit ideas, Vote on Pitches and Get Noticed on virtual competition
      </p>
      <SearchForm/>
    </section>
  );
}
