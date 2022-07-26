import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";

export default function Logged() {
  const blood = [
    { label: "A+" },
    { label: "A-" },
    { label: "B+" },
    { label: "B-" },
    { label: "AB+" },
    { label: "AB-" },
    { label: "O+" },
    { label: "O-" },
  ];
  const [openD, setOpenD] = React.useState(false);
  const [openR, setOpenR] = React.useState(false);
  const [value, setValue] = React.useState(null);

  const handleClickOpenD = () => {
    setOpenD(true);
  };

  const handleCloseD = () => {
    setOpenD(false);
  };
  const handleClickOpenR = () => {
    setOpenR(true);
  };

  const handleCloseR = () => {
    setOpenR(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          style={{
            color: "#CC1100",
            marginBottom: 15,
            marginTop: 15,
            marginLeft: 15,
          }}
        >
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={require("../../assets/img/doar.jpg")}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Adicionar doação
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Aqui você pode adicionar suas doações e continuar ajudando
                  outras pessoas!
                </Typography>
                <CardActions>
                  <Button size="small" onClick={() => handleClickOpenD()}>
                    Registrar
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={require("../../assets/img/pedir.png")}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pedir Doação
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Aqui você pode pedir uma doação para outras pessoas poderem
                  achar seu pedido!
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleClickOpenR()}>
                  Registrar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Dialog open={openD}>
        <DialogTitle>Registro de Doação</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor registre seu local e data de doação
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="local"
            label="Local de Doação"
            type="text"
            fullWidth
            variant="standard"
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              margin="normal"
              disableFuture
              value={value}
              inputFormat="dd/MM/yyyy"
              label="Data"
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseD()}>Cancelar</Button>
          <Button onClick={() => handleCloseD()}>Eu doei!</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openR}>
        <DialogTitle>Pedido de Doação</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor registre os Dados da Doação
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="local"
            label="Nome da Solicitante"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="local"
            label="Local de Solicitação"
            type="text"
            fullWidth
            variant="standard"
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={blood}
            renderInput={(params) => (
              <TextField {...params} label="Tipos Sanguíneos" />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseR()}>Cancelar</Button>
          <Button onClick={() => handleCloseR()}>Pedir!</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
