import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import colors from '../styles/colors'

import { Welcome } from '../pages/Welcome'
import { UserIdentification } from '../pages/UserIdentifications'
import { Confirmation } from '../pages/Confirmation'
import { PlantSave } from '../pages/PlantSave'
import { MyPlants } from '../pages/MyPLants'
import { AuthRoutes } from './tab.routes'

const { Navigator, Screen } = createStackNavigator()

export const StackRoutes: React.FC = () => (
  <Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >
    <Screen name="Welcome" component={Welcome} />
    <Screen name="UserIdentification" component={UserIdentification} />
    <Screen name="Confirmation" component={Confirmation} />
    <Screen name="PlantSelect" component={AuthRoutes} />
    <Screen name="PlantSave" component={PlantSave} />
    <Screen name="MyPlants" component={AuthRoutes} />

  </Navigator>
)