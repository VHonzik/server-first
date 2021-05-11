import { createStyles, IconButton, makeStyles, Theme } from "@material-ui/core";

type TimeControlProps = {
  label: string;
  icon: JSX.Element;
  disabled: boolean;
  disabledColor: string;
  onClick: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:disabled': {
        color: (props: TimeControlProps) => props.disabledColor,
      }
    },
  }),
);


export default function TimeControl(props: TimeControlProps) {
  const classes = useStyles(props);
  const {label, icon, disabled} = props;

  return (
      <IconButton aria-label={label} disabled={disabled} classes={{
        root: classes.root
      }} onClick={props.onClick}>
        {icon}
      </IconButton>
  );
}