import {View, Text, FlatList} from "react-native";
import axios from "axios";
import {useState, useEffect} from "react";
import styles from '../styles';

export default function UserListPage(){
    const[users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/registration/api/users/")
        .then((res) => {
            setUsers(res.data)
        })
        .catch((err) => {
            console.error(err);
        })
    },[]
    );

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Registered Users</Text>
            <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item})=> (
                <View style={styles.card}>
                    <Text>Firstname: {item.first_name}</Text>    
                    <Text>Lastname: {item.last_name}</Text>     
                    <Text>Email: {item.email}</Text>          
                </View>       
            )}/>
        </View>
    )
}