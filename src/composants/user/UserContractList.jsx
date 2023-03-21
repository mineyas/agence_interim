import {
  Link,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

import ArrowDownward from "@material-ui/icons/ArrowDownward";
import CheckBoxOutlined from "@material-ui/icons/CheckBoxOutlined";
import Clear from "@material-ui/icons/Clear";

import React from "react";
function createAgencyList(id, date, nameAgency, typeContract, duration) {
  return { id, date, nameAgency, typeContract, duration };
}

const agenciesContracts = [
  createAgencyList(0, "17 Mar, 2022", "Leos", "CDD", "1 ans"),
  createAgencyList(1, "17 Mar, 2022", "Le Boss is you", "CDI", ""),
  createAgencyList(2, "16 Mar, 2022", "Agence", "CDD", "3 mois"),
  createAgencyList(3, "16 Mar, 2022", "La Bonne Agence", "CDD", "1 mois"),
];

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

export default function UserContractList() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Contrat Terminé
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Nom Agence</TableCell>
            <TableCell>Type de Contrat</TableCell>
            <TableCell>Duré</TableCell>
            <TableCell>Telecharger PDF</TableCell>
            <TableCell>Reponse</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {agenciesContracts.map((contract, index) => (
            <TableRow key={contract.id}>
              <TableCell>{contract.date}</TableCell>
              <TableCell>{contract.nameAgency}</TableCell>
              <TableCell>{contract.typeContract}</TableCell>
              <TableCell>{contract.duration}</TableCell>
              <TableCell>
                <ArrowDownward htmlColor="blue" />
              </TableCell>
              <TableCell>
                {index % 3 === 0 ? (
                  <CheckBoxOutlined htmlColor="green" />
                ) : (
                  <Clear htmlColor="red" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="">
          See more contracts
        </Link>
      </div>
    </React.Fragment>
  );
}
