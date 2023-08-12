import { StyleSheet, Text, View ,ScrollView,Pressable,Image} from 'react-native'
import React from 'react'

const Services = () => {

 const services = [
    {
      id: "0",
      image: require('../assets/outer.jpg'),
      name: "Outer",
     
    },
    {
      id: "11",
      image: require('../assets/stair.jpg'),
      name: "Interior"
    },
    {
      id: "12",
      image: require('../assets/engine.jpg'),
      name: "Engine",
     
    },
    {
      id: "13",
      image: require('../assets/coating.jpg'),
      name: "Coating",
    },
   
  ];
  return (
    <View style={{padding:10}}>
        <Text style={{fontSize:16,fontWeight:"500",marginBottom:7}}>Services Available</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {services.map((service,index) => (
                <Pressable style={{margin:10,backgroundColor:"white",padding:20,borderRadius:7}} key={index}>
                    
                    <Image source={service.image} style={{width:70, height:70}} />


                    <Text style={{textAlign:"center",marginTop:10}}>{service.name}</Text>
                </Pressable>
            ))}
        </ScrollView>
    </View>
  )
}

export default Services

const styles = StyleSheet.create({})