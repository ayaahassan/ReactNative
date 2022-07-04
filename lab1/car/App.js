import { StatusBar } from 'expo-status-bar';
import React from 'react';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Car from './component'
export default function App() {
  const [cars,setcar]=useState([
    {
    name:'car 1',
    brand:'https://thumbs.dreamstime.com/b/taipei-taiwan-oct-d-rendering-bmw-logo-bmw-german-automobile-manufacturer-d-rendering-bmw-logo-bmw-german-automobile-101114266.jpg',
    image:'https://greatdubai.com/sell-car-rentals/wp-content/uploads/sites/4/2022/05/SONATA-hero-option1-764A5360-edit-640x354-1.jpg',
    description:"car description",
    model:"a class"
  },
  {
    name:'car 2',
    brand:'https://thumbs.dreamstime.com/b/taipei-taiwan-oct-d-rendering-bmw-logo-bmw-german-automobile-manufacturer-d-rendering-bmw-logo-bmw-german-automobile-101114266.jpg',
    image:'https://resources.stuff.co.nz/content/dam/images/1/x/s/0/f/6/image.related.StuffLandscapeThreeByTwo.1464x976.1y0lgi.png/1574883910794.jpg',
    description:"car description",
    model:"c class"
  },
])
  return (
    <View style={styles.container}>
      <Text  style={styles.title}>Car App</Text>
     
    {
      cars.map((car,index)=>{
        return(
           <car car={car} key={index}/>           

        );
    }
      )
   }

    <StatusBar style='auto' />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title:
  {
   color:'#e74c3c',
   fontSize:24,
   flex:1,
   padding:10,
   marginTop:25,
   backgroundColor:'#e74c3c',
  },
 
});
