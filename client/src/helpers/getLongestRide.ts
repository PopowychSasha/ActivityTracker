import { IActivity } from "../types/IActivity";

export const getLongetRide = (activities: IActivity[]) => {
  const rides = activities.filter((item) => item.activityType === "Run");
  if (rides.length === 0) {
    return false;
  } else {
    let longestRun = rides[0];
    rides.forEach((item) => {
      if (item.distance > longestRun.distance) {
        longestRun = item;
      }
    });
    return longestRun;
  }
};
