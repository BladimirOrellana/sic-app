import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import postApi from "../../api/post";
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
  borderRadius: 5,
};

export default function CreateTandaModal() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log("create tanda ", user);
  const handleSumit = (e) => {
    e.preventDefault();
    if (title === null) {
      setMessage("Porfavor escrive el nombre para la tanda.");
    } else {
      const data = {
        title: title,
        createdBy: user._id,
        price: price,
        description: description,

        createdAt: Date.now(),
      };
      console.log(data);
      postApi
        .create(data)
        .then((r) => {
          console.log("result ", r);
        })
        .catch((e) => {
          console.log("error ", e);
        });
      handleClose();
    }
  };
  return (
    <div>
      <Button onClick={handleOpen}>Vender </Button>
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
                Vender Articulo, terreno, casa, etc...
              </Typography>
            </div>
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              style={styles.margingTop}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              type="text"
              label="Titulo"
              placeholder={"Titulo "}
              variant="outlined"
            />
            <TextField
              style={styles.marginTop}
              onChange={(e) => setPrice(e.target.value)}
              fullWidth
              type="number"
              label="Precio $"
              placeholder="Precio $ "
              variant="outlined"
            />

            <TextField
              style={styles.marginTop}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              type="text"
              label="Descripcion"
              placeholder="Descripcion"
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
