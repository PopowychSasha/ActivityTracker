export const getAvarageSpeed = (t: any, distance: any) => {
  if (t / 60 >= 1) {
    return (distance / (t / 60 + (t % 60) / 60)).toString().slice(0, 6);
  }
  return (t / 60 / distance).toString().slice(0, 6);
};
