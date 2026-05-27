export default async function MoviePage({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const movie = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        {movie.title}
      </h1>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg"
      />
    </div>
  );
}