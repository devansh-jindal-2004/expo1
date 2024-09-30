import { Stack } from 'expo-router'
import React from 'react'

function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name='(tab)' options={{headerShown: false}} />
    </Stack>
  )
}

export default RootLayout