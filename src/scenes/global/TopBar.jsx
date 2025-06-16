import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { IconButton, useTheme } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

export default function TopBar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      {/* SEARCH BAR */}
      <Box
        component="form"
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <Input
          sx={{
            ml: 2,
            fontSize: theme.typography.fontSize,
            // border: "none",
          }}
          aria-label="Search"
          placeholder="Search"
          // flex={1}
          disableUnderline
        />
        <IconButton type="button" sx={{ p: 1 }} aria-label="search">
          <SearchIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Icon Bar  */}
      <Box borderRadius={3} display="flex">
        <IconButton type="button" onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeIcon />
          )}
        </IconButton>
        <IconButton type="button">
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton type="button">
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton type="button">
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
