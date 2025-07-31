import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
  const [userName, setUserName] = useState("Sheetal");
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "Hinjwadi Phase 1",
  });

  // Sample data
  const categories = [
    { id: "1", name: "Paper", icon: "📄" },
    { id: "2", name: "Plastic", icon: "🫙" },
    { id: "3", name: "Cables", icon: "🔌" },
    { id: "4", name: "Waste", icon: "♻️" },
    { id: "5", name: "Others", icon: "🎚️" },
  ];

  const stories = [
    {
      id: "1",
      username: "Your Story",
      isYourStory: true,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: "2",
      username: "Priya",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: "3",
      username: "Rahul",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "4",
      username: "Neha",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: "5",
      username: "Amit",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ];

  const posts = [
    {
      id: "1",
      username: "Priya Sharma",
      time: "2 hours ago",
      content:
        "Need paper pickup tomorrow morning. Have about 5kg of newspapers and magazines.",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: "2",
      username: "Rahul Patel",
      time: "5 hours ago",
      content:
        "Recycling workshop this Sunday at 10am in the community hall. Learn how to properly segregate waste!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "3",
      username: "Neha Gupta",
      time: "1 day ago",
      content:
        "New e-waste collection point opened near the main gate. You can drop off old electronics there.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ];

  const handleProfileUpdate = () => {
    if (profileData.name) {
      setUserName(profileData.name);
    }
    setShowProfileModal(false);
  };

  return (
    <View style={styles.container}>
      {/* Header with User Icon */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => setShowProfileModal(true)}>
            <Image
              source={require("../assets/user.png")}
              style={styles.userIcon}
            />
          </TouchableOpacity>
          <Text style={styles.greeting}>Hey {userName}</Text>
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.locationIcon}>📍</Text>
          <Text style={styles.locationText}>{profileData.address}</Text>
        </View>
      </View>

      {/* Stories */}
      <View style={styles.storiesContainer}>
        <Text style={styles.sectionTitle}>User Stories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.storiesList}
        >
          {stories.map((story) => (
            <TouchableOpacity key={story.id} style={styles.story}>
              <View
                style={[
                  styles.storyCircle,
                  story.isYourStory && styles.yourStoryCircle,
                ]}
              >
                <View style={styles.storyInnerCircle}>
                  <Image
                    source={{ uri: story.image }}
                    style={styles.storyImage}
                  />
                  {story.isYourStory && (
                    <View style={styles.addStoryIcon}>
                      <Text style={styles.addStoryText}>+</Text>
                    </View>
                  )}
                </View>
              </View>
              <Text style={styles.storyUsername}>{story.username}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Categories */}
      <View style={styles.storiesContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          {categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.category}>
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Posts */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <Image
                source={{ uri: item.image }}
                style={styles.postUserImage}
              />
              <View>
                <Text style={styles.postUsername}>{item.username}</Text>
                <Text style={styles.postTime}>{item.time}</Text>
              </View>
            </View>
            <Text style={styles.postContent}>{item.content}</Text>
          </View>
        )}
        style={styles.postsList}
      />

      {/* Profile Modal */}
      <Modal
        visible={showProfileModal}
        animationType="slide"
        transparent={false}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Update Your Profile</Text>

          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/68.jpg" }}
            style={styles.profileImage}
          />

          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={profileData.name}
            onChangeText={(text) =>
              setProfileData({ ...profileData, name: text })
            }
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={profileData.email}
            onChangeText={(text) =>
              setProfileData({ ...profileData, email: text })
            }
          />

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={profileData.phone}
            onChangeText={(text) =>
              setProfileData({ ...profileData, phone: text })
            }
          />

          <TextInput
            style={styles.input}
            placeholder="Address"
            value={profileData.address}
            onChangeText={(text) =>
              setProfileData({ ...profileData, address: text })
            }
          />

          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleProfileUpdate}
          >
            <Text style={styles.saveButtonText}>Save Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowProfileModal(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const UserScreen = () => (
  <View style={styles.screen}>
    <Text>User Profile Screen</Text>
  </View>
);

const CommunityScreen = () => (
  <View style={styles.screen}>
    <Text>Community Screen</Text>
  </View>
);

const ChatbotScreen = () => (
  <View style={styles.screen}>
    <Text>Chatbot Screen</Text>
  </View>
);

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <CurvedBottomBar.Navigator
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shadow}
        height={70}
        circleWidth={55}
        bgColor="white"
        initialRouteName="home"
        borderTopLeftRight
        screenOptions={{
          headerShown: false, // Add this line to hide the header
        }}
        renderCircle={({ selectedTab, navigate }) => (
          <View style={styles.circleButton}>
            <Icon
              name="add"
              size={28}
              color="white"
              onPress={() => alert("Middle Button Pressed")}
            />
          </View>
        )}
        tabBar={({ routeName, selectedTab, navigate }) => {
          let iconName = "";

          switch (routeName) {
            case "home":
              iconName = "home-outline";
              break;
            case "chatbot":
              iconName = "chatbox-ellipses-outline";
              break;
            case "community":
              iconName = "people-outline";
              break;
            case "user":
              iconName = "person-outline";
              break;
          }

          return (
            <View style={styles.iconContainer}>
              <Icon
                name={iconName}
                size={24}
                color={routeName === selectedTab ? "#009E60" : "gray"}
                onPress={() => navigate(routeName)}
              />
            </View>
          );
        }}
      >
        <CurvedBottomBar.Screen
          name="home"
          position="LEFT"
          component={HomeScreen}
        />
        <CurvedBottomBar.Screen
          name="chatbot"
          position="LEFT"
          component={ChatbotScreen}
        />
        <CurvedBottomBar.Screen
          name="community"
          position="RIGHT"
          component={CommunityScreen}
        />
        <CurvedBottomBar.Screen
          name="user"
          position="RIGHT"
          component={UserScreen}
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingBottom: 0,
  },
  header: {
    padding: 20,
    backgroundColor: "#4CAF50",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  userIcon: {
    marginTop: 10,
    width: 25,
    height: 25,
    borderRadius: 20,
    marginRight: 8,
  },
  greeting: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  locationIcon: {
    marginRight: 5,
  },
  locationText: {
    color: "white",
    fontSize: 14,
  },
  categoriesContainer: {
    backgroundColor: "white",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  category: {
    minWidth: 95,
    alignItems: "center",
    marginHorizontal: -10,
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
  },
  storiesContainer: {
    backgroundColor: "white",
    padding: 15,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
  },
  storiesList: {
    flexDirection: "row",
  },
  story: {
    alignItems: "center",
    marginRight: 15,
  },
  storyCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ff6b6b",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  yourStoryCircle: {
    backgroundColor: "#e0e0e0",
  },
  storyInnerCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  addStoryIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#4CAF50",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addStoryText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  storyUsername: {
    fontSize: 12,
    maxWidth: 70,
    textAlign: "center",
  },
  postsList: {
    padding: 15,
  },
  post: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  postUserImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postUsername: {
    fontWeight: "bold",
    fontSize: 14,
  },
  postTime: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
  },
  postContent: {
    fontSize: 14,
    lineHeight: 20,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: "#f44336",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  // Bottom bar styles
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomBar: {
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  shadow: {
    shadowColor: "#DDDDDD",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButton: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: "#009E60",
    justifyContent: "center",
    alignItems: "center",
    bottom: 25,
    elevation: 5,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
});

export default Home;
