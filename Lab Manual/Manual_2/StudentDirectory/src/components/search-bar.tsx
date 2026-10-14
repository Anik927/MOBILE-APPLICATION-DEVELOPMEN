import {StyleSheet, TextInput, View} from "react-native";

interface SearchProps{
    value: string;
    OnChangeText: (text: string) => void;
    placeHolder?: string;
}

export default function SearchBar({ value, OnChangeText, placeHolder}: SearchProps) {
    return(
        <View style={styles.container}>
            <TextInput 
            style={styles.input}
            value={value}
            onChangeText={OnChangeText}            
            placeholder={placeHolder ?? "Search Students..."}
            placeholderTextColor="#94A3B8"
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="while-editing"
            returnKeyType="search"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: "#FFFFFF",
        borderBottomWidth: 1,
        borderBottomColor: "#E2E8F0",
    },
    input: {
        backgroundColor: "#F1F5F9",
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 10,
        fontSize: 15,
        color: "#1E293B",
    },
});