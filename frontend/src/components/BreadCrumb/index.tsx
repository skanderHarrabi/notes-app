import React from "react";
import {Link} from "react-router-dom";
//style
import "./breadCrumb.scss";
// Types
type Props = {
  noteTitle: string;
};

const BreadCrumb: React.FC<Props> = ({noteTitle}) => (
  <div className="bread-crumb_wrapper">
    <div className="bread-crumb_content">
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{noteTitle}</span>
    </div>
  </div>
);

export default BreadCrumb;
