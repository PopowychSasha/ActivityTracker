import { IActivity } from "../types/IActivity";

export const getLongestRun = (activities: IActivity[]) => {
  const rides = activities.filter((item) => item.activityType === "Ride");
  if (rides.length === 0) {
    return false;
  } else {
    let longestRide = rides[0];
    rides.forEach((item) => {
      if (item.distance > longestRide.distance) {
        longestRide = item;
      }
    });
    return longestRide;
  }
};
