import React, { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

export interface PlanetsProps {}

const fetchPlanets = async (
  greeting: string,
  page: number
): Promise<PlanetResponseType> => {
  console.log(greeting);
  return await (
    await fetch(`http://swapi.dev/api/planets/?page=${page}`)
  ).json();
};

const Planets: React.FC<PlanetsProps> = () => {
  const [page, setPage] = useState(1);

  const { data, status, refetch } = useQuery<PlanetResponseType>(
    "planets",
    () => fetchPlanets("hello", page),
    {
      staleTime: 2000,
      cacheTime: 10,
      onSuccess: () => console.log("data fetched with no error"),
    }
  );
  console.log(data);

  useEffect(() => {
    refetch();
  }, [refetch, page]);

  return (
    <div>
      <h2>Planets</h2>

      <button onClick={() => setPage(1)}>Page 1</button>
      <button onClick={() => setPage(2)}>Page 2</button>
      <button onClick={() => setPage(3)}>Page 3</button>

      {/* <p>{status}</p> */}
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Previous page
          </button>
          <span>{page}</span>
          <button
            onClick={() => setPage((old) => (data?.next ? old + 1 : old))}
            disabled={!data?.next}
          >
            Next page
          </button>

          <div>
            {data?.results?.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;
