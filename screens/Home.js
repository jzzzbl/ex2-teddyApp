import React, { useRef, useEffect, useState } from "react";
import { Image, Text, Animated, View, StyleSheet, PanResponder } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default DragGesture = () => {
  const position = useRef(new Animated.ValueXY()).current;
  const isFocused = useIsFocused();

  const [count, setCount] = useState(0);

  const countIncrementHandler = ()=>{
    setCount(count + 4)
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: position.x, dy: position.y },
    ]),
    onPanResponderGrant: () => {
      position.setOffset({
        x: position.x._value,
        y: position.y._value,
      });
    },
    onPanResponderRelease: () => {
      Animated.spring(position, {
        toValue: { x: 0, y: 0 },
      }).start();
    },
  });

  useEffect(() => {
    return () => position.setValue({ x: 0, y: 0 });
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Drag teddy,
      </Text>
      <Animated.View
        style={{
          height: 150 + count,
          width: 150  + count,
        }}
        style={[position.getLayout()]}
        {...panResponder.panHandlers}
      >
        <TouchableOpacity onPress={countIncrementHandler}>
          <Image 
             style={{
              height: 150 + count,
              width: 150  + count,
              borderRadius: 50,
             }}
            source={require("../assets/images/teddy.png")}
          />
        </TouchableOpacity>
            
        </Animated.View>
        <Text style={styles.title}>
        Watch him grow
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF9F7",
    alignItems: "center",
    justifyContent: "center",
  },
  title:{
    color: "#9F8189",
    padding: 10,
    fontSize: 28,
    justifyContent: "center",
    textAlign: "center",
    margin: 5,
    marginBottom: 40,
    marginTop: 40,
  }
});
