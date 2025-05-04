import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import Links from "../components/Links";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" }); // Clear form after submission
  };

  return (
    <>
    <Links/>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Contact Us
      </Typography>

      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <TextField
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          sx={{ marginBottom: "15px" }}
        />
        <TextField
          label="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          sx={{ marginBottom: "15px" }}
        />
        <TextField
          label="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          sx={{ marginBottom: "20px" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: "10px" }}
        >
          Send Message
        </Button>
      </form>
    </Box>
    </>
  );
};

export default Contact;
