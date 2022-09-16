import React, { useState } from "react";
import { useQuery } from "react-query";
import { FETCH_PEOPLE_URL } from "../../constants/ApiConstants";
import { pageConstants } from "../../constants/AppContants";
import { IPeopleResult } from "../../utils/interfaces/IPeopeApiResultResponse";
import Person from "./PersonItem";
import SkeletonStructure from "../Shared/SkeletonStructure";

const People = () => {
  //setting initial page to 1
  const [page, setPage] = useState(1);

  //extracting data, status, and cachedData
  const { data, status, isPreviousData, isFetching } = useQuery(
    [pageConstants.PEOPLE, page],
    async () => {
      const res = await fetch(FETCH_PEOPLE_URL + `/?page=${page}`);
      return res.json();
    },
    {
      keepPreviousData: true,
    }
  );

  //skeleton structure that will be shown while loading data

  return (
    <>
      <h2>People</h2>

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
          {data?.results?.map((person: IPeopleResult) => (
            <Person person={person} key={person.name} />
          ))}
        </>
      )}
    </>
  );
};

export default People;
