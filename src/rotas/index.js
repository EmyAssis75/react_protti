import { createBottomTabNavigator } from '@react-navugation/bottom-tabs';

const { Screen, Navigator } = createBottomTabNavigator();

import { TelaA } from '../telas/tabelaA';
import { TelaB } from '../telas/tabelaB';

export function TabRotas(){
  return(
    <Navigator>
      <Screen name='TelaA' component={TelaA} />
      <Screen name='TelaB' component={TelaB} />
    <Navigator/>
  );
};
