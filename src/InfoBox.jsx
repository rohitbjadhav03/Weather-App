import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const COLD_URL =
    "https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?auto=format&fit=crop&q=80&w=1047";
  const HOT_URL =
    "https://images.unsplash.com/photo-1493936734716-77ba6da66365?auto=format&fit=crop&q=80&w=1169";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?auto=format&fit=crop&q=80&w=687";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card
          sx={{
            maxWidth: 345,
            borderRadius: 3,
            boxShadow: 4,
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.03)" },
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            alt="weather background"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon color="primary" />
              ) : info.temp > 15 ? (
                <WbSunnyIcon color="warning" />
              ) : (
                <AcUnitIcon color="info" />
              )}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "text.secondary", textAlign: "left" }}
            >
              <p>🌡️ Temperature: {info.temp}&deg;C</p>
              <p>💧 Humidity: {info.humidity}%</p>
              <p>⬆️ Max Temp: {info.temp_max}&deg;C</p>
              <p>⬇️ Min Temp: {info.temp_min}&deg;C</p>
              <p>
                ☁️ Weather: <i>{info.weather}</i> <br />
                Feels like {info.feels_like}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
