import { FlatList, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StudentItem from "@/components/student-item";
<<<<<<< HEAD
import SearchBar from "@/components/search-bar";
import { Student, STUDENTS } from "@/data/students";

export default function HomeScreen(){
  const [query, setQuery] = useState<string>("");

  const filtered = STUDENTS.filter((s) => {
    return s.name.toLowerCase().includes(query.toLowerCase()) || s.department.toLowerCase().includes(query.toLowerCase());  
  });
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Student Directory</Text>
        <Text style={styles.count}>{filtered.length} student</Text>
      </View>

    <SearchBar value={query} OnChangeText={setQuery}/>

    <FlatList 
      data={filtered}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <StudentItem student={item} OnPress={() => {}} isSelected={false}/>}
      ListEmptyComponent={
        <View style={styles.empty}>
          <Text style={styles.emptyText}>No Student Match</Text>
        </View>
      }
      />

=======
import { Student, STUDENTS } from "@/data/students";

export default function HomeScreen(){
  return(
    <SafeAreaView style={styles.container}>
      {STUDENTS.map((student) => (
        <StudentItem key={student.id} student={student} OnPress={() => {}} isSelected={false}/>
      ))}
>>>>>>> fc685ac580e26d39edb84d8107627f4f5123eda3
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
<<<<<<< HEAD
        backgroundColor: "#F0F4F8",
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: "#0D1F4E",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    count: {
        fontSize: 12,
        color: "#CCFBF1",
    },
    empty: {
        padding: 40,
        alignItems: "center",
    },
    emptyText: {
        fontSize: 14,
        color: "#94A3B8",
=======
>>>>>>> fc685ac580e26d39edb84d8107627f4f5123eda3
    },
});