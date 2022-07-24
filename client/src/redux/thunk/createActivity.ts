import axios from "axios";
import { activityActions } from "../activity";

export const createActivity: any = (
  startTime: string,
  finishTime: string,
  distance: number,
  activityType: string
) => {
  return (dispatch: any) => {
    axios
      .post("/api/activity", {
        startTime,
        finishTime,
        distance,
        activityType,
      })
      .then(({ data }) => dispatch(activityActions.addActivity(data)))
      .catch((err) => console.log(err.mesage));
  };
};
