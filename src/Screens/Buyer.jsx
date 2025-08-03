import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

// Dummy buyer data
const buyers = [
  {
    id: "1",
    name: "Ram Joshi",
    location: "Pathankot, HP",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "2",
    name: "Priya Jadhav",
    location: "Indore, MP",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: "3",
    name: "Kaushik Sharma",
    location: "Delhi, NCR",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "4",
    name: "Nandani Karve",
    location: "Shimla, HP",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

// Card for each buyer
const BuyerCard = ({ buyer, onToggleWishlist, isWishlisted, navigation }) => (
  <View style={styles.card}>
    <View style={styles.iconRow}>
      <TouchableOpacity>
        <MaterialIcons name="location-pin" size={22} color="#444" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onToggleWishlist(buyer.id)}>
        <MaterialCommunityIcons
          name={isWishlisted ? "heart" : "heart-outline"}
          size={22}
          color={isWishlisted ? "red" : "#777"}
        />
      </TouchableOpacity>
    </View>

    <Image source={{ uri: buyer.image }} style={styles.avatar} />

    <View style={styles.info}>
      <Text style={styles.name}>{buyer.name}</Text>
      <View style={styles.rating}>
        {Array.from({ length: buyer.rating }).map((_, i) => (
          <MaterialIcons key={i} name="star" size={16} color="#f1c40f" />
        ))}
      </View>
      <Text style={styles.location}>{buyer.location}</Text>

      <View style={styles.actionRow}>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => navigation.navigate("Subscription")}
        >
          <MaterialIcons name="call" size={16} color="#fff" />
          <Text style={styles.actionText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionBtn, { backgroundColor: "#009E60" }]}
          onPress={() => navigation.navigate("Subscription")}
        >
          <MaterialIcons name="message" size={16} color="#fff" />
          <Text style={styles.actionText}>Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

// Main Component
const BuyerList = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [wishlist, setWishlist] = useState({});

  const filteredBuyers = buyers.filter((buyer) =>
    buyer.location.toLowerCase().includes(searchText.toLowerCase())
  );

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={26} color="#000" />
          </TouchableOpacity>
          <Text style={styles.header}>Buyers</Text>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="more-vert" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchWrapper}>
        <MaterialIcons
          name="search"
          size={20}
          color="#aaa"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search location..."
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* List */}
      <FlatList
        data={filteredBuyers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BuyerCard
            buyer={item}
            isWishlisted={wishlist[item.id]}
            onToggleWishlist={toggleWishlist}
            navigation={navigation} // 🔁 Pass navigation
          />
        )}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </View>
  );
};

export default BuyerList;

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f9fbfc",
    flex: 1,
    marginTop: 18,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  leftHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#333",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    alignItems: "flex-start",
    marginBottom: 12,
    shadowColor: "#ccc",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: "relative",
  },
  iconRow: {
    position: "absolute",
    top: 8,
    right: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    zIndex: 2,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
    marginTop: 6,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
  rating: {
    flexDirection: "row",
    marginVertical: 4,
  },
  location: {
    color: "#666",
    fontSize: 13,
    marginBottom: 6,
  },
  actionRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 6,
  },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#009E60",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  actionText: {
    color: "#fff",
    marginLeft: 6,
    fontSize: 13,
  },
});
