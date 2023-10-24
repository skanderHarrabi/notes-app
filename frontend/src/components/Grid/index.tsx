import React, {useState} from "react";
import {Button} from "antd";
//styles
import "./grid.scss";
import API, {Note} from "../../API";
import CreateEditModal from "../Modal";
// Types
type Props = {
  setReloadData: (param: boolean) => void;
  reloadData: boolean;
  children: any;
};

const Grid: React.FC<Props> = ({setReloadData, reloadData, children}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFinish = async (values: Note) => {
    const payload: Note = values;
    await API.createNote(payload);
    setReloadData(!reloadData);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="grid_wrapper">
        <div className="grid_header">
          <div className="grid_header_text">
            <h1>Search Result</h1>
          </div>
          <div className="grid_header_button">
            <Button onClick={showModal}>Add Note</Button>
            <CreateEditModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              isCreateNote={true}
              onFinish={onFinish}
            />
          </div>
        </div>
        <div className="grid_content">{children}</div>
      </div>
    </>
  );
};

export default Grid;
