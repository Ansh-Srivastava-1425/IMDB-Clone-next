"use client";
import { useEffect, useState, use } from "react";
import Image from "next/image";

const GENRE_MAP = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy",
  80: "Crime", 18: "Drama", 14: "Fantasy", 27: "Horror",
  10749: "Romance", 878: "Sci-Fi", 53: "Thriller", 10765: "Sci-Fi & Fantasy",
  10759: "Action & Adventure", 9648: "Mystery", 10751: "Family", 37: "Western",
};

export default function Page({ searchParams }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ declare loading state
  const resolvedParams = use(searchParams);
  const genre = resolvedParams?.genre || "fetchTrending";

  useEffect(() => {
    setLoading(true); // ✅ reset loading when genre changes
    fetch(
      `https://api.themoviedb.org/3${
        genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
      }?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    )
      .then((r) => r.json())
      .then((d) => {
        setResults(d.results);
        setLoading(false); // ✅ inside .then(), runs after fetch completes
      });
  }, [genre]);

  if (loading) return (
    <div className="flex items-center justify-center h-screen">
      <img src="/spinner.svg" alt="loading" />
    </div>
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {results.map((movie) => (
        <div key={movie.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden flex flex-col">
          <div className="relative w-full aspect-[2/3]">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-2 flex flex-col gap-1 flex-1">
            <h2 className="font-bold text-sm line-clamp-1">
              {movie.title || movie.name}
            </h2>
            <div className="flex items-center gap-1 text-yellow-500 text-xs font-semibold">
              ⭐ {movie.vote_average?.toFixed(1)}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {movie.release_date || movie.first_air_date || "N/A"}
            </p>
            <div className="flex flex-wrap gap-1">
              {movie.genre_ids?.slice(0, 2).map((id) => (
                <span key={id} className="text-xs bg-gray-100 dark:bg-gray-700 rounded px-1 py-0.5">
                  {GENRE_MAP[id] || "Other"}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3 mt-1">
              {movie.overview || "No description available."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}