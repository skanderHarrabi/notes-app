import React from "react";
import {useParams} from "react-router";
//components
import NoteInfo from "../components/NoteInfo";
import BreadCrumb from "../components/BreadCrumb";
import Spinner from "../components/Spinner";
//hook
import {useNoteFetch} from "../hooks/useNoteFetch";

const Note: React.FC = () => {
  const {noteId} = useParams();
  const {
    state: note,
    loading,
    error,
    setReloadData,
    reloadData,
  } = useNoteFetch(noteId as string);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <>
      <BreadCrumb noteTitle={note.title} />
      <NoteInfo
        note={note}
        setReloadData={setReloadData}
        reloadData={reloadData}
      />
    </>
  );
};

export default Note;
