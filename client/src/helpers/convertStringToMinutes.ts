export const convertStringToMinutes = (t: any) => {
  var s = t.split(":");
  return Number(s[0]) * 60 + Number(s[1]);
};
