import { Card, CardContent } from "@mui/material";
import React from "react";
import { Speed } from "./component/Speed";

function App() {
  return (
   <Card sx={{marginTop:"50px"}}>
      <CardContent>
        <h1 style={{textAlign:"center"}}>Speedo Meters</h1>
         <Speed />
      </CardContent>
   </Card>
  );
}

export default App;
