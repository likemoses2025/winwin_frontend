import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { colors } from "../styles/styles";

const ProductForm = ({ item, changeQuantity }) => {
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    changeQuantity(item.code, parseInt(quantity));
  }, [quantity]);

  return (
    <TextInput
      key={item.code}
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
      label={item.name}
      mode="outlined"
      value={item.quantity ? item.quantity.toString() : quantity.toString()}
      onChangeText={(text) => setQuantity(text)}
    />
  );
};

export default ProductForm;
