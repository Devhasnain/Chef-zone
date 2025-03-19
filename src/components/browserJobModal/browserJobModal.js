import { Modal, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { memo } from "react";

import styles from "./BrowserJobModal.style";
import Label from "../../config/Label";
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
                            <Text style={styles.closeButton}>{Label.close}</Text>
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>{Label.filters}</Text>

                        <Text style={{ paddingBottom: 15 }}>{Label.shiftType}</Text>
                        <View style={styles.radioGroup}>
                            <TouchableOpacity style={styles.separateWidth} onPress={() => setFilterValues({ ...filterValues, shiftType: 'Temporary' })}>
                                <Text style={filterValues.shiftType === 'Temporary' ? styles.selectedRadio : styles.radio}>{Label.temporary}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.separateWidth} onPress={() => setFilterValues({ ...filterValues, shiftType: 'Permanent' })}>
                                <Text style={filterValues.shiftType === 'Permanent' ? styles.selectedRadio : styles.radio}>{Label.Permanent}</Text>
                            </TouchableOpacity>
                        </View>

                        <Input
                            placeholder={Label.enterCityName}
                            value={filterValues.city}
                            onChange={(text) => setFilterValues({ ...filterValues, city: text })}
                        />
                        <Input
                            placeholder={Label.entershiftRole}
                            value={filterValues.shiftRole}
                            onChange={(text) => setFilterValues({ ...filterValues, shiftRole: text })}
                        />

                        <Text>{Label.hourlyRate}</Text>
                        <View style={styles.rateContainer}>
                            <View style={styles.separateWidth}>
                                <Input
                                    placeholder={Label.min}
                                    keyboardType="numeric"
                                    value={filterValues.minRate}
                                    onChange={(text) => setFilterValues({ ...filterValues, minRate: text })}
                                />
                            </View>
                            <View style={styles.separateWidth}>
                                <Input
                                    placeholder={Label.max}
                                    keyboardType="numeric"
                                    value={filterValues.maxRate}
                                    onChange={(text) => setFilterValues({ ...filterValues, maxRate: text })}
                                />
                            </View>
                        </View>
                        <Button text={Label.apply}onPress={() => {
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