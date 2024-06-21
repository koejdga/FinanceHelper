import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (key: string, value: string) => {
  try {
    if (value === undefined || value === null) {
      console.log(
        "ERROR: value for saving in AsyncStorage is undefined or null"
      );
      return false;
    }
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log(`${key} with value ${value} saved successfully!`);
    return true;
  } catch (e) {
    console.error(`Failed to save ${key}.`, e);
    return false;
  }
};

export const loadData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log(`Loaded ${key} with value ${value}`);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      return null;
    }
  } catch (e) {
    console.error(`Failed to load ${key}.`, e);
  }
};

export const removeValue = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`${key} removed`);
    return true;
  } catch (e) {
    console.log(`Unable to remove ${key}`);
    console.log(e);
    return false;
  }
};
