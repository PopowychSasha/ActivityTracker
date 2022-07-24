import { IActivity } from "../types/IActivity";

export const getTotalRideAndRunDistance = (activities: IActivity[]) => {
  let totalRideDistance = 0,
    totalRunDistance = 0;
  activities.forEach((item) => {
    if (item.activityType === "Ride") {
      totalRideDistance += item.distance;
    } else if (item.activityType === "Run") {
      totalRunDistance += item.distance;
    }
  });
  return { totalRideDistance, totalRunDistance };
};
