import { Typography, SvgIcon } from "@material-ui/core";
import React from "react";
import { StatPriority } from "../server-first/CharacterClass";

type InlineStatPriorityDisplayProps = {
  priorities: StatPriority[]
}

const ApproximatelyEqualIcon = (
  <SvgIcon width='1em' height='1em' style={{ verticalAlign: '-0.25em' }} viewBox="0 0 24 24">
    <path d="M18.9 9.2c-.8.9-2.3 1.8-3.9 1.8c-1.5 0-2.4-.5-3.2-.9c-.8-.3-1.6-.8-2.9-.8c-1.2 0-2.3.7-2.9 1.3L5 9.1c.9-.9 2.3-1.9 3.9-1.9c1.5 0 2.4.6 3.2.9c.8.3 1.6.9 2.9.9c1.2 0 2.3-.8 2.9-1.4l1 1.6m.1 4.9c-.9.9-2.3 1.9-3.9 1.9c-1.5 0-2.4-.5-3.2-.9c-.8-.3-1.6-.9-2.9-.9c-1.2 0-2.3.8-2.9 1.4l-1-1.6c.9-.9 2.3-1.9 3.9-1.9c1.5 0 2.4.5 3.2.9c.8.3 1.6.8 2.9.8c1.2 0 2.3-.8 2.9-1.4l1 1.7z" />
  </SvgIcon>
);

const GreaterThanIcon = (
  <SvgIcon width='1em' height='1em' style={{ verticalAlign: '-0.25em' }} viewBox="0 0 24 24">
    <path d="M5.5 4.14l-1 1.72L15 12L4.5 18.14l1 1.72L19 12L5.5 4.14z" />
  </SvgIcon>
);

function statPriorityElement(statPriority: StatPriority, nextStatPriority?: StatPriority) {
  let comparison: Array<JSX.Element> | null = null;
  const upTo = statPriority.upToValue !== undefined ? `(up to ${statPriority.upToValue})` : null;
  if (nextStatPriority !== undefined) {
    comparison = statPriority.priority === nextStatPriority.priority ? Array<JSX.Element>(1).fill(ApproximatelyEqualIcon) : Array<JSX.Element>(nextStatPriority.priority - statPriority.priority).fill(GreaterThanIcon);
  }
  return (
    <React.Fragment>{statPriority.stat.longName}{upTo}{comparison}</React.Fragment>
  );
}

export default function InlineStatPriorityDisplay(props: InlineStatPriorityDisplayProps) {
  const content = [];
  for (let index = 0; index < props.priorities.length; index++) {
    const statPriority = props.priorities[index];
    const nextStatPriority = (index+1) < props.priorities.length ? props.priorities[index+1] : undefined;
    content.push(statPriorityElement(statPriority, nextStatPriority));
  }

  return (
    <Typography paragraph>{content}</Typography>
  );
}