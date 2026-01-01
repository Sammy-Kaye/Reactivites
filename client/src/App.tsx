import { useState, useEffect } from "react";
import { Fragment } from "react";
import { List, Typography, ListItem, ListItemText } from "@mui/material";
import { Activity } from "./lib/types";
import Axios from "axios";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    Axios.get<Activity[]>("https://localhost:5001/api/activities").then(
      (response) => setActivities(response.data)
    );
    return () => {};
  }, []);

  return (
    <>
      <Typography variant="h1">Reactivities</Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText> {activity.title} </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
