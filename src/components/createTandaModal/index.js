import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ApiTanda from "../../api/tanda";
import TextField from "@mui/material/TextField";
import { createTandaAction } from "../../redux/actions/createTandaAction";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CreateTandaModal() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [tandaName, setTandaname] = useState(null);
  const [numberOfWeeks, setNumberOfWeeks] = useState(null);
  const [pricePerNumber, setPricePerNumber] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  const handleSumit = (e) => {
    e.preventDefault();
    if (tandaName === null) {
      setMessage("Porfavor escrive el nombre para la tanda.");
    } else {
      const data = {
        tandaName: tandaName,
        createdBy: user._id,
        numberOfWeeks: numberOfWeeks,
        pricePerNumber: pricePerNumber,

        createdAt: Date.now(),
      };
      dispatch(createTandaAction(data));
      handleClose();
    }
  };
  return (
    <div>
      <Button onClick={handleOpen}>Create Tanda</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            {message}
            <div style={{ textAlign: "center" }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Create Tanda
              </Typography>
            </div>
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              style={styles.margingTop}
              onChange={(e) => setTandaname(e.target.value)}
              fullWidth
              type="text"
              label="Nombre De La Tanda"
              placeholder="Tu Nombre, etc..."
              variant="outlined"
            />
            <TextField
              style={styles.marginTop}
              onChange={(e) => setNumberOfWeeks(e.target.value)}
              fullWidth
              type="number"
              label="cuantas semanas?"
              placeholder="Duracion en semanas "
              variant="outlined"
            />

            <TextField
              style={styles.marginTop}
              onChange={(e) => setPricePerNumber(e.target.value)}
              fullWidth
              type="number"
              label="Valor del numero"
              placeholder="$"
              variant="outlined"
            />
            <Button
              onClick={(e) => handleSumit(e)}
              style={styles.marginTop}
              fullWidth
              variant="outlined"
            >
              Crear
            </Button>
            <Button
              onClick={handleClose}
              style={styles.marginTop}
              variant="text"
            >
              Cancelar
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

//NOTES CONTINUE ADDING REDUX SAGA TO CREATE TANDA
const styles = {
  marginTop: {
    marginTop: 5,
  },
};
