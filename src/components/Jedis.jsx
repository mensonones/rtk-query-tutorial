import { useEffect, useState } from "react";
import { useGetJediOrderQuery } from "../services/api";

export const Jedis = () => {
  const [page, setPage] = useState(1);

  const {
    data: starwars = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetJediOrderQuery(page);

  useEffect(() => {
    console.log("starwars: ", starwars);
  }, [starwars]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div>
        <h1>Jedis</h1>
        <div>
          <button disabled={page <= 1} onClick={() => setPage((old) => Math.max(old - 1, 1))}>
            Previous Page
          </button>
          <span>Current Page: {page}</span>
          <button
            onClick={() =>
              setPage((old) => (!starwars || !starwars.length ? old : old + 1))
            }
          >
            Next Page
          </button>
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </div>
        <ol>
          {starwars?.map((jedi) => (
            <li key={jedi.id}>
              Jedi: {jedi.jedi}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Jedis;
