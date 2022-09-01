import { Box,createTheme,Stack, ThemeProvider } from "@mui/material";
import Feed from "./components/Feed.js";
import Navbar from "./components/Navbar.js";
import Rightbar from "./components/Rightbar.js";
import Sidebar from "./components/Sidebar.js";
import Add from "./components/Add.js"
import { useState } from "react";
import { text } from "express";
function App() {
  const[mode,setMode]=useState("dark");
  const darkTheme=createTheme({
    palette:{
      mode: mode
    }
  })
  return (
  <Box>
    <Navbar/>

    {/* navbar */ }
<Stack direction="row" spacing={2} justifyContent="space-between">
<Sidebar/>
<Feed/>
<Rightbar/>
</Stack>
<Add/>
  </Box>
   );
}

export default App;