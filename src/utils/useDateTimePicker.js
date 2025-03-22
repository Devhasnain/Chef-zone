import {useState} from 'react';
import {Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const useDateTimePicker = (initialDate = new Date()) => {
  const [date, setDate] = useState(initialDate);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date'); // 'date' or 'time'

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showPicker = (type = 'date') => {
    setMode(type);
    setShow(true);
  };

  const dateTimePickerComponent = show && (
    <DateTimePicker
      value={date}
      mode={mode}
      is24Hour={true}
      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
      onChange={onChange}
    />
  );

  return {date, showPicker, dateTimePickerComponent};
};
