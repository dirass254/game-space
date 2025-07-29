import useGenres from "../Hooks/useGenres";

function GenresList() {
  const { data, error, isLoading } = useGenres();
  return (
    <ul>
      {data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
}

export default GenresList;
