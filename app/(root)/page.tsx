import { Navbar } from "@/components/Navbar/Navbar";
import SearchForm from "@/components/SearchForm/SearchForm";
import StartupCard from "@/components/StartupCard/StartupCard";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Adrian" },
      _id: 1,
      description: "some description",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frobot&psig=AOvVaw0ib8Fi92qas2Y9v3RuEg8F&ust=1742200423835000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKiSns6YjowDFQAAAAAdAAAAABAE",
      category: "Robots",
      title: "We Robots",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your startup <br /> Connect with Entrepreneurs
        </h1>
        <p className="subheading !max-w-3xl">
          Submit ideas, Vote on Pitches and Get Noticed on virtual competition
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : `All startups`}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: any, index: number) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p>No posts available</p>
          )}
        </ul>
      </section>
    </>
  );
}
