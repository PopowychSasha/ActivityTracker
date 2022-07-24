import { FC, useEffect, useRef } from "react";
import {
  ACTIVITY_TYPES,
  SELECT_ACTIVITY_TYPE_TITLE,
} from "../../../../constants/HomePage/HomePageConstants";
import { IActivitiesTypesProps } from "../../../../types/IActivitiesTypesProps";
import reset from "../../../../images/reset.png";
import open_list from "../../../../images/open_list.png";
import "./ActivitiesTypes.scss";

export const ActivitiesTypes: FC<IActivitiesTypesProps> = ({
  activityTypesOpenToggle,
  activityType,
  activityTypesOpen,
  setActivityType,
  setActivityTypesOpen,
}) => {
  const activitiesRef: any = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (e: any) => {
    if (!activitiesRef.current.contains(e.target)) {
      setActivityTypesOpen(false);
    }
  };

  return (
    <div className="select-type">
      <div onClick={activityTypesOpenToggle} className="select-type-title">
        {activityType ? (
          <div>{activityType}</div>
        ) : (
          <div>{SELECT_ACTIVITY_TYPE_TITLE}</div>
        )}
        {activityTypesOpen && activityType === "" && (
          <img
            style={{ transform: "rotate(180deg)" }}
            src={open_list}
            alt=""
            width="16px"
            height="10px"
          />
        )}{" "}
        {!activityTypesOpen && activityType === "" && (
          <img src={open_list} alt="" width="16px" height="10px" />
        )}
        {activityType !== "" && (
          <img
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();
              setActivityType("");
            }}
            src={reset}
            alt=""
            width="16px"
            height="16px"
          />
        )}
      </div>
      {activityTypesOpen && (
        <div ref={activitiesRef} className="select-type-content">
          {ACTIVITY_TYPES.map((activity, index) => (
            <div
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setActivityType(activity);
                setActivityTypesOpen(false);
              }}
            >
              {activity}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
