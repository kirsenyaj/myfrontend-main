import {View, Text, TextInput, Button} from 'react-native';
import {useState} from 'react';

import styles from '../styles';

import axios from 'axios'

export default function EditUserPage({route, navigation}){
    const {user} = route.params;

    const [firstname, setFirstName] = useState(user.first_name);
    const [lastname, setLastName] = useState(user.last_name);
    const [user_email, setUserEmail] = useState(user.email);
    const [user_gender, setUserGender] = useState(user.gender);
    const [user_password, setUserPassword] = useState(user.password);

    const handleUpdate = () => {
        if (!firstname || !lastname || !user_email || !user_gender || !user_password) {
            window.alert("Error", "Please fill up all required fields");
            return;
        }

        axios
            .put(`http://127.0.0.1:8000/registration/api/users/${user.id}/`,{
                first_name: firstname,
                last_name: lastname,
                email: user_email,
                gender: user_gender,
                password: user_password,
            })
            .then(() => {
                window.alert("Success", "User updated successfully!");
                navigation.goBack();
            })
            .catch((error) => {
                console.error(error);
                window.alert("Error", "Failed to update");
            });
    };

    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.header}>Edit User</Text>

                <TextInput
                style={styles.input}
                placeholder='First Name'
                value={firstname}
                onChangeText={setFirstName}/>

                <TextInput
                style={styles.input}
                placeholder='Last Name'
                value={lastname}
                onChangeText={setLastName}/>

                <TextInput
                style={styles.input}
                placeholder='Email'
                value={user_email}
                onChangeText={setUserEmail}/>

                <TextInput
                style={styles.input}
                placeholder='Gender'
                value={user_gender}
                onChangeText={setUserGender}/>

                <TextInput
                style={styles.input}
                placeholder='Password'
                value={user_password}
                secureTextEntry={true} 
                onChangeText={setUserPassword}/>

                <View>
                    <Button
                    color={styles.buttonColor.backgroundColor}
                    title="Update Record"
                    onPress={handleUpdate}/>
                </View>
            </View>
        </View>
    )
}