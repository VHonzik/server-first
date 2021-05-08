import { Box, Container, SvgIcon } from "@material-ui/core";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import FastForwardIcon from '@material-ui/icons/FastForward';

import TimeFlow from "../server-first/TimeFlow";
import GameTime from "../server-first/GameTime";
import { useState } from "react";
import TimeControl from "./TimeControl";

const SuperFastIcon = (
  <SvgIcon width='1em' height='1em' viewBox="0 0 24 24">
    <path d="m3.6953 7.3398v9.3203c1.6608-1.1648 3.3215-2.3296 4.9824-3.4941v3.4941c1.6608-1.1648 3.3215-2.3296 4.9824-3.4941v3.4941c2.2148-1.5534 4.4297-3.1068 6.6445-4.6602-2.2148-1.5534-4.4297-3.1068-6.6445-4.6602v3.4941c-1.661-1.1645-3.3216-2.3294-4.9824-3.4941v3.4941c-1.661-1.1645-3.3216-2.3294-4.9824-3.4941z"
 />
  </SvgIcon>
);

function setGameTimeFlow(flow: TimeFlow) {
  GameTime.flow = flow;
}

export default function TimeControls() {
  const [timeFlow, setTimeFlow] = useState<TimeFlow>(GameTime.flow);

  GameTime.onFlowChanged.subscribe(() => {
    setTimeFlow(GameTime.flow);
  });

  return (
    <Container>
      <Box m={1} display="flex" justifyContent="center">
        <TimeControl icon={(<PlayArrowIcon />)} disabled={timeFlow === TimeFlow.Normal} label='Resume' disabledColor='#388e3c' onClick={() => setGameTimeFlow(TimeFlow.Normal)} />
        <TimeControl icon={(<PauseIcon />)} disabled={timeFlow === TimeFlow.Stopped} label='Pause' disabledColor='#f57c00' onClick={() => setGameTimeFlow(TimeFlow.Stopped)}  />
      </Box>
      <Box m={1} display="flex" justifyContent="center">
        <TimeControl icon={(<FastForwardIcon />)} disabled={timeFlow === TimeFlow.Fast} label='Fast' disabledColor='#388e3c' onClick={() => setGameTimeFlow(TimeFlow.Fast)}  />
        <TimeControl icon={SuperFastIcon} disabled={timeFlow === TimeFlow.SuperFast} label='Super Fast' disabledColor='#388e3c' onClick={() => setGameTimeFlow(TimeFlow.SuperFast)}  />
      </Box>
    </Container>
  );
}