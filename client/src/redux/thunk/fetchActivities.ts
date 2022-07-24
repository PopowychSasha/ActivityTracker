import axios from "axios";
import { activityActions } from "../activity";

export const fetchActivities: any = () => {
  return (dispatch: any) => {
    axios
      .get("/api/activities")
      .then(({ data }) => {
        dispatch(activityActions.fetchActivity(data));
      })
      .catch((err) => console.log(err.message));
  };
};
