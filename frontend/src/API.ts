import axios from "axios";

// Types
export type Note = {
  _id: string;
  title: string;
  description: string;
};

export type Notes = {
  page: number;
  results: Note[];
  total_pages: number;
  total_results: number;
};

const apiSettings = {
  fetchNotes: async (page: number): Promise<Notes> => {
    const endpoint: string = "http://localhost:5010/api/v1/note/all";
    const notesData = await axios.get(endpoint);

    return {
      page,
      results: notesData.data.slice((page - 1) * 10, page * 10),
      total_pages: Math.ceil(notesData.data.length / 10),
      total_results: notesData.data.length,
    };
  },

  deleteNote: async (noteId: string): Promise<Notes> => {
    const endpoint: string = `http://localhost:5010/api/v1/note/${noteId}`;
    const notesData = await axios.delete(endpoint);

    return notesData.data;
  },

  createNote: async (payload: Note): Promise<Note> => {
    const endpoint: string = "http://localhost:5010/api/v1/note/create";
    const notesData = await axios.post(endpoint, payload);
    return notesData.data;
  },

  updateNote: async (noteId: string, payload: Note): Promise<Note> => {
    const endpoint: string = `http://localhost:5010/api/v1/note/${noteId}`;
    const notesData = await axios.patch(endpoint, payload);
    return notesData.data;
  },

  fetchNote: async (noteId: string): Promise<Note> => {
    const endpoint: string = `http://localhost:5010/api/v1/note/${noteId}`;
    const notesData = await axios.get(endpoint);
    return notesData.data;
  },
};

export default apiSettings;
