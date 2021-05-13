import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import green from '@material-ui/core/colors/green';

type SuccessButtonProps = {
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    color: theme.palette.getContrastText(theme.palette.success[theme.palette.type]),
    backgroundColor: theme.palette.success[theme.palette.type],
    '&:hover': {
      backgroundColor: theme.palette.type === 'light' ? green[400] : green[800],
    },
  }
}));

export default function SuccessButton(props: SuccessButtonProps) {
  const classes = useStyles();
  return (
    <Button variant="contained" classes={{root: classes.root}}>{props.children}</Button>
  );
}