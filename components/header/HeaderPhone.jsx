import React from 'react';
import {Linking, Image, TouchableHighlight, StyleSheet} from "react-native";
import { THEME } from "../../theme";

const HeaderPhone = () => {
    const handlePress = () => {
        Linking.openURL(`tel:+79999999999`)
    };

    return (
        <TouchableHighlight style={styles.container} onPress={handlePress}>
            <Image style={styles.img} source={require("../../assets/phone.png")}/>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: THEME.offsetHorizontal,
    },
    img: {
        width: 24,
        height: 24,
    },
});

export default HeaderPhone;