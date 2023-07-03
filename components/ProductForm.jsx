import React, { useEffect, useState } from "react";
import { TextInput, DefaultTheme } from "react-native-paper";
import { colors } from "../styles/styles";

const ProductForm = ({ item, changeQuantity }) => {
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    changeQuantity(item.code, parseInt(quantity));
  }, [quantity]);

  // 숫자만 포함된 값인지 확인하는 정규식
  const numberRegex = /^[0-9]*$/;

  const handleInputChange = (text) => {
    // 숫자만 포함된 값인지 검사
    if (numberRegex.test(text)) {
      setQuantity(text);
    }
  };

  return (
    <TextInput
      key={item.code}
      selectionColor={colors.color_s3}
      activeOutlineColor={colors.color_s3}
      textColor={colors.color_s3}
      keyboardType="numeric"
      style={{
        padding: 0,
        fontSize: 12,
        width: 120,
        fontWeight: "bold",
        height: 40,
        marginTop: 20,
      }}
      label={item.name}
      mode="outlined"
      value={item.quantity ? item.quantity.toString() : quantity.toString()}
      // onChangeText={(text) => setQuantity(text)}
      onChangeText={handleInputChange}
    />
  );
};

export default ProductForm;
