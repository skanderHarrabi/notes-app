import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {DeleteFilled, EditFilled} from "@ant-design/icons";
//components
import Thumb from "../Thumb";
//image
import NoImage from "../../images/default.png";
//styles
import "./noteInfo.scss";
// Types
import API, {Note} from "../../API";
import CreateEditModal from "../Modal";

type Props = {
  setReloadData: (param: boolean) => void;
  reloadData: boolean;
  note: Note;
};

const imageBackground = (poster: string) => ({
  background: "#000",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const NoteInfo: React.FC<Props> = ({note, reloadData, setReloadData}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFinish = async (values: Note) => {
    await API.updateNote(note._id, values);
    setReloadData(!reloadData);
    setIsModalOpen(false);
  };

  const deleteNote = async () => {
    await API.deleteNote(note._id);
    navigate(-1);
  };

  return (
    <div className="note-info_wrapper" style={imageBackground(NoImage)}>
      <div className="note-info_content">
        <Thumb image={NoImage} clickable={false} />
        <div className="note-info_text">
          <div className="note-info_name">
            <h1>{note.title}</h1>
            <div>
              <EditFilled
                onClick={showModal}
                style={{
                  fontSize: "1.5rem",
                  marginRight: "1rem",
                }}
                className="Note-info_edit"
                rev={-1}
              />
              <DeleteFilled
                onClick={deleteNote}
                className="note-info_delete"
                style={{
                  fontSize: "1.5rem",
                }}
                rev={-1}
              />
            </div>
          </div>
          <h3>DESCRIPTION</h3>
          <p>{note.description}</p>
        </div>
      </div>
      <CreateEditModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isCreateNote={false}
        onFinish={onFinish}
        note={note}
      />
    </div>
  );
};
export default NoteInfo;
