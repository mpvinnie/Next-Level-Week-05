import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { PlantSelect } from '../pages/PlantSelect'
import { MyPlants } from '../pages/MyPLants'
import colors from '../styles/colors'
import { MaterialIcons } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator()

export const AuthRoutes = () => {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: {
          alignItems: 'center',
          height: 64
        }
      }}
    >
      <Screen
        name="Nova Planta"
        component={PlantSelect}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <Screen
        name="Minhas Plantas"
        component={MyPlants}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ))
        }}
      />
    </Navigator>
  )
}