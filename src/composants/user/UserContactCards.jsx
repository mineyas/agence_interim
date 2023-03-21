import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  Modal,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import CheckBoxOutlined from "@material-ui/icons/CheckBoxOutlined";
import Clear from "@material-ui/icons/Clear";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  container: {
    marginTop: 105,
    padding: 20,
    border: "1px solid #D8D8D8",
  },
  card: {
    border: "1px solid #7DB9B6",
    marginTop: 35,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 300,
    height: 150,
    padding: 20,
  },
  modalCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 60,
    width: 600,
    height: 200,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#7DB9B6",
    border: "1px solid #000",
  },
});

function contractCard(id, date, nameAgency, typeContract, duration) {
  return { id, date, nameAgency, typeContract, duration };
}

const contracts = [
  contractCard(0, "20 Mar, 2023", "La Bonne Agence", "CDD", "6 mois"),
  contractCard(1, "17 Mar, 2023", "Agence", "CDI", ""),
  contractCard(2, "16 Mar, 2023", "Work Better", "CDD", "3 mois"),
  contractCard(3, "14 Mar, 2023", "La Bonne Agence", "CDD", "1 mois"),
];

export default function UserContactCards() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <Container className={classes.container}>
        <Typography component="h2" variant="h6" color="primary">
          Contracts Availables
        </Typography>
        <Grid container>
          {contracts.map((contract) => (
            <Grid item xs={12} md={6} lg={4} key={contract.id}>
              <Card elevation={1} className={classes.card}>
                <CardHeader
                  action={
                    <IconButton
                    // onClick={() => handleDelete(contract.id)}
                    >
                      <DeleteOutlined />
                    </IconButton>
                  }
                  title={contract.nameAgency}
                  subheader={contract.typeContract}
                />
                <CardContent>
                  <Typography variant="body2" >
                    {contract.date}
                  </Typography>
                </CardContent>
                <div>
                  <Link onClick={handleOpen} color="primary">
                    Open Contract
                  </Link>
                  <Modal
                    aria-labelledby="spring-modal-title"
                    aria-describedby="spring-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                  >
                    <Box className={classes.modalCard}>
                      <Typography
                        color="secondary"
                        id="spring-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Contract sent from: {contract.nameAgency}
                      </Typography>
                      <Typography color="secondary" component="h2" variant="h6">
                        Description Mission:
                      </Typography>
                      <Typography color="secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quia iusto voluptates accusamus repudiandae et
                        dolores exercitationem ad consequuntur architecto
                        perspiciatis
                      </Typography>
                      <Typography color="secondary" component="h2" variant="h6">
                        Duréé:
                      </Typography>
                      <Typography color="secondary">
                        {contract.duration}
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <ArrowDownward htmlColor="blue" />
                        <CheckBoxOutlined htmlColor="green" />
                        <Clear htmlColor="red" />
                      </div>
                    </Box>
                  </Modal>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
