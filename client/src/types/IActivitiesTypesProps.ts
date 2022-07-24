export interface IActivitiesTypesProps {
  activityTypesOpenToggle: any;
  activityType: string;
  activityTypesOpen: boolean;
  setActivityType: React.Dispatch<React.SetStateAction<string>>;
  setActivityTypesOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
