import {useState, useEffect} from "react";
//API
import API, {Note} from "../API";

const initialState = {
  page: 0,
  results: [] as Note[],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [reloadData, setReloadData] = useState(false);

  const fetchNotes = async (page: number) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const notes = await API.fetchNotes(page);

      setState((prev) => ({
        ...notes,
        results:
          page > 1 ? [...prev.results, ...notes.results] : [...notes.results],
      }));
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  // initial and search
  useEffect(() => {
    setState(initialState);
    fetchNotes(1);
  }, [searchTerm, reloadData]);

  // Load more
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchNotes(state.page + 1);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  return {
    state,
    isLoading,
    isError,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
    setReloadData,
    reloadData,
  };
};
