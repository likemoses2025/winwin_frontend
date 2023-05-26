import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { colors } from "../styles/styles";

const ProductForm = ({ product, changeQuantity }) => {
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    changeQuantity(product.code, parseInt(quantity));
  }, [quantity]);

  return (
    <TextInput
      key={product.code}
      selectionColor={colors.color_s3}
      activeOutlineColor={colors.color_s3}
      textColor={colors.color_s3}
      keyboardType="numeric"
      style={{
        fontSize: 12,
        width: 120,
        fontWeight: "bold",
        height: 40,
        marginTop: 20,
      }}
      label={product.name}
      mode="outlined"
      value={quantity}
      onChangeText={(text) => setQuantity(text)}
    />
  );
};

export default ProductForm;
