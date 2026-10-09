import { FlatList, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StudentItem from "@/components/student-item";
import { Student, STUDENTS } from "@/data/students";

export default function HomeScreen(){
  return(
    <SafeAreaView style={styles.container}>
      {STUDENTS.map((student) => (
        <StudentItem key={student.id} student={student} OnPress={() => {}} isSelected={false}/>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});