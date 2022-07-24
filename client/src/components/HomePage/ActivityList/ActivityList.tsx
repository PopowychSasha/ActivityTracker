import { FC } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { IActivity } from "../../../types/IActivity";
import { IActivitySelector } from "../../../types/IActivitySelector";
import { convertStringToMinutes } from "../../../helpers/convertStringToMinutes";
import { convertMinutesToString } from "../../../helpers/convertMinutesToString";
import { getAvarageSpeed } from "../../../helpers/getAvarageSpeed";
import { EMPTY_LIST_MESSAGE } from "../../../constants/HomePage/HomePageConstants";
import "./ActivityList.scss";

export const ActivityList: FC = () => {
  const activities = useSelector((store: IActivitySelector) => store.activity);

  return (
    <div className="activities">
      {activities.length > 0 ? (
        activities.map(
          ({
            id,
            createdAt,
            activityType,
            distance,
            finishTime,
            startTime,
          }: IActivity) => (
            <div className="activity" key={id}>
              <div>{moment(createdAt).format("MMMM D")}</div>
              <div>{activityType ? activityType : "Other"}</div>
              <div>{distance}km</div>
              <div>
                {convertMinutesToString(
                  convertStringToMinutes(finishTime) -
                    convertStringToMinutes(startTime)
                )}
              </div>
              <div>
                {getAvarageSpeed(
                  convertStringToMinutes(finishTime) -
                    convertStringToMinutes(startTime),
                  distance
                )}{" "}
                km/hour
              </div>
            </div>
          )
        )
      ) : (
        <div className="empty-list">{EMPTY_LIST_MESSAGE}</div>
      )}
    </div>
  );
};
