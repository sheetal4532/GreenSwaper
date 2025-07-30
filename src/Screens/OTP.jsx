import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import React, { useState } from "react";
import { MyColors } from "../Utils/MyColors";
import { Ionicons } from "@expo/vector-icons";

const OTP = ({ route, navigation }) => {
  const { email } = route.params || {};
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [resendEnabled, setResendEnabled] = useState(false);

  const handleVerify = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }
    navigation.navigate("SellerBusinessOption");
  };

  const handleResend = () => {
    setTimer(60);
    setResendEnabled(false);
    // Add your resend OTP logic here
    alert("OTP resent successfully!");
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus to next input
    if (value && index < 5) {
      // You'll need to add refs to your TextInput components for this to work
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("../assets/logo.png")}
            resizeMode="contain"
          />
          <Text style={styles.screenTitle}>Verify OTP</Text>
          <Text style={styles.screenSubtitle}>
            We've sent a verification code to {email || "your email"}
          </Text>
        </View>

        <View style={styles.otpContainer}>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={otp[index]}
              onChangeText={(value) => handleOtpChange(index, value)}
              selectTextOnFocus
            />
          ))}
        </View>

        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>
            {resendEnabled ? (
              <Text>Didn't receive code? </Text>
            ) : (
              <Text>Resend code in {timer} seconds</Text>
            )}
          </Text>
          <TouchableOpacity onPress={handleResend} disabled={!resendEnabled}>
            <Text
              style={[
                styles.resendText,
                !resendEnabled && styles.resendDisabled,
              ]}
            >
              Resend
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleVerify}
          activeOpacity={0.8}
        >
          <Text style={styles.submitButtonText}>VERIFY</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Wrong email address?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.signUpText}>Change Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.background,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    height: 280,
    width: 280,
    marginBottom: 5,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: MyColors.text,
    marginBottom: 5,
  },
  screenSubtitle: {
    fontSize: 14,
    color: MyColors.textSecondary,
    textAlign: "center",
    marginBottom: 10,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  otpInput: {
    width: 45,
    height: 50,
    backgroundColor: MyColors.inputBackground,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    color: MyColors.text,
    borderWidth: 1,
    borderColor: MyColors.inputBorder,
  },
  timerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  timerText: {
    color: MyColors.textSecondary,
    fontSize: 14,
  },
  resendText: {
    color: MyColors.primary,
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 5,
  },
  resendDisabled: {
    color: MyColors.textSecondary,
  },
  submitButton: {
    height: 50,
    backgroundColor: MyColors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    elevation: 3,
    shadowColor: MyColors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  submitButtonText: {
    color: MyColors.lightText,
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  footerText: {
    color: MyColors.textSecondary,
    fontSize: 14,
    marginRight: 5,
  },
  signUpText: {
    color: MyColors.primary,
    fontSize: 14,
    fontWeight: "600",
  },
});

export default OTP;
