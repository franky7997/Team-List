import { useCallback, useEffect, useState } from "react";
import "./App.css";

import Filters from "./components/Filters";
import Table from "./components/Table";
import LoadingSpinner from "./components/UI/LoadingSpinner";

function App() {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState({ name: "", email: "" });

  const fetchTeamListHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Failed to get data");
      }

      const data = await response.json();

      setMembers(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTeamListHandler();
  }, [fetchTeamListHandler]);

  const filterValueHandler = (filterValue) => {
    setFilter(filterValue);
  };

  let content = <p>No member found.</p>;

  if (members.length > 0)
    content = (
      <Table
        data={members.filter((x) => {
          return (
            x.name.toLowerCase().includes(filter.name.toLowerCase()) &&
            x.email.toLowerCase().includes(filter.email.toLowerCase())
          );
        })}
      />
    );

  if (error) content = <p>{error}</p>;

  if (isLoading) content = <LoadingSpinner />;

  return (
    <div className="root-container">
      <section>
        <Filters filterValue={filterValueHandler} />
      </section>
      <section>{content}</section>
    </div>
  );
}

export default App;
