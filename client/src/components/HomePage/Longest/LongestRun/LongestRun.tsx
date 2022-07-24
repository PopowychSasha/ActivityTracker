import { FC } from "react";
import moment from "moment";
import { convertMinutesToString } from "../../../../helpers/convertMinutesToString";
import { convertStringToMinutes } from "../../../../helpers/convertStringToMinutes";
import { LONGEST_RUN } from "../../../../constants/HomePage/HomePageConstants";
import { ILongestRun } from "../../../../types/ILongestRun";
import "./LongestRun.scss";

export const LongestRun: FC<ILongestRun> = ({ longestRun }) => {
  return (
    <div>
      <div className="run-title">{LONGEST_RUN}</div>
      {longestRun ? (
        <div className="run-data">
          <div>{moment(longestRun.createdAt).format("MMMM D")}</div>
          <div>{longestRun.distance} km</div>
          <div>
            {convertMinutesToString(
              convertStringToMinutes(longestRun.finishTime) -
                convertStringToMinutes(longestRun.startTime)
            )}
          </div>
        </div>
      ) : (
        <hr />
      )}
    </div>
  );
};
