import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../config/colors";
import cities from "../../config/cities";

function DropDownCity({
  placeholder,
  setValue,
  value,
  containerStyle,
  dropDownContainerStyle,
  style,
  textStyle,
  iconColor,
}) {
  const [openFrom, setOpenFrom] = useState(false);
  const [items, setItems] = useState(cities);
  return (
    <DropDownPicker
      placeholder={placeholder}
      open={openFrom}
      value={value}
      items={items}
      setOpen={setOpenFrom}
      setValue={setValue}
      setItems={setItems}
      textStyle={[styles.textStyle, textStyle]}
      containerStyle={[styles.containerStyle, containerStyle]}
      style={[styles.style, style]}
      dropDownContainerStyle={[
        styles.dropDownContainerStyle,
        dropDownContainerStyle,
      ]}
      searchTextInputStyle={[styles.searchTextInputStyle]}
      searchable={true}
      searchPlaceholder={"City Name"}
      itemSeparator={false}
      ArrowUpIconComponent={() => (
        <AntDesign name="up" size={24} color={[colors.white, iconColor]} />
      )}
      ArrowDownIconComponent={() => (
        <AntDesign name="down" size={24} color={[colors.white, iconColor]} />
      )}
    />
  );
}

export default DropDownCity;
