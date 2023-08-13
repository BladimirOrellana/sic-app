import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import TextField from "@mui/material/TextField";
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create Tanda
            </Typography>
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              type="text"
              label="Nombre De La Tanda"
              placeholder="Tu Nombre, etc..."
              variant="outlined"
            />
            <Button style={{ marginTop: 5 }} fullWidth variant="outlined">
              Crear
            </Button>
            <Button
              onClick={() => setOpen(false)}
              style={{ marginTop: 5 }}
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
