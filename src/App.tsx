import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
import { pageConstants } from "./constants/AppContants";

function App() {
  const queryClient = new QueryClient();
  const [page, setPage] = useState<string>(pageConstants.PLANETS);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Start Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === pageConstants.PLANETS ? <Planets /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
