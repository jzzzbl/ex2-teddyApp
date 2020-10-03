import React, { useRef, useEffect } from "react";
import { Dimensions, Image, Text, Animated, View, Button, StyleSheet } from "react-native";
import { Link, useIsFocused } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

function UserInfo() {
  const spinAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const isFocused = useIsFocused();

  const startAnim = () => {
    spinAnim.setValue(0);
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    startAnim();
    return () => spinAnim.setValue(0);
  }, [spinAnim, isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        User Info
      </Text>
      <View style={styles.userInfo}>
        <Animated.View 
          style={{
            width: 150,
            height: 150,
            marginTop: 30,
            transform: [
              {
                rotate: spinAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "360deg"],
                }),
              },
            ],
          }}
        >
          <TouchableOpacity style={styles.pfpButton} onPress={startAnim} >
            <Image 
              style={styles.pfpImage} 
              source={require("../assets/images/teddy.png")}
            />
          </TouchableOpacity>
        </Animated.View>
        <Button title="@SALLY" />
      </View>
      <View style={styles.userStats}>
       <Text style={styles.title}>
          Sally's Stats
        </Text>
        <View style={styles.statContainer} >
          <Text style={styles.statTxt}>
            Life:
          </Text>
          <Image 
            style={styles.iconSize} 
            source={require("../assets/images/heart.png")}
          />
          <Image 
            style={styles.iconSize} 
            source={require("../assets/images/heart.png")}
          />
          <Image 
            style={styles.iconSize} 
            source={require("../assets/images/heart.png")}
          />
           <Image 
            style={styles.iconSize} 
            source={require("../assets/images/heart.png")}
          />
        </View>
        <View style={styles.statContainer} >
          <Text style={styles.statTxt}>
            Cash:
          </Text>
          <Image 
            style={styles.iconSize} 
            source={require("../assets/images/coin.png")}
          />
           <Image 
            style={styles.iconSize} 
            source={require("../assets/images/coin.png")}
          />
          <Image 
            style={styles.iconSize} 
            source={require("../assets/images/coin.png")}
          />
          <Image 
            style={styles.iconSize} 
            source={require("../assets/images/coin.png")}
          />
        </View>
        <View style={styles.statContainer} >
          <Text style={styles.statTxt}>
            Power:
          </Text>
          <Image 
            style={styles.iconSize} 
            source={require("../assets/images/power.png")}
          />
           <Image 
            style={styles.iconSize} 
            source={require("../assets/images/power.png")}
          />
          <Image 
            style={styles.iconSize} 
            source={require("../assets/images/power.png")}
          />
          <Image 
            style={styles.iconSize} 
            source={require("../assets/images/power.png")}
          />
        </View>
        <View style={styles.statContainer} >
          <Text style={styles.statTxt}>
            Weapons:
          </Text>
          <Image 
            style={styles.iconSize} 
            source={require("../assets/images/sword.png")}
          />
           <Image 
            style={styles.iconSize} 
            source={require("../assets/images/sword.png")}
          />
          <Image 
            style={styles.iconSize} 
            source={require("../assets/images/sword.png")}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={startAnim} >
          <Text style={styles.buttonTxt}>
            REFRESH
          </Text>
        </TouchableOpacity>
      </View>
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1, 
    backgroundColor: "#FDF9F7", 
    alignItems: "center", 
    justifyContent: "center"
  },
  title:{
    color: "#9F8189",
    padding: 10,
    fontSize: 26,
    justifyContent: "center",
    textAlign: "center",
    margin: 5,
    marginBottom: 15,
  },
  userInfo:{
    flex: 1,
    width: Dimensions.get("window").width,
    alignItems: "center",
   // backgroundColor: "red"
  },
  pfpButton:{
    width: 150,
    height: 150,
  },
  pfpImage:{
    width: 150,
    height: 150,
  },
  userStats:{
    flex: 2, 
    borderWidth: 2,
    borderBottomWidth: 0,
    borderColor: "#FBEEE6",
    width: Dimensions.get("window").width/1.2,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 30,
    marginTop: 25,
    backgroundColor: "white", 
    alignItems: "center", 
  },
  statContainer:{
    marginTop: 15,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },
  statTxt:{
    marginRight: 10,
    fontSize: 22,
    alignItems: "flex-start",
    color: "#9F8189",
  },
  iconSize:{
   margin: 5,
    height: 30,
    width: 35,
  },
  button:{
    justifyContent: "flex-end",
    marginTop: 60,
    backgroundColor: "#9F8189",
    borderRadius: 30,
    padding: 15,
    paddingRight: 40,
    paddingLeft: 40,
  },
  buttonTxt:{
    fontSize: 22,
    color: "#fff"
  }


});

export default UserInfo;
