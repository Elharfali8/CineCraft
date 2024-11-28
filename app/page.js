import FavoriteList from "@/components/FavoriteList";
import Hero from "@/components/Hero";
import Trending from "@/components/Trending";
import Upcoming from "@/components/Upcoming";

export default function Home() {
  return (
    <main className="h-[400vh]">
      <div className="min-h-screen w-full pt-20  grid place-items-center">
          <Hero />
      </div>
      <div className="py-8 lg:py-12">
      <Trending />
      </div>
      <div className="main-gradient py-8 lg:py-12">
          <Upcoming />
      </div>
      <div className="py-8 lg:py-12">
        <FavoriteList />
      </div>
    </main>
  );
}
