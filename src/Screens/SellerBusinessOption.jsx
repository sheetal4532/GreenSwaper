import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { MyColors } from "../Utils/MyColors";

const SellerBusinessOption = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("../assets/logo.png")}
            resizeMode="contain"
          />
          <Text style={styles.screenTitle}>
            How do you want to join GreenSwapper as?
          </Text>
        </View>

        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => navigation.navigate("Home")} // Seller goes to Home
          >
            <Text style={styles.optionButtonText}>Join as Seller</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => navigation.navigate("Business")} // Buyer goes to BuyerPage
          >
            <Text style={styles.optionButtonText}>Join as Buyer</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>When you join as Seller,</Text>
          <Text style={styles.descriptionText}>
            You can create order & sell your material to our buyers
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.background,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 25,
    paddingTop: 40,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    height: 290,
    width: 290,
    marginBottom: -30,
    marginTop: -60,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: MyColors.text,
    textAlign: "center",
    marginBottom: 40,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  optionButton: {
    flex: 1,
    height: 100,
    backgroundColor: MyColors.primary,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    elevation: 3,
    shadowColor: MyColors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  optionButtonText: {
    color: MyColors.lightText,
    fontSize: 18,
    fontWeight: "600",
  },
  descriptionContainer: {
    backgroundColor: MyColors.inputBackground,
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: MyColors.text,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: MyColors.textSecondary,
    lineHeight: 20,
  },
});

export default SellerBusinessOption;

