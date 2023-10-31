import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Typography, TextField } from "@mui/material";
import styles from "./Header.module.css"

function Header() {
  return (
    <div>
      <div className={styles.header_logo}>
        <StorefrontIcon className="header_logo_image" fontSize="large" />
        <Typography variant="h6" component="h6">
          eShop
        </Typography>
      </div>
      <div className="header_search">
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          size="small"
        />
        <SearchIcon fontSize="large" className="header_search_icon"/>
      </div>
      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_item1">Hello Guest</span>
          <span className="nav_item2">Sign In</span>
        </div>
        <div className="nav_item">
          <span className="nav_item1">Your </span>
          <span className="nav_item2">Shop</span>
        </div>
        <div className="nav_item">
          <span className="nav_item1">
            <ShoppingBasketIcon />
          </span>
          <span className="nav_item2">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
