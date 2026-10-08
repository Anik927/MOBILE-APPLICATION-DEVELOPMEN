import ProfileCard from "@/components/profile-card";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
    return (
        <ScrollView contentContainerStyle={styles.screen}>

            <StatusBar style="dark"/>
     
            <ProfileCard name="Mirza Anik" studentId="23-53728-3" department="CSE" bio="Aimless Person. Don't know what to do"/>
            <ProfileCard name="Sarar" studentId="23-53556-3" department="CSE" bio="Pro coder. Detarmined. Hard Headed"/>
            

            
        </ScrollView>


    );
    }

    const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#F0F4F8",
        alignItems: "center",
        paddingTop: 60,
        paddingBottom: 40,
    },
});