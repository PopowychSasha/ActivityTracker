import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { createActivity } from "../../../redux/thunk/createActivity";
import { activityValidationSchema } from "../../../helpers/activityValidationSchema";
import { ActivitiesTypes } from "./ActivitiesTypes/ActivitiesTypes";
import { ADD_NEW_ACTIVITY } from "../../../constants/HomePage/HomePageConstants";
import "./AddNewActivityPanel.scss";

export const AddNewActivityPanel: FC = () => {
  const [activityType, setActivityType] = useState<string>("");
  const [activityTypesOpen, setActivityTypesOpen] = useState<boolean>(false);

  const dispatch = useDispatch();

  const activityTypesOpenToggle = () =>
    setActivityTypesOpen((activityTypesOpen) => !activityTypesOpen);

  return (
    <div className="add-new-activity-panel">
      <Formik
        initialValues={{
          startTime: "",
          finishTime: "",
          distance: "",
        }}
        validateOnChange
        onSubmit={(values) => {
          dispatch(
            createActivity(
              values.startTime,
              values.finishTime,
              values.distance,
              activityType
            )
          );
        }}
        validationSchema={activityValidationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          handleReset,
        }) => {
          return (
            <div className="form-wrapper">
              <div className="title">{ADD_NEW_ACTIVITY} </div>
              <div>
                <input
                  name="startTime"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.startTime}
                  className="start-time"
                  placeholder="Start time"
                />
                {touched.startTime && errors.startTime && (
                  <div className="time-error">{errors.startTime}</div>
                )}
              </div>
              <div>
                <input
                  name="finishTime"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.finishTime}
                  className="finish-time"
                  placeholder="Finish time"
                />
                {touched.finishTime && errors.finishTime && (
                  <div className="time-error">{errors.finishTime}</div>
                )}
              </div>
              <div>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  name="distance"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.distance}
                  className="distance"
                  placeholder="Distance"
                />
                {touched.distance && errors.distance && (
                  <div className="distance-error">{errors.distance}</div>
                )}
              </div>
              <ActivitiesTypes
                activityTypesOpenToggle={activityTypesOpenToggle}
                activityType={activityType}
                activityTypesOpen={activityTypesOpen}
                setActivityType={setActivityType}
                setActivityTypesOpen={setActivityTypesOpen}
              />
              <input
                onClick={() => {
                  handleSubmit();
                  setTimeout(() => {
                    handleReset();
                    setActivityType("");
                  }, 1000);
                }}
                type="submit"
                value="Save"
                className="submit-btn"
              />
            </div>
          );
        }}
      </Formik>
    </div>
  );
};
