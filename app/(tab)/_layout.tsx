import { View, Text } from 'react-native'
import React from 'react'
import { Tabs ,useRouter} from 'expo-router'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'


const TabRoot = () => {
    const navigation = useRouter();
  return (
   <GestureHandlerRootView>
     <Tabs screenOptions={{
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            // Navigate to another screen, for example, "settings"
            navigation.dismissAll()
            
          }}
          style={{
            marginRight: 10,
            padding: 5,
            backgroundColor: '#007bff',
            borderRadius: 5,
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Settings</Text>
        </TouchableOpacity>
      ),
    }}>
        <Tabs.Screen name='index' options={{}} />
        <Tabs.Screen name='about' />
        <Tabs.Screen name='profile' />
    </Tabs>
   </GestureHandlerRootView>
  )
}

export default TabRoot