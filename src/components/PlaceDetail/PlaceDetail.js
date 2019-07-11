import React from "react";
import {
    Modal,
    View,
    Image,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const placeDetail = props => {
    let modalContent = null;

    console.log(props);

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image
                    source={props.selectedPlace.image}
                    style={styles.placeImage}
                />
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        );
    }
    return (
        <Modal
            onRequestClose={props.onModalClosed}
            visible={props.selectedPlace !== null}
            animationType="slide"
        >
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <TouchableOpacity>
                        <Button
                            title="Delete"
                            color="red"
                            onPress={props.onItemDeleted}
                        />
                        <Ionicons name="ios-trash" size={32} color="red" />
                    </TouchableOpacity>
                    <Button title="Close" onPress={props.onModalClosed} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
});

export default placeDetail;
