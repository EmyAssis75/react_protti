import { createBottomTabNavigator } from '@react-navugation/bottom-tabs';

const { Screen, Navigator } = createBottomTabNavigator();

import { TelaA } from '../telas/tabelaA';
import { TelaB } from '../telas/tabelaB';

export function TabRotas(){
  return(
    <Navigator>
      <Screen 
        name='TelaA' 
        component={TelaA}
        options={{
        tabBarIcon: ({ color, size}) =>(
          <Ionicons name="home" color={color} size={size} />
         )
        }}
      />
      <Screen 
        name='TelaB' 
        component={TelaB} 
        options={{
        tabBarIcon: ({ color, size}) =>(
          <Ionicons name="md-checkmark-circle" color={color} size={size} />
         )
        }}  
      />
    <Navigator/>
  );
};
