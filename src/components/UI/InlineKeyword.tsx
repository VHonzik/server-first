import { Box, Tooltip, Link, makeStyles, createStyles, Theme } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    keywordText: {
      textDecorationLine: 'underline',
      textDecorationStyle: 'dotted',
    },
  }),
);

type InlineKeywordProps = {
  tooltipText: string;
  encyclopediaUrl: string;
  keyword: string;
}

export default function InlineKeyword(props: InlineKeywordProps) {
  const classes = useStyles();
  const {tooltipText, encyclopediaUrl, keyword} = props;

  return (
    <Tooltip title={tooltipText}>
      <Box component="span">
        <Link color="inherit" component={RouterLink} to={encyclopediaUrl} className={classes.keywordText}>
          {keyword}
        </Link>
      </Box>
    </Tooltip>
  )
};