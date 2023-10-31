import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Typography, TextField, InputAdornment } from "@mui/material";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <StorefrontIcon className="header_logo_image" fontSize="large" />
        <Typography variant="h6" component="h6" className={styles.head_title}>
          eShop
        </Typography>
      </div>
      <div className="header_search">
        <TextField
          id="outlined-basic"
          label="Search Amazon"
          variant="outlined"
          size="small"
          className={styles.inputStyle}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {/* <SearchIcon fontSize="large" className={styles.header_search_icon} /> */}
      </div>
      <div className={styles.header_nav}>
        <div className={styles.nav_item}>
          <Typography variant="caption" className={styles.nav_item1}>
            Hello Guest
          </Typography>
          <Typography variant="subtitle2" className={styles.nav_item2}>
            Sign In
          </Typography>
        </div>
        <div className={styles.nav_item}>
          <Typography variant="caption" className={styles.nav_item1}>
            Your{" "}
          </Typography>
          <Typography variant="subtitle2" className={styles.nav_item2}>
            Shop
          </Typography>
        </div>
        <div className={`styles.nav_item styles.basketCount`}>
          <ShoppingCartCheckoutIcon className={styles.itemBasket} />

          <Typography variant="subtitle2" className={`styles.nav_item2 `}>
            0
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Header;
