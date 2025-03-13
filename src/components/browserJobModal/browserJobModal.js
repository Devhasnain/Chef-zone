import { Modal, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { memo } from "react";

import styles from "./browserJobModal.style";
import Button from "../button/Button";
import Input from "../input/Input";


const BrowserJobFilterModal = ({modalVisible, setModalVisible, filterValues, setFilterValues, filterJobs}) => {
    return (
        <View>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text style={styles.closeButton}>Close</Text>
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>Filters</Text>

                        <Text style={{ paddingBottom: 15 }}>Shift Type</Text>
                        <View style={styles.radioGroup}>
                            <TouchableOpacity style={styles.separateWidth} onPress={() => setFilterValues({ ...filterValues, shiftType: 'Temporary' })}>
                                <Text style={filterValues.shiftType === 'Temporary' ? styles.selectedRadio : styles.radio}>Temporary</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.separateWidth} onPress={() => setFilterValues({ ...filterValues, shiftType: 'Permanent' })}>
                                <Text style={filterValues.shiftType === 'Permanent' ? styles.selectedRadio : styles.radio}>Permanent</Text>
                            </TouchableOpacity>
                        </View>

                        <Input
                            placeholder="Enter city name"
                            value={filterValues.city}
                            onChange={(text) => setFilterValues({ ...filterValues, city: text })}
                        />
                        <Input
                            placeholder="Enter shift role"
                            value={filterValues.shiftRole}
                            onChange={(text) => setFilterValues({ ...filterValues, shiftRole: text })}
                        />

                        <Text>Hourly Rate:</Text>
                        <View style={styles.rateContainer}>
                            <View style={styles.separateWidth}>
                                <Input
                                    placeholder="Min"
                                    keyboardType="numeric"
                                    value={filterValues.minRate}
                                    onChange={(text) => setFilterValues({ ...filterValues, minRate: text })}
                                />
                            </View>
                            <View style={styles.separateWidth}>
                                <Input
                                    placeholder="Max"
                                    keyboardType="numeric"
                                    value={filterValues.maxRate}
                                    onChange={(text) => setFilterValues({ ...filterValues, maxRate: text })}
                                />
                            </View>
                        </View>
                        <Button text="Apply" onPress={() => {
                            filterJobs(filterValues);
                            setModalVisible(false);
                        }} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default memo(BrowserJobFilterModal);