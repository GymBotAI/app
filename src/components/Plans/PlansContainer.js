import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, ScrollView } from "react-native";
import PlanFinder from "./PlanFinder";
import BookmarkedPlans from "./BookmarkedPlans"

const { width } = Dimensions.get('window');

export default function Settings({ navigation }) {
 const [scrollX] = useState(new Animated.Value(0));
 const scrollEventThrottle = 16; // Adjust as needed

 const animatedScrollX = Animated.event(
   [
     {
       nativeEvent: {
         contentOffset: {
           x: scrollX,
         },
       },
     },
   ],
   {
     useNativeDriver: false,
   }
 );

 const interpolateX = scrollX.interpolate({
   inputRange: [0, width],
   outputRange: [0, 1],
 });

 return (
   <View style={{ flex: 1 }}>
     <ScrollView
       horizontal
       pagingEnabled
       onScroll={animatedScrollX}
       scrollEventThrottle={scrollEventThrottle} // Specify the scrollEventThrottle
     >
       <View style={{ width, flex: 1 }}>
         <PlanFinder />
       </View>
       <View style={{ width, flex: 1 }}>
         <BookmarkedPlans />
       </View>
     </ScrollView>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    overflow: "auto",
    padding: 10,
  },
});
