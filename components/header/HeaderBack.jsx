import React from 'react';
import {Linking, Image, TouchableHighlight, StyleSheet} from "react-native";
import { THEME } from "../../theme";

const HeaderBack = ({ onPress }) => {
    return (
        <TouchableHighlight style={styles.container} onPress={() => onPress()}>
            <Image style={styles.img} source={require("../../assets/arrow_back.png")}/>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: THEME.offsetHorizontal,
    },
    img: {
        width: 16,
        height: 16,
    },
});

export default HeaderBack;