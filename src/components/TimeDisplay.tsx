import { Box, Container, Typography } from "@material-ui/core"

type TimeDisplayProps = {
  time: Date;
}

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

export default function TimeDisplay(props: TimeDisplayProps) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const {time} = props;

  return (
    <Container>
      <Box m={2}>
        <Box display="flex" justifyContent="center" m={1}>
          <Typography>{days[time.getUTCDay()]}, {time.getUTCDate()}{ordinalEnding(time.getUTCDate())} {months[time.getUTCMonth()]}</Typography>
        </Box>
        <Box display="flex" justifyContent="center" m={1}>
          <Typography>{time.getUTCHours()}:{time.getUTCMinutes()}</Typography>
        </Box>
      </Box>
    </Container>
  )
}