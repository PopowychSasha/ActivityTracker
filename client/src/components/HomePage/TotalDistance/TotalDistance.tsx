import { IActivitySelector } from "../../../types/IActivitySelector";
import { useSelector } from "react-redux";
import { getTotalRideAndRunDistance } from "../../../helpers/getTotalRideAndRunDistance";
import { TOTAL_RIDE_DISTANCE_TITLE, TOTAL_RUN_DISTANCE_TITLE } from "../../../constants/HomePage/HomePageConstants";
import "./TotalDistance.scss";

export const TotalDistance = () => {
  const {
    totalRideDistance,
    totalRunDistance,
  }: { totalRideDistance: number; totalRunDistance: number } = useSelector(
    (store: IActivitySelector) => {
      return getTotalRideAndRunDistance(store.activity);
    }
  );

  return (
    <div className="total-distance">
      <div className="ride-distance">
        <div className="title">{TOTAL_RIDE_DISTANCE_TITLE}</div>
        <div>{totalRideDistance} km</div>
      </div>
      <div className="run-distance">
        <div className="title">{TOTAL_RUN_DISTANCE_TITLE}</div>
        <div>{totalRunDistance} km</div>
      </div>
    </div>
  );
};
