import MembersTable from "../components/MembersTable";
import { Typography } from "@material-ui/core";

export default function Members() {
  return (
    <div>
      <Typography variant="h1" component="h2" gutterBottom>Guild Members</Typography>
      <MembersTable />
    </div>
  );
}