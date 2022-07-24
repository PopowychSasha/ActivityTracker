export const convertMinutesToString = (t: any) => {
  if (t / 60 >= 1) {
    return Math.trunc(t / 60) + " h " + ("00" + (t % 60)).slice(-2) + " m";
  }
  return ("00" + (t % 60)).slice(-2) + " m";
};
