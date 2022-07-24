import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ActivityList } from "../../components/HomePage/ActivityList/ActivityList";
import { AddNewActivityPanel } from "../../components/HomePage/AddNewActivityPanel/AddNewActivityPanel";
import { Header } from "../../shared/Header/Header";
import { fetchActivities } from "../../redux/thunk/fetchActivities";
import { Longest } from "../../components/HomePage/Longest/Longest";
import { TotalDistance } from "../../components/HomePage/TotalDistance/TotalDistance";
import "./HomePage.scss";

export const HomePage: FC = () => {
  const dispatch = useDispatch();
  
  useEffect(() => dispatch(fetchActivities()), []);

  return (
    <div>
      <Header />
      <AddNewActivityPanel />
      <div className="information">
        <ActivityList />
        <div className="main-information">
          <Longest />
          <TotalDistance />
        </div>
      </div>
    </div>
  );
};
