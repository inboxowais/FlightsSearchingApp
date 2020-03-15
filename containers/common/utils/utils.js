import { AsyncStorage } from 'react-native'

export const setToken = async token => {
    try {
        await AsyncStorage.setItem('AuthToken', token);
    } catch (error) {
        console.log(error.message);
    }
};

export const setUserId = async userId => {
    try {
        await AsyncStorage.setItem('userId', userId);
    } catch (error) {
        console.log(error.message);
    }
}

export const getToken = () => {
    return AsyncStorage.getItem('AuthToken').then((token) => {
        if (token) {
            return token
        }
    });
}