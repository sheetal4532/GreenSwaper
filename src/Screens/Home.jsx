// import React from 'react';
// import { View, Text, ScrollView, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

// const HomeScreen = () => {
//   // Sample data
//   const categories = [
//     { id: '1', name: 'Paper', icon: '📄' },
//     { id: '2', name: 'Plastic', icon: '🫙' },
//     { id: '3', name: 'Cables', icon: '🔌' },
//     { id: '4', name: 'Waste', icon: '♻️' },
//     { id: '5', name: 'Others', icon: '🎚️' },
//   ];

//   const stories = [
//     { id: '1', username: 'Your Story', isYourStory: true, image: 'https://randomuser.me/api/portraits/women/68.jpg' },
//     { id: '2', username: 'Priya', image: 'https://randomuser.me/api/portraits/women/12.jpg' },
//     { id: '3', username: 'Rahul', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
//     { id: '4', username: 'Neha', image: 'https://randomuser.me/api/portraits/women/45.jpg' },
//     { id: '5', username: 'Amit', image: 'https://randomuser.me/api/portraits/men/67.jpg' },
//   ];

//   const posts = [
//     {
//       id: '1',
//       username: 'Priya Sharma',
//       time: '2 hours ago',
//       content: 'Need paper pickup tomorrow morning. Have about 5kg of newspapers and magazines.',
//       image: 'https://randomuser.me/api/portraits/women/12.jpg'
//     },
//     {
//       id: '2',
//       username: 'Rahul Patel',
//       time: '5 hours ago',
//       content: 'Recycling workshop this Sunday at 10am in the community hall. Learn how to properly segregate waste!',
//       image: 'https://randomuser.me/api/portraits/men/32.jpg'
//     },
//     {
//       id: '3',
//       username: 'Neha Gupta',
//       time: '1 day ago',
//       content: 'New e-waste collection point opened near the main gate. You can drop off old electronics there.',
//       image: 'https://randomuser.me/api/portraits/women/45.jpg'
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.greeting}>Hey Sheetal!</Text>
//         <View style={styles.locationContainer}>
//           <Text style={styles.locationIcon}>📍</Text>
//           <Text style={styles.locationText}>Hinjwadi Phase 1</Text>
//         </View>
//       </View>

//       {/* Categories */}
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={styles.categoriesContainer}
//       >
//         {categories.map((category) => (
//           <TouchableOpacity key={category.id} style={styles.category}>
//             <Text style={styles.categoryIcon}>{category.icon}</Text>
//             <Text style={styles.categoryText}>{category.name}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       {/* Stories */}
//       <View style={styles.storiesContainer}>
//         <Text style={styles.sectionTitle}>Community Stories</Text>
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           style={styles.storiesList}
//         >
//           {stories.map((story) => (
//             <TouchableOpacity key={story.id} style={styles.story}>
//               <View style={[styles.storyCircle, story.isYourStory && styles.yourStoryCircle]}>
//                 <View style={styles.storyInnerCircle}>
//                   <Image
//                     source={{ uri: story.image }}
//                     style={styles.storyImage}
//                   />
//                   {story.isYourStory && (
//                     <View style={styles.addStoryIcon}>
//                       <Text style={styles.addStoryText}>+</Text>
//                     </View>
//                   )}
//                 </View>
//               </View>
//               <Text style={styles.storyUsername}>{story.username}</Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//       </View>

//       {/* Posts */}
//       <FlatList
//         data={posts}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.post}>
//             <View style={styles.postHeader}>
//               <Image source={{ uri: item.image }} style={styles.postUserImage} />
//               <View>
//                 <Text style={styles.postUsername}>{item.username}</Text>
//                 <Text style={styles.postTime}>{item.time}</Text>
//               </View>
//             </View>
//             <Text style={styles.postContent}>{item.content}</Text>
//           </View>
//         )}
//         style={styles.postsList}
//       />

//       {/* Bottom Navigation */}
//       <View style={styles.navbar}>
//         <TouchableOpacity style={styles.navItem}>
//           <Text style={[styles.navIcon, styles.activeNav]}>🏠</Text>
//           <Text style={styles.activeNav}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Text style={styles.navIcon}>➕</Text>
//           <Text>Post</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Text style={styles.navIcon}>🌍</Text>
//           <Text>Community</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Text style={styles.navIcon}>👤</Text>
//           <Text>Account</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     paddingBottom: 60,
//   },
//   header: {
//     padding: 15,
//     backgroundColor: '#4CAF50',
//   },
//   greeting: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   locationContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 5,
//   },
//   locationIcon: {
//     marginRight: 5,
//   },
//   locationText: {
//     color: 'white',
//     fontSize: 14,
//   },
//   categoriesContainer: {
//     backgroundColor: 'white',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   category: {
//     minWidth: 80,
//     alignItems: 'center',
//     marginHorizontal: 8,
//   },
//   categoryIcon: {
//     fontSize: 24,
//     marginBottom: 5,
//   },
//   categoryText: {
//     fontSize: 14,
//   },
//   storiesContainer: {
//     backgroundColor: 'white',
//     padding: 15,
//   },
//   sectionTitle: {
//     fontWeight: 'bold',
//     marginBottom: 10,
//     fontSize: 16,
//   },
//   storiesList: {
//     flexDirection: 'row',
//   },
//   story: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   storyCircle: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#ff6b6b',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   yourStoryCircle: {
//     backgroundColor: '#e0e0e0',
//   },
//   storyInnerCircle: {
//     width: 64,
//     height: 64,
//     borderRadius: 32,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     overflow: 'hidden',
//   },
//   storyImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//   },
//   addStoryIcon: {
//     position: 'absolute',
//     bottom: 5,
//     right: 5,
//     backgroundColor: '#4CAF50',
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   addStoryText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   storyUsername: {
//     fontSize: 12,
//     maxWidth: 70,
//     textAlign: 'center',
//   },
//   postsList: {
//     padding: 15,
//   },
//   post: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   postHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   postUserImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   postUsername: {
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   postTime: {
//     fontSize: 12,
//     color: '#999',
//     marginTop: 2,
//   },
//   postContent: {
//     fontSize: 14,
//     lineHeight: 20,
//   },
//   navbar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: 'white',
//     paddingVertical: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//   },
//   navItem: {
//     alignItems: 'center',
//   },
//   navIcon: {
//     fontSize: 24,
//     marginBottom: 3,
//   },
//   activeNav: {
//     color: '#4CAF50',
//   },
// });

// export default HomeScreen;

import React, { useState, useEffect } from "react";
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

const Home = () => {
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
              source={require("../assets/icon_user.png")}
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

      {/* Categories */}
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

      {/* Stories */}
      <View style={styles.storiesContainer}>
        <Text style={styles.sectionTitle}>Community Stories</Text>
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

      {/* Bottom Navigation */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={[styles.navIcon, styles.activeNav]}>🏠</Text>
          <Text style={styles.activeNav}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>➕</Text>
          <Text>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🌍</Text>
          <Text>Community</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text>Account</Text>
        </TouchableOpacity>
      </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingBottom: 60,
  },
  header: {
    padding: 15,
    backgroundColor: "#4CAF50",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
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
    minWidth: 80,
    alignItems: "center",
    marginHorizontal: 8,
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
  navbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 3,
  },
  activeNav: {
    color: "#4CAF50",
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
});

export default Home;
