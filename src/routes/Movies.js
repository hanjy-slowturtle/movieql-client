import { gql, useQuery } from "@apollo/client";

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
    }
    allTweets {
      id
      text
      author {
        fullName
      }
    }
  }
`;

export default function Movies() {
  const { data, loading, error } = useQuery(ALL_MOVIES);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }
  console.log(data);
  return (
    <ul>
      {data.allMovies.map((movie, index) => (
        <li key={index}>{movie.title}</li>
      ))}
    </ul>
  );
}
