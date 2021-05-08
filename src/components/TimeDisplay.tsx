import { Box, Container, Typography } from "@material-ui/core";
import { useState } from "react";
import GameTime from "../server-first/GameTime";

function ordinalEnding(day: number) {
  const lastDigit = day.toString().split('').pop();
  if (lastDigit === '1' && day !== 11) {
    return 'st';
  } else if (lastDigit === '2' && day !== 12) {
    return 'nd';
  } else if (lastDigit === '3' && day !== 13) {
    return 'rd';
  } else {
    return 'th';
  }
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getDate(time: Date): string {
  return `${days[time.getUTCDay()]}, ${time.getUTCDate()}${ordinalEnding(time.getUTCDate())} ${months[time.getUTCMonth()]}`;
}

function getTime(time: Date): string {
  return `${time.getUTCHours().toString().padStart(2, '0')}:${time.getUTCMinutes().toString().padStart(2, '0')}`;
}

export default function TimeDisplay() {

  const [time, setTime] = useState(getTime(GameTime.time));

  GameTime.onTimeChangedLite.subscribe(() => {
    setTime(getTime(GameTime.time));
  });

  return (
    <Container>
      <Box m={2}>
        <Box display="flex" justifyContent="center" m={1}>
          <Typography>{getDate(GameTime.time)}</Typography>
        </Box>
        <Box display="flex" justifyContent="center" m={1}>
          <Typography>{time}</Typography>
        </Box>
      </Box>
    </Container>
  )
}