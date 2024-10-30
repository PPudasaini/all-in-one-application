import { View, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const Tabslayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarStyle:{
          backgroundColor: "#020617",
          borderTopWidth: 2,
          borderTopColor: "#64748b",
        },
        tabBarItemStyle: {
          borderRightWidth: 1,
          borderRightColor: "#1E293B",
        },
        tabBarInactiveTintColor: "#8b5cf6",
      }}>
        <Tabs.Screen 
          name = "profile"
          options ={{
            title: "Home/Profile",
            headerShown: false,
            tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={ color } />
          }}
        />

        <Tabs.Screen 
          name = "exercise"
          options ={{
            title: "Exercise",
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome5 name="dumbbell" size={24} color={ color } />
          }}
        />

        <Tabs.Screen 
          name = "jobs"
          options ={{
            title: "Jobs",
            headerShown: false,
            tabBarIcon: ({ color }) => <MaterialIcons name="work" size={24} color={ color } />
          }}
        />
          
          <Tabs.Screen 
            name = "to-do-list"
            options ={{
              title: "To Do List",
              headerShown: false,
              tabBarIcon: ({ color }) => <FontAwesome5 name="clipboard-list" size={24} color={ color } />
            }}
          />
      </Tabs>
    </>
  )
}

export default Tabslayout