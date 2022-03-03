import React from "react";
import { Typography } from "@mui/material";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";
import PhoneIcon from "@mui/icons-material/Phone";
import WifiIcon from "@mui/icons-material/Wifi";

const Products = ({ activeUser }) => {
  const productIcon = (productKind) => {
    if (productKind === "TELCO") return <PhoneIcon />;
    if (productKind === "VOIP") return <WifiIcon />;
    if (productKind === "WEBSITE") return <LaptopWindowsIcon />;
  };
  return (
    <div className="details-card products">
      <div className="products__heading">
        <Typography variant="h5">My Products</Typography>
        <Typography variant="subtitle2" sx={{ color: "rgb(97, 115, 133)" }}>
          All your products at a glance
        </Typography>
      </div>

      {activeUser.products.map((product) => (
        <div className="products-item" key={product.product_id}>
          {productIcon(product.product_kind)}
          <div className="product-info">
            {product.product_kind} - {product.product_detail}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
