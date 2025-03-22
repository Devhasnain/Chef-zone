import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  logo: { width: 50, height: 50, borderRadius: 8, marginRight: 10 },
  jobInfo: { flex: 1 },
  title: { fontSize: 18, fontWeight: 'bold' },
  rating: { color: 'gray' },
  salaryContainer: { backgroundColor: '#1E90FF', padding: 16, borderRadius: 8, marginBottom: 16 },
  salaryText: { color: '#fff' },
  salaryAmount: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  approxSalary: { color: '#ddd' },
  shiftSection: { marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  shiftItem: { color: '#444', marginBottom: 4 },
  restrictionAlert: { backgroundColor: '#FF4C4C', padding: 10, borderRadius: 8, marginBottom: 16 },
  alertText: { color: '#fff', fontWeight: 'bold' },
  jobDescription: { marginBottom: 16 },
  description: { color: '#444', marginBottom: 8 },
  contactSection: { marginTop: 8, borderTopWidth: 1, borderColor: '#ddd', paddingTop: 8 },
  contact: { fontWeight: 'bold' },
  reference: { color: '#555' },
  jobId: { color: '#555' }
});