import { useContext, useState } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Box, colors, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { sidebarMenu } from "./sidebarCategories";
import user from "../../assets/user.png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      icon={icon}
      onClick={() => setSelected(title)}
      style={{ color: colors.grey[500] }}
      component={<Link to={to} />}
    >
      {!isCollapsed && <Typography>{title}</Typography>}
      {/* <Link /> */}
    </MenuItem>
  );
};

function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .ps-sidebar-root ": {
          backgroundColor: `${colors.primary[400]} !important`,
          height: "100%",
        },
        "& .ps-sidebar-container": {
          backgroundColor: "transparent !important",
        },
        "& .ps-menu-button": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .ps-menu-button:hover, .MuiButtonBase-root:hover": {
          color: "#868dfb !important",
          backgroundColor: `transparent !important`,
        },
        "& .ps-menu-button.ps-active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed} width="270px">
        <Menu>
          {/* LOGO AND MENU ICONS */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : null}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{ "& .MuiTypography-h3": { ml: "15px" } }}
            >
              {!isCollapsed && <Typography variant="h3">ADMINIS</Typography>}
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          </MenuItem>

          {!isCollapsed && (
            <Box marginBottom="25px">
              <Box display="flex" alignItems="center" justifyContent="center">
                <img
                  alt="user profile"
                  src={user}
                  width="100px"
                  style={{ cursor: "pointer" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[500]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Step Viz
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={!isCollapsed ? "10%" : null}>
            {sidebarMenu.map((category, index) => (
              <Box
                key={index}
                marginRight={isCollapsed ? "0" : "25px"}
                marginBottom="10px"
                sx={{ "&:last-child": { borderBottom: "none" } }}
              >
                {category.name && (
                  <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                  >
                    {category.name}
                  </Typography>
                )}
                {category.items.map((item) => (
                  <Item
                    key={item.title}
                    title={item.title}
                    to={item.path}
                    icon={<item.icon />}
                    selected={selected}
                    setSelected={setSelected}
                    isCollapsed={isCollapsed}
                  />
                ))}
              </Box>
            ))}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
}

export default SideBar;
