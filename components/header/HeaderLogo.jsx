import React from 'react';
import {Image, View, StyleSheet} from "react-native";
import { THEME } from "../../theme";

const HeaderLogo = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require("../../assets/logo_x2.png")}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      marginHorizontal: THEME.offsetHorizontal,
    },
    img: {
        width: 56,
        height: 24,
        marginRight: 10,
    },
});

export default HeaderLogo;