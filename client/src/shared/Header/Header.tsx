import { FC } from "react";
import { HEADER_TITLE } from "../../constants/HomePage/HomePageConstants";
import "./Header.scss";

export const Header: FC = () => <div className="header">{HEADER_TITLE}</div>;
