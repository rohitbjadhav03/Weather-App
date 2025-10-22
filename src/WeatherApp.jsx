import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import { Container, Paper, Typography } from "@mui/material";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 29.81,
    humidity: 26,
    temp: 31.41,
    temp_max: 31.41,
    temp_min: 31.41,
    weather: "clear sky",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        textAlign: "center",
        mt: 6,
        p: 3,
      }}
    >
      <Paper elevation={5} sx={{ p: 4, borderRadius: 3 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ mb: 3, fontWeight: "bold", color: "#1976d2" }}
        ></Typography>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </Paper>
    </Container>
  );
}
