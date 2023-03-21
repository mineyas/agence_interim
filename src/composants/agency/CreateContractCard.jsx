import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box, Button, Card, Container, Modal, Paper } from "@material-ui/core";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import SendOutlined from "@material-ui/icons/SendOutlined";

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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor: 'pink',
    width: 300,
    height: 150,
    padding: 20,
  },
  modalCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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

export default function CreateContractCard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <Container className={classes.container}>
        <Typography component="h2" variant="h6" color="primary">
          New Contract
        </Typography>
        <Card className={classes.card}>
          <Typography component="p" variant="h4">
            Contract n°12
          </Typography>
          <Typography color="textSecondary" className={classes.depositContext}>
            on 15 March, 2019
          </Typography>
          <div >
            <Link onClick={handleOpen} color="primary">
              Create Contract
            </Link>
            <Modal
              aria-labelledby="spring-modal-title"
              aria-describedby="spring-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
            >
              <Box className={classes.modalCard}>
                <Typography color="secondary" id="spring-modal-title" variant="h6" component="h2">
                  Send Contract to{" "}
                </Typography>
                <Typography color="secondary"  component="h2" variant="h6">
                  Description Mission:
                </Typography>
                <Typography color="secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                  iusto voluptates accusamus repudiandae et dolores
                  exercitationem ad consequuntur architecto perspiciatis
                </Typography>
                <Typography color="secondary"  component="h2" variant="h6">
                  Duréé:
                </Typography>
                <Typography color="secondary">
                 6 Mois
                </Typography>
                <div >
                  <SendOutlined htmlColor="blue" />
                </div>
              </Box>
            </Modal>
          </div>
        </Card>
      </Container>
    </React.Fragment>
  );
}
