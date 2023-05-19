import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";

const ProductForm = ({ index, product, changeQuantity }) => {
  const [quantity, setQuantity] = useState("");

  const onChangeQuantity = (e) => {
    setQuantity(e.currentTarget.value);
  };

  useEffect(() => {
    changeQuantity(product.code, parseInt(quantity));
  }, [quantity]);

  return (
    <TextInput
      key={product.no}
      style={{ fontSize: 12, width: 120 }}
      label={product.name}
      mode="outlined"
      value={quantity}
      onChange={onChangeQuantity}
    />
  );
};

export default ProductForm;
