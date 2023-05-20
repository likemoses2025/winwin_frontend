import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";

const ProductForm = ({ product, changeQuantity }) => {
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    changeQuantity(product.code, parseInt(quantity));
  }, [quantity]);

  return (
    <TextInput
      key={product.no}
      keyboardType="numeric"
      style={{ fontSize: 12, width: 120 }}
      label={product.name}
      mode="outlined"
      value={quantity}
      onChangeText={(text) => setQuantity(text)}
    />
  );
};

export default ProductForm;
