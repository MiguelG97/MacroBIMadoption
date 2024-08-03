import {
  createTheme,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function MSelector({
  onChangeCallback,
  defaultValue,
  menuItems,
}: {
  onChangeCallback: (e: SelectChangeEvent) => void;
  defaultValue: string;
  menuItems: { text: string; value: string }[];
}) {
  const theme = createTheme({
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontSize: 12,
            color: "#4d4d4d",
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Select
        onChange={onChangeCallback}
        sx={{
          color: "#4d4d4d",
          height: 40,
          fontSize: 14,
          "& fieldset": {
            border: "solid 1px #A3AED0",
          },
          "&.Mui-focused fieldset": {
            border: "solid 2px #A3AED0 !important",
          },
          ":hover fieldset": { border: "solid 2px #A3AED0 !important" },
        }}
        defaultValue={defaultValue}
        IconComponent={(props) => {
          return <IoIosArrowDown {...props} color="black" />;
        }}
      >
        {menuItems.map((x) => (
          <MenuItem key={x.value} value={x.value}>
            {x.text}
          </MenuItem>
        ))}

        {/* what about other type of answers? */}
      </Select>
    </ThemeProvider>
  );
}
