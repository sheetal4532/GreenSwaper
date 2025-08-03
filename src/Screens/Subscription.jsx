// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { Ionicons, MaterialIcons } from "@expo/vector-icons";

// const Subscription = ({ navigation }) => {
//   const [selectedPlan, setSelectedPlan] = useState(null);

//   const handleSubscribe = () => {
//     if (selectedPlan) {
//       navigation.navigate("PaymentScreen", { plan: selectedPlan });
//     } else {
//       alert("Please select a plan first.");
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Header */}
//       <View style={styles.headerRow}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color="#000" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Subscription</Text>
//       </View>

//       <Text style={styles.title}>Upgrade to Premium</Text>
//       <Text style={styles.subtitle}>
//         Get better deals, faster pickups & exclusive rewards!
//       </Text>

//       {/* Benefits */}
//       <View style={styles.benefitCard}>
//         <Text style={styles.benefitTitle}>What's included:</Text>
//         {[
//           "Priority Pickup Scheduling",
//           "Higher Selling Prices",
//           "Dedicated Support",
//           "Track Pickup in Real-time",
//         ].map((item, index) => (
//           <View key={index} style={styles.benefitItem}>
//             <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
//             <Text style={styles.benefitText}>{item}</Text>
//           </View>
//         ))}
//       </View>

//       {/* Monthly Plan */}
//       <TouchableOpacity
//         onPress={() => setSelectedPlan("monthly")}
//         style={[
//           styles.pricingCard,
//           selectedPlan === "monthly" && { borderColor: "#FFD700" },
//         ]}
//       >
//         <Text
//           style={[
//             styles.planName,
//             selectedPlan === "monthly" && { color: "#FFD700" },
//           ]}
//         >
//           Monthly Plan
//         </Text>
//         <Text style={styles.price}>₹49 / month</Text>
//       </TouchableOpacity>

//       {/* Annual Plan */}
//       <TouchableOpacity
//         onPress={() => setSelectedPlan("annual")}
//         style={[
//           styles.pricingCard,
//           selectedPlan === "annual" && { borderColor: "#FFD700" },
//         ]}
//       >
//         <Text
//           style={[
//             styles.planName,
//             selectedPlan === "annual" && { color: "#FFD700" },
//           ]}
//         >
//           Annual Plan
//         </Text>
//         <Text style={styles.price}>₹499 / year</Text>
//         <Text style={styles.savings}>Save 15%</Text>
//       </TouchableOpacity>

//       {/* Subscribe Button */}
//       <TouchableOpacity style={styles.subscribeBtn} onPress={handleSubscribe}>
//         <Text style={styles.subscribeText}>Subscribe</Text>
//       </TouchableOpacity>

//       {/* Help */}
//       <TouchableOpacity style={styles.helpSection}>
//         <MaterialIcons name="help-outline" size={20} color="#555" />
//         <Text style={styles.helpText}>Need help understanding the plans?</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default Subscription;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: "#f7f9fc",
//   },
//   headerRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 18,
//     marginBottom: 16,
//     marginLeft: -5,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginLeft: 12,
//     color: "#000",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "700",
//     marginBottom: 6,
//     color: "#111",
//   },
//   subtitle: {
//     fontSize: 15,
//     color: "#555",
//     marginBottom: 20,
//   },
//   benefitCard: {
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     padding: 16,
//     marginBottom: 20,
//     elevation: 3,
//   },
//   benefitTitle: {
//     fontSize: 17,
//     fontWeight: "600",
//     marginBottom: 12,
//   },
//   benefitItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 8,
//     gap: 8,
//   },
//   benefitText: {
//     fontSize: 15,
//     color: "#333",
//   },
//   pricingCard: {
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     padding: 18,
//     marginBottom: 16,
//     borderWidth: 1.5,
//     borderColor: "#eee",
//   },
//   planName: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 4,
//     color: "#333",
//   },
//   price: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#000",
//     marginBottom: 8,
//   },
//   savings: {
//     color: "#388E3C",
//     fontSize: 14,
//     marginBottom: 8,
//   },
//   subscribeBtn: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   subscribeText: {
//     color: "#fff",
//     fontWeight: "600",
//     fontSize: 16,
//   },
//   helpSection: {
//     marginTop: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: 6,
//   },
//   helpText: {
//     fontSize: 14,
//     color: "#555",
//     textDecorationLine: "underline",
//   },
// });

// Subscription.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Subscription = ({ navigation }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSubscribe = () => {
    if (selectedPlan) {
      navigation.navigate("Payment", { plan: selectedPlan });
    } else {
      alert("Please select a plan first.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Subscription</Text>
      </View>

      <Text style={styles.title}>Upgrade to Premium</Text>
      <Text style={styles.subtitle}>
        Get better deals, faster pickups & exclusive rewards!
      </Text>

      <View style={styles.benefitCard}>
        <Text style={styles.benefitTitle}>What's included:</Text>
        {[
          "Priority Pickup Scheduling",
          "Higher Selling Prices",
          "Dedicated Support",
          "Track Pickup in Real-time",
        ].map((item, index) => (
          <View key={index} style={styles.benefitItem}>
            <Ionicons name="checkmark-circle" size={20} color="#009E60" />
            <Text style={styles.benefitText}>{item}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        onPress={() => setSelectedPlan("monthly")}
        style={[
          styles.pricingCard,
          selectedPlan === "monthly" && { borderColor: "#FFD700" },
        ]}
      >
        <Text
          style={[
            styles.planName,
            selectedPlan === "monthly" && { color: "#FFD700" },
          ]}
        >
          Monthly Plan
        </Text>
        <Text style={styles.price}>₹49 / month</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setSelectedPlan("annual")}
        style={[
          styles.pricingCard,
          selectedPlan === "annual" && { borderColor: "#FFD700" },
        ]}
      >
        <Text
          style={[
            styles.planName,
            selectedPlan === "annual" && { color: "#FFD700" },
          ]}
        >
          Annual Plan
        </Text>
        <Text style={styles.price}>₹499 / year</Text>
        <Text style={styles.savings}>Save 15%</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.subscribeBtn} onPress={handleSubscribe}>
        <Text style={styles.subscribeText}>Subscribe</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.helpSection}>
        <MaterialIcons name="help-outline" size={20} color="#555" />
        <Text style={styles.helpText}>Need help understanding the plans?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f7f9fc",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    marginBottom: 16,
    marginLeft: -5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 12,
    color: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 6,
    color: "#111",
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    marginBottom: 20,
  },
  benefitCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
  },
  benefitTitle: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 12,
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  benefitText: {
    fontSize: 15,
    color: "#333",
  },
  pricingCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: "#eee",
  },
  planName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
    color: "#333",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  savings: {
    color: "#009E60",
    fontSize: 14,
    marginBottom: 8,
  },
  subscribeBtn: {
    backgroundColor: "#009E60",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  subscribeText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  helpSection: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  helpText: {
    fontSize: 14,
    color: "#555",
    textDecorationLine: "underline",
  },
});
