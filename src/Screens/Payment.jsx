import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
} from "react-native";
import Collapsible from "react-native-collapsible";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import { LinearGradient } from "expo-linear-gradient";

const sections = [
  {
    id: "gpay",
    label: "GPay",
    offers: "sheetal@oksbi",
    icon: "google",
  },
  {
    id: "upi",
    label: "Pay by any UPI App",
    offers: "Offers Available",
    icon: "bank-transfer",
  },
  {
    id: "wallet",
    label: "Wallet",
    offers: "Offers Available",
    icon: "wallet-outline",
  },
  {
    id: "card",
    label: "Debit/Credit Cards",
    offers: "",
    icon: "credit-card-outline",
  },
  {
    id: "netbanking",
    label: "Net Banking",
    offers: "",
    icon: "bank-outline",
  },
];

export default function PaymentMethodScreen() {
  const [active, setActive] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const toggleAccordion = (id) => {
    setActive((prev) => (prev === id ? null : id));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Method</Text>
      </View>

      <ScrollView>
        <View style={styles.discountCard}>
          <Text style={styles.discountText}>
            🎉 ₹37 OFF on this subscription
          </Text>
        </View>

        {sections.map((section) => (
          <View key={section.id} style={styles.section}>
            <TouchableOpacity
              onPress={() => toggleAccordion(section.id)}
              style={styles.sectionHeader}
            >
              <MaterialCommunityIcons
                name={section.icon}
                size={24}
                color="#009E60"
              />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.label}>{section.label}</Text>
                {!!section.offers && (
                  <Text style={styles.offers}>{section.offers}</Text>
                )}
              </View>
              <Ionicons
                name={active === section.id ? "chevron-up" : "chevron-down"}
                size={22}
                color="#999"
              />
            </TouchableOpacity>

            <Collapsible collapsed={active !== section.id}>
              <TouchableOpacity
                style={styles.option}
                onPress={() => setSelectedMethod(section.id)}
              >
                <View style={styles.radioCircle}>
                  {selectedMethod === section.id && (
                    <View style={styles.selectedDot} />
                  )}
                </View>
                <Text style={styles.optionText}>
                  Use {section.label} to pay ₹85
                </Text>
              </TouchableOpacity>

              {/* QR Code for UPI */}
              {section.id === "upi" && selectedMethod === "upi" && (
                <View style={styles.qrContainer}>
                  <View style={styles.qrWrapper}>
                    <QRCode
                      value="upi://pay?pa=sheetalsbi&pn=Sheetal&am=85&cu=INR"
                      size={180}
                    />
                  </View>
                  <Text style={styles.qrText}>Scan & Pay via any UPI app</Text>
                </View>
              )}
            </Collapsible>
          </View>
        ))}
      </ScrollView>

      {/* Bottom CTA */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.price}>₹85</Text>
          <Text style={styles.viewDetails}>View Price Details</Text>
        </View>
        <TouchableOpacity style={styles.placeOrder}>
          <LinearGradient
            colors={["#009E60", "#009E60"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientButton}
          >
            <Text style={styles.placeOrderText}>Place Order</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fdfdfd" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 14,
  },
  discountCard: {
    backgroundColor: "#e0f2f1",
    margin: 14,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  discountText: {
    color: "#007e33",
    fontWeight: "600",
  },
  section: {
    backgroundColor: "#fff",
    marginHorizontal: 14,
    marginVertical: 8,
    borderRadius: 12,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  offers: {
    fontSize: 12,
    color: "#00a676",
    marginTop: 2,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#4CAF50",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selectedDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#4CAF50",
  },
  optionText: {
    fontSize: 14,
    color: "#444",
  },
  qrContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  qrWrapper: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
  },
  qrText: {
    marginTop: 10,
    fontSize: 13,
    color: "#555",
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    marginBottom: 35,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  viewDetails: {
    fontSize: 13,
    color: "#4CAF50",
    fontWeight: "500",
  },
  placeOrder: {
    borderRadius: 8,
    overflow: "hidden",
  },
  gradientButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  placeOrderText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
