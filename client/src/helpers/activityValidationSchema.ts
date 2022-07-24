import * as yup from "yup";

export const activityValidationSchema = yup.object().shape({
  startTime: yup
    .string()
    .required("required")
    .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, "format must be HH:MM"),
  finishTime: yup
    .string()
    .required("required")
    .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, "format must be HH:MM"),
  distance: yup
    .number()
    .moreThan(0, "Must be more then 0")
    .lessThan(10000,"Very big distance")
    .required("required"),
});
