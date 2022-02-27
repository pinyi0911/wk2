import React from "react";
import { ScrollView,Image } from "react-native";
import AlbumDetail from "./AlbumDetail";
import albumData from "../json/albums";

const Albumlist = () => {
  return (
    <ScrollView>
      <AlbumDetail album = {albumData[0]} />
      <AlbumDetail album = {albumData[1]} />
      <AlbumDetail album = {albumData[2]} />
      <AlbumDetail album = {albumData[3]} />
      <AlbumDetail album = {albumData[4]} />

        <Image 
        style={{
          marginLeft:147,
          marginTop:50,
          marginBottom:10,
          height:50,
          width:100,
        }}
        source={{uri:'https://www.kpopn.com/upload/a160f1360a8d6239f3cf.jpg'}}/>
      
    </ScrollView>
  );
};

export default Albumlist;