import {
  Container,
  Grid,
  Link,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";

function createAgencyList(id, date, nameAgency, typeContract, duration) {
  return { id, date, nameAgency, typeContract, duration };
}

const agencies = [
  createAgencyList(0, "16 Mar, 2023", "La Bonne Agence", "CDD", "6 mois"),
  createAgencyList(1, "16 Mar, 2023", "La Bonne Agence", "CDI", ""),
  createAgencyList(2, "16 Mar, 2023", "La Bonne Agence", "CDD", "3 mois"),
  createAgencyList(3, "16 Mar, 2023", "La Bonne Agence", "CDD", "1 mois"),
];
const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  paper: {
    // width: "500px",
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  container: {
    // marginTop: 105,
    padding: 20,
    border: "1px solid #D8D8D8",
  },
}));
export default function AgencyList() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <Title> Contact</Title> */}
      <Container className={classes.container}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Recent Contact
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Nom Agence</TableCell>
              <TableCell>Type de Contrat</TableCell>
              <TableCell>Duré</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {agencies.map((agency) => (
              <TableRow key={agency.id}>
                <TableCell>{agency.date}</TableCell>
                <TableCell>{agency.nameAgency}</TableCell>
                <TableCell>{agency.typeContract}</TableCell>
                <TableCell>{agency.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.seeMore}>
          <Link color="primary" href="">
            See more orders
          </Link>
        </div>
      </Container>
    </React.Fragment>
  );
}
