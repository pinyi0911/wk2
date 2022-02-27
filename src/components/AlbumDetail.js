import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AlbumDetail = (props) => {
  const {title, album_number, cover } = props.album;
  return (
    <View style={styles.cardContainerStyle}>
     
        <Image
          style={styles.coverStyle}
          source={{
            uri: cover
          }}
        />
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.textStyle}>{album_number}</Text>


       
    </View>
  );
}

const styles = StyleSheet.create({
  
  cardContainerStyle: {

    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
 
  coverStyle: {
      
    height: 200,
    width:200,
    borderRadius:17,
    borderWidth: 0.7,
    borderColor: "#ddd",
    marginTop:70,
    marginBottom:20,

  },
    titleStyle: {
      
    fontSize:14,
    fontWeight:"600",
    color:"#333332",

  },
    textStyle: {
    fontSize:12,
    color:"#616161",
    marginTop:5,

  }

});

export default AlbumDetail;