import React, { useState } from "react";
import { useQuery } from "react-query";
import { FETCH_PLANET_URL } from "../../constants/ApiConstants";
import { pageConstants } from "../../constants/AppContants";
import { IPlanetResult } from "../../utils/interfaces/IPlanetApiResultResponse";
import SkeletonStructure from "../Shared/SkeletonStructure";
import PlanetItem from "./PlanetItem";

const Planets = () => {
  //setting initial page to 1
  const [page, setPage] = useState(1);
  const { data, status, isPreviousData, isFetching } = useQuery(
    [pageConstants.PLANETS, page],
    async () => {
      const res = await fetch(FETCH_PLANET_URL + `/?page=${page}`);
      return res.json();
    },
    {
      keepPreviousData: true,
    }
  );

  return (
    <>
      <h2>Planets</h2>

      {(status === "loading" || isFetching) && <SkeletonStructure />}

      {status === "error" && <div>Error Fetching Data</div>}

      {status === "success" && (
        <>
          {/*
           * if data is not empty
           */}
          {data?.results?.length > 0 && (
            <>
              <button
                onClick={() => setPage((old) => Math.max(old - 1, 1))}
                disabled={page === 1 || isFetching}
              >
                Previous
              </button>
              <button
                onClick={() => {
                  if (!isPreviousData && data?.next) {
                    setPage((old) => old + 1);
                  }
                }}
                // Disable the Next Page button until we know a next page is available
                disabled={isPreviousData || !data?.next || isFetching}
              >
                Next
              </button>
            </>
          )}

          {data?.results?.map((item: IPlanetResult) => (
            <PlanetItem planet={item} key={item.name} />
          ))}
        </>
      )}
    </>
  );
};

export default Planets;
