import { createRef, useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import BookmarkedPlans from "./BookmarkedPlans";
import PlanFinder from "./PlanFinder";

const { width } = Dimensions.get("window");

export default function Settings({ navigation }) {
  const [scrollX] = useState(new Animated.Value(0));
  const scrollEventThrottle = 16;
  const scrollViewRef = createRef();
  const [planInfoPageVisible, setPlanInfoPageVisible] = useState(false);

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

  useEffect(() => {
    const scrollEnabled = !planInfoPageVisible;
    if (scrollViewRef.current) {
      scrollViewRef.current.setNativeProps({ scrollEnabled });
    }
  }, [planInfoPageVisible]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={animatedScrollX}
        scrollEventThrottle={scrollEventThrottle}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
      >
        <View style={{ width, flex: 1 }}>
          <PlanFinder onPlanInfoPageVisibilityChange={setPlanInfoPageVisible} />
        </View>
        <View style={{ width, flex: 1 }}>
          <BookmarkedPlans
            onPlanInfoPageVisibilityChange={setPlanInfoPageVisible}
          />
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
