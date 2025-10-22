import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = import.meta.env.VITE_WEATHER_API_URL;
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeatherInfo = async (city) => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const jsonResponse = await response.json();
      if (jsonResponse.cod !== 200) throw new Error("City not found");

      const result = {
        city: city,
        temp: jsonResponse.main.temp,
        temp_min: jsonResponse.main.temp_min,
        temp_max: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newInfo = await getWeatherInfo(city);
      updateInfo(newInfo);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setCity("");
    }
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter City Name"
          variant="outlined"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
          sx={{ width: "80%" }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ width: "80%" }}
        >
          Search
        </Button>
        {error && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>
             No such place exists
          </p>
        )}
      </form>
    </div>
  );
}
