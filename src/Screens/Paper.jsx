import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  MaterialIcons,
  Entypo,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

const Paper = ({ navigation }) => {
  const [paperType, setPaperType] = useState("Newspaper");
  const [quantity, setQuantity] = useState("12");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [timeSlot, setTimeSlot] = useState("10:00 AM — 12:00 PM");
  const [address, setAddress] = useState("123, Shastri Nagar, Delhi");

  const pricePerKg = 15;
  const estimatedPrice = quantity ? pricePerKg * parseFloat(quantity) : 0;

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) setDate(selectedDate);
  };

  return (
    <View style={styles.wrapper}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Feather name="arrow-left" size={22} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Paper</Text>
        </View>
        <Feather name="more-vertical" size={22} color="#333" />
      </View>

      {/* Main Card */}
      <View style={styles.container}>
        <Text style={styles.label}>Select Paper Type:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={paperType}
            onValueChange={(itemValue) => setPaperType(itemValue)}
          >
            <Picker.Item label="Newspaper" value="Newspaper" />
            <Picker.Item label="Magazine" value="Magazine" />
            <Picker.Item label="Cardboard" value="Cardboard" />
          </Picker>
        </View>

        <Text style={styles.label}>Enter Quantity:</Text>
        <View style={styles.quantityWrapper}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={quantity}
            onChangeText={setQuantity}
          />
          <Text style={styles.unit}>kg</Text>
        </View>

        <Text style={styles.label}>Estimated Price:</Text>
        <Text style={styles.price}>₹ {estimatedPrice.toFixed(2)}</Text>

        <TouchableOpacity
          style={styles.fieldRow}
          onPress={() => setShowDatePicker(true)}
        >
          <MaterialIcons name="calendar-today" size={18} color="#333" />
          <Text style={styles.fieldLabel}>Pickup Date</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={date.toDateString()}
          editable={false}
        />
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={onDateChange}
          />
        )}

        <View style={styles.fieldRow}>
          <Entypo name="clock" size={18} color="#333" />
          <Text style={styles.fieldLabel}>Time Slot</Text>
        </View>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={timeSlot}
            onValueChange={(itemValue) => setTimeSlot(itemValue)}
          >
            <Picker.Item
              label="10:00 AM — 12:00 PM"
              value="10:00 AM — 12:00 PM"
            />
            <Picker.Item
              label="12:00 PM — 2:00 PM"
              value="12:00 PM — 2:00 PM"
            />
            <Picker.Item label="4:00 PM — 6:00 PM" value="4:00 PM — 6:00 PM" />
          </Picker>
        </View>

        <View style={styles.fieldRow}>
          <FontAwesome5 name="map-marker-alt" size={18} color="#333" />
          <Text style={styles.fieldLabel}>Address</Text>
        </View>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Buyer")}
        >
          <Text style={styles.buttonText}>Choose your Buyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Paper;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
    marginTop: 19,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: "500",
  },
  pickerWrapper: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 6,
  },
  quantityWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: "#333",
  },
  unit: {
    fontSize: 16,
    color: "#555",
    marginLeft: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 14,
    color: "#222",
  },
  fieldRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  fieldLabel: {
    fontSize: 15,
    color: "#333",
    marginLeft: 6,
  },
  button: {
    marginTop: 18,
    backgroundColor: "#009E60",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
