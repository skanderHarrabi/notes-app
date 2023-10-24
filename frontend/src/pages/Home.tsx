import React, {useMemo} from "react";
// //hook
import {useHomeFetch} from "../hooks/usehomeFetch";
import Button from "../components/Button";
import Grid from "../components/Grid";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";
import Thumb from "../components/Thumb";
// //image
import NoImage from "../images/default.png";

const Home: React.FC = () => {
  const {
    state,
    isLoading,
    isError,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
    setReloadData,
    reloadData,
  } = useHomeFetch();

  const filtredNotes = useMemo(() => {
    return state.results.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [state.results, searchTerm]);

  if (isError) return <div>Something went wrong ...</div>;

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid setReloadData={setReloadData} reloadData={reloadData}>
        {filtredNotes.map((note) => (
          <div>
            <Thumb key={note._id} clickable image={NoImage} note={note} />
          </div>
        ))}
      </Grid>
      {isLoading && <Spinner />}
      {state.page < state.total_pages && !isLoading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
