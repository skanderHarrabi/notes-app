import {useState, useEffect} from "react";
import API, {Note} from "../API";

export const useNoteFetch = (noteId: string) => {
  const [state, setState] = useState<Note>({} as Note);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        setLoading(true);
        setError(false);

        const note = await API.fetchNote(noteId);

        setState({
          ...note,
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchNote();
  }, [noteId, reloadData]);

  return {state, loading, error, setReloadData, reloadData};
};
