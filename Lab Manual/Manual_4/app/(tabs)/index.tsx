// NEW: import FlatList
import { FlatList, StyleSheet, Text, View } from "react-native";
import StudentItem from "@/components/student-item";
import { STUDENTS } from "@/data/students";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/search-bar";
import { useState } from "react";

export default function HomeScreen() {
  const [query, setQuery] = useState<string>("");

  // NEW: filtered list, computed from query on every render
  const filtered = STUDENTS.filter((s) => {
    return (
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.department.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Student Directory</Text>
        {/* NEW: shows how many students match */}
        <Text style={styles.count}>{filtered.length} students</Text>
      </View>

      <SearchBar value={query} onChangeText={setQuery} />

      {/* NEW: FlatList replaces STUDENTS.map(...) */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StudentItem student={item} onPress={() => {}} isSelected={false} />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No students match "{query}"</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
});