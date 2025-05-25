import React, { FC, memo, useCallback, useMemo, MouseEvent } from "react";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { useMenu } from "hooks";
import { IEmail } from "interfaces";
import { getContextualMenuOptions } from "./getContextualMenuOptions";

interface IProps {
  email: IEmail;
  onUpdateEmail: (changes: Partial<IEmail>) => void;
}

export const ContextualMenu: FC<IProps> = memo(({ email, onUpdateEmail }) => {
  const { anchorEl, isMenuOpen, handleOpenMenu, handleCloseMenu } = useMenu();

  const options = useMemo(
    () => getContextualMenuOptions({ email, onUpdateEmail }),
    [email, onUpdateEmail]
  );

  const openContextualMenu = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.stopPropagation();

      handleOpenMenu(event.currentTarget as HTMLElement);
    },
    [handleOpenMenu]
  );

  return (
    <>
      <IconButton size="small" onClick={openContextualMenu}>
        <MoreVertIcon fontSize="small" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {options.map(({ id, title, onClick }) => (
          <MenuItem
            key={id}
            onClick={(event: MouseEvent<HTMLElement>) => {
              event.stopPropagation();
              onClick();
            }}
          >
            <ListItemText>{title}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
});
