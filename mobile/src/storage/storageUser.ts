import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "@dtos/IUser";
import { USER_STORAGE } from "@storage/storageConfig";

export async function storageUserSave(user: IUser){
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
}

export async function storageUserGet(){
    const storage = await AsyncStorage.getItem(USER_STORAGE);

    const user: IUser = storage ? JSON.parse(storage) : {}

    return user;
}

export async function storageUserRemove(){
    await AsyncStorage.removeItem(USER_STORAGE);
}