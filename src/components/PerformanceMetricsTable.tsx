import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container, makeStyles } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from '@material-ui/icons/Remove';
import ClassPerformanceMetric, { PerformanceMetricsObject, PerformanceMetricScore } from '../server-first/ClassPerformanceMetric';

type PerformanceMetricsTableProps = {
  scores: PerformanceMetricsObject
}

const useStyles = makeStyles({
  table: {
  },
});

const plusIcon = <AddIcon style={{ color: green[500] }} />;
const minusIcon = <RemoveIcon style={{ color: red[500] }} />;


function scoreToSymbols(score: PerformanceMetricScore) {
  return score >= 0 ? Array<JSX.Element>(score).fill(plusIcon) : Array<JSX.Element>(-score).fill(minusIcon);
}

function scoreRow(key: string, name: string, score: PerformanceMetricScore) {
  return (
    <TableRow key={key}>
      <TableCell component="th" scope="row">{name}</TableCell>
      <TableCell align="right">{scoreToSymbols(score)}</TableCell>
    </TableRow>
  )
}

export default function PerformanceMetricsTable(props: PerformanceMetricsTableProps) {
  const classes = useStyles();

  const scoreRows = ClassPerformanceMetric.DPSMetrics.map(performanceMetric => {
    return scoreRow(performanceMetric.objectKey, performanceMetric.displayName, props.scores[performanceMetric.objectKey])
  });

  return (
    <Container maxWidth='md'>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Performance metric</TableCell>
              <TableCell align="right">Score (--- to +++)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {scoreRows}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}