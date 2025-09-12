import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Tabs,
  Tab,
} from "@mui/material";
import bgImage from "../../assets/Background_img.webp";
import loginConfig from "../../Config/LoginConfig";

const LoginPage = () => {
  const [tab, setTab] = useState(0);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: { xs: "100%", sm: 400 },
          borderRadius: 4,
          boxShadow: 6,
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(2px)",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          {/* Tabs */}
          <Tabs
            value={tab}
            onChange={(e, val) => setTab(val)}
            centered
            sx={{
              mb: 3,
              "& .MuiTab-root": { fontWeight: "bold", fontSize: "1.5rem" },
            }}
          >
            {loginConfig.map((item, i) => (
              <Tab key={i} label={item.tab} />
            ))}
          </Tabs>

          {loginConfig.map(
            (item, i) =>
              tab === i && (
                <Box key={i}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 1, textAlign: "center" }}>
                    {item.title}
                  </Typography>
                
                  {item.fields.map((field, j) => (
                    <TextField
                      key={j}
                      label={field.label}
                      type={field.type}
                      fullWidth
                      margin="normal"
                    />
                  ))}

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 2,
                      py: 1.2,
                      borderRadius: 3,
                      background: item.button.gradient,
                    }}
                  >
                    {item.button.text}
                  </Button>
                </Box>
              )
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
