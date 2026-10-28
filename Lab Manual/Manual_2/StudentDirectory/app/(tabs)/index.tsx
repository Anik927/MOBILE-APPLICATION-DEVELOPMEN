import { StyleSheet } from "react-native";
// Our custom row component
import StudentItem from "@/components/student-item";
// The data array from Step 3
import { STUDENTS } from "@/data/students";
// Keeps content inside the safe area (away from the notch and status bar)
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Loop over STUDENTS and render one StudentItem per student */}
      {STUDENTS.map((student) => (
        <StudentItem
          key={student.id}
          student={student}
          onPress={() => {}}
          isSelected={false}
        />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});