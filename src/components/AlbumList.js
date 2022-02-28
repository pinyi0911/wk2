import React from "react";
import { ScrollView,Image,Text } from "react-native";
import AlbumDetail from "./AlbumDetail";
import albumData from "../json/albums";

const Albumlist = () => {
  return (
    <ScrollView>
      <Image
      style={{height:235,width:null}}
      source={{uri:'https://i.pinimg.com/564x/8e/73/8f/8e738f8b12ef81c762a7b51c78cd32c8.jpg'}}
      />
         
      <Text style={{
        fontSize: 22,
        fontWeight:'700',
        color:"#333332",
        marginLeft:130,
        marginTop:50,
      }}> EXO-L Picks</Text>

      <AlbumDetail album = {albumData[0]} />
      <AlbumDetail album = {albumData[1]} />
      <AlbumDetail album = {albumData[2]} />
      <AlbumDetail album = {albumData[3]} />
      <AlbumDetail album = {albumData[4]} />

      <Image 
      style={{
          marginLeft:147,
          marginTop:30,
          marginBottom:20,
          height:50,
          width:100,
      }}
      source={{uri:'https://www.kpopn.com/upload/a160f1360a8d6239f3cf.jpg'}}/>
      
    </ScrollView>
  );
};

export default Albumlist;