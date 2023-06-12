import React, { useEffect, useState } from "react";
import { DataTable } from "react-native-paper";
import { ScrollView, View } from "react-native";
import { colors } from "../styles/styles";

const nf = new Intl.NumberFormat();

const TableComponent = ({ orderItems = [], refundItems = [] }) => {
  const textStyle = { color: "white", fontWeight: "700", fontSize: 15 };
  const [tableItems, setTableItems] = useState("");
  console.log("orderItems: " + JSON.stringify(orderItems));
  console.log("refundItems: " + JSON.stringify(refundItems));
  if (orderItems?.length > 0) {
    setTableItems(orderItems);
  } else if (refundItems?.length > 0) {
    setTableItems(refundItems);
  } else {
    return null;
  }

  return (
    <DataTable style={{ marginTop: 15 }}>
      <DataTable.Header
        style={{
          backgroundColor: colors.color3,
          borderRadius: 5,
          borderWidth: 0.4,
        }}
      >
        <DataTable.Title style={{ flex: 2 }} textStyle={textStyle}>
          제품명
        </DataTable.Title>
        <DataTable.Title
          textStyle={textStyle}
          style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
          numeric
        >
          수량
        </DataTable.Title>
        <DataTable.Title
          textStyle={textStyle}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          numeric
        >
          단가
        </DataTable.Title>
        <DataTable.Title
          textStyle={textStyle}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          numeric
        >
          금액
        </DataTable.Title>
      </DataTable.Header>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: "80%",
          borderWidth: 0.5,
          marginTop: 5,
          borderRadius: 10,
        }}
      >
        {tableItems.map((item) => (
          <DataTable.Row key={item.code} style={{ borderBottomWidth: 1 }}>
            <DataTable.Cell style={{ flex: 1.7 }}>{item.name}</DataTable.Cell>
            <DataTable.Cell style={{ flex: 0.5 }} numeric>
              {nf.format(item.quantity)}
            </DataTable.Cell>
            <DataTable.Cell style={{ flex: 1 }} numeric>
              {nf.format(item.price)}
            </DataTable.Cell>
            <DataTable.Cell style={{ flex: 1 }} numeric>
              {nf.format(item.quantity * item.price)}
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </ScrollView>
    </DataTable>
  );
};

export default TableComponent;
