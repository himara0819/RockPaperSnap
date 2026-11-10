import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0D9488',
        tabBarInactiveTintColor: '#94A3B8',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Play Game',
          tabBarIcon: ({ focused }) => (
  <Ionicons
    name="game-controller"
    size={24}
    color={focused ? '#0D9488' : '#94A3B8'}
  />
),
        }}
      />

      <Tabs.Screen
        name="rules"
        options={{
          title: 'Rules',
         tabBarIcon: ({ focused }) => (
  <Ionicons
    name="information-circle"
    size={24}
    color={focused ? '#0D9488' : '#94A3B8'}
  />
),
        }}
      />
    </Tabs>
  );
}
