import { useState } from "react";
import { StyleSheet, View, Text ,Button } from "react-native";
import axios from "axios";
  
export default function App() {
    const [data, setData] = useState();
    
    const getAdvice = () => {
        axios.get("http://52.199.225.105/api/items")
            .then((response) => {
              console.log(response)
              
              setData(response.data[6].name);
            }).catch((error)=>{
              console.log(error)
            })
    };
  
    return (
        <View style={styles.container}>
            <Text style={styles.advice}>{data}</Text>
            <Button title="Get Advice" 
                onPress={getAdvice} color="green" />
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    advice: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 20,
    },
});