import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log(`${key} saved successfully!`);
  } catch (e) {
    console.error(`Failed to save ${key}.`, e);
  }
};

export const loadData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    console.log("No data found for key:", key);
  } catch (e) {
    console.error(`Failed to load ${key}.`, e);
  }
};
