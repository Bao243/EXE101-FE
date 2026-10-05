import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoadingScreen({ navigation }) {
  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
          navigation.replace('Main'); // Đã đăng nhập → vào thẳng app
        } else {
          navigation.replace('LoginLanding'); // Chưa đăng nhập → về login
        }
      } catch {
        navigation.replace('LoginLanding'); // Lỗi → về login cho an toàn
      }
    };

    const t = setTimeout(checkAuth, 1200); // Giữ splash 1.2s rồi mới kiểm tra
    return () => clearTimeout(t);
  }, [navigation]);

  return (
    <LinearGradient colors={["#F4E4B5", "#F1CF82"]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={styles.full}>
      <Image source={require('../../assets/images/MealBuddy Logo Transparent.png')} style={styles.logo} resizeMode="contain" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  full: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  logo: { width: 160, height: 160, marginBottom: 10 },
  title: { fontSize: 24, fontWeight: '800', color: '#3C2C21' },
  sub: { fontSize: 10, color: '#6F5E50', marginTop: 2 },
});
