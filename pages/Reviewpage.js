import {View, Text, Button, Alert} from 'react-native';
import axios from 'axios';

import styles from '../styles';

export default function ReviewPage({route, navigation}) {

    const {formData} = route.params;

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://192.168.20.238:8000/registration/api/register/', formData); 
            
            if (typeof Alert !== 'undefined' && Alert.alert) {
                 Alert.alert("Success", "Registration Successful");
            } else {
                 console.log("Registration Successful", response.data);
            }
            navigation.goBack();
        } catch (error) {
             if (typeof Alert !== 'undefined' && Alert.alert) {
                 Alert.alert("Error", JSON.stringify(error.response?.data || "Something went wrong"));
            } else {
                 console.error("Registration Error", error.response?.data || error.message);
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.header}>Review Information</Text>

                <Text style={styles.text}>First Name: {formData.first_name}</Text>
                <Text style={styles.text}>Last Name: {formData.last_name}</Text>
                <Text style={styles.text}>Email: {formData.email}</Text>
                <Text style={styles.text}>Password: {formData.password}</Text>
                <Text style={styles.text}>Gender: {formData.gender}</Text>
                
                <View style={styles.buttonSpacing}>
                    <Button 
                        color={styles.buttonColor.backgroundColor} 
                        title='Go back to edit' 
                        onPress={() => navigation.goBack()}/>
                </View>

                <Button 
                    color={styles.buttonColor.backgroundColor} 
                    title='Submit' 
                    onPress={handleSubmit}/>
            </View>
        </View>

    )
}