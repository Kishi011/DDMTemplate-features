import { Image, StyleSheet } from "react-native";

export default function DvDScreen() {
    return (
        <Image
            style={styles.image}
            source={require('@/assets/images/dvdscreen.gif')}
        />
    );
}

const styles = StyleSheet.create({
    image: {
        marginTop: -43,
        width: '100%',
        height: '100vh',
    }
});