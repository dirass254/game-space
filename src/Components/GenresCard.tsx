import useGenres from "../Hooks/useGenres";

function GenresCard() {
  const { genres, error, isLoading } = useGenres();
  return (
    <ul>
      {genres.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
}

export default GenresCard;
