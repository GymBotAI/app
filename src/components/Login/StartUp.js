import {Animated, FlatList, StyleSheet, StatusBar, View} from 'react-native';
import React, {useRef, useState} from 'react';
import SlideItem from './SlideItem';
import Pagination from './Pagination';


const Slides = [
    {
      id: 1,
      img: require('../../../assets/caresoul1.jpeg'),
    },
    {
      id: 2,
      img: require('../../../assets/caresoul2.webp'),
    },
    {
      id: 3,
      img: require('../../../assets/caresoul3.webp'),
    },
    {
      id: 4,
      img: require('../../../assets/caresoul4.webp'),
    },
  ];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = event => {
    Animated.event(
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
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>
      <FlatList
        data={Slides}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={Slides} scrollX={scrollX} index={index} />
      <StatusBar barStyle={'light-content'}/>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});