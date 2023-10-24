import React from "react";
import {Link} from "react-router-dom";
//styles
import "./thumb.scss";
import {Note} from "../../API";
//Types
type Props = {
  image: string;
  note?: Note;
  clickable: boolean;
};

const Thumb: React.FC<Props> = ({image, note, clickable}) => {
  return (
    <div className="thumb_container">
      {clickable ? (
        <Link to={`/${note?._id}`}>
          <img className="thumb_image" src={image} alt="note-thumb" />
        </Link>
      ) : (
        <img className="thumb_image" src={image} alt="note-thumb" />
      )}

      <h4 className="thumb_title">{note?.title}</h4>
    </div>
  );
};

export default Thumb;
