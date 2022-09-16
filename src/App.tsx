import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
import { pageConstants } from "./constants/AppContants";

function App() {
  const queryClient = new QueryClient();
  const [page, setPage] = useState<string>(pageConstants.PEOPLE);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Start Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === pageConstants.PLANETS ? <Planets /> : <People />}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
