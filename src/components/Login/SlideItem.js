import {
    Image,
    StyleSheet,
    View,
    Dimensions,
  } from 'react-native';
  import React from 'react';
  
  const {width} = Dimensions.get('window');
  const height = width * 1.6
  
  const SlideItem = ({item}) => {
  
    return (
      <View style={styles.container}>
        <Image
          source={item.img}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    );
  };
  
  export default SlideItem;
  
  const styles = StyleSheet.create({
    container: {
        height,
        width,
    },
    image: {
      width,
      height,
      resizeMode: 'cover'
    },
    content: {
      flex: 0.4,
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
    description: {
      fontSize: 18,
      marginVertical: 12,
      color: '#333',
    },
    price: {
      fontSize: 32,
      fontWeight: 'bold',
    },
  });