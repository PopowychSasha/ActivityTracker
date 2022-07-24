import { useSelector } from "react-redux";
import { IActivitySelector } from "../../../types/IActivitySelector";
import { LongestRide } from "./LongestRide/LongestRide";
import { LongestRun } from "./LongestRun/LongestRun";
import { getLongetRide } from "../../../helpers/getLongestRide";
import { getLongestRun } from "../../../helpers/getLongestRun";
import "./Longest.scss";

export const Longest = () => {
  const longestRide: any = useSelector((store: IActivitySelector) => {
    return getLongestRun(store.activity);
  });

  const longestRun: any = useSelector((store: IActivitySelector) => {
    return getLongetRide(store.activity);
  });

  return (
    <div className="longest-data-wrapper">
      <LongestRide longestRide={longestRide} />
      <LongestRun longestRun={longestRun} />
    </div>
  );
};
