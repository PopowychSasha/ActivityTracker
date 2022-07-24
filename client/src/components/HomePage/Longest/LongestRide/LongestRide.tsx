import { FC } from "react";
import moment from "moment";
import { convertMinutesToString } from "../../../../helpers/convertMinutesToString";
import { convertStringToMinutes } from "../../../../helpers/convertStringToMinutes";
import { LONGEST_RIDE } from "../../../../constants/HomePage/HomePageConstants";
import { ILongestRide } from "../../../../types/ILongestRide";
import "./LongestRide.scss";

export const LongestRide: FC<ILongestRide> = ({ longestRide }) => {
  return (
    <div>
      <div className="ride-title">{LONGEST_RIDE}</div>

      {longestRide ? (
        <div className="ride-data">
          <div>{moment(longestRide.createdAt).format("MMMM D")}</div>
          <div>{longestRide.distance} km</div>
          <div>
            {convertMinutesToString(
              convertStringToMinutes(longestRide.finishTime) -
                convertStringToMinutes(longestRide.startTime)
            )}
          </div>
        </div>
      ) : (
        <hr />
      )}
    </div>
  );
};
