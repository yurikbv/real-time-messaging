import 'react-native-gesture-handler';
import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Conversations from './Screens/Conversations';
import Conversation from './Screens/Conversation';
import Settings from './Screens/Settings';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ConversationsStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Conversations" component={Conversations} options={{title: 'All conversations'}} />
      <Stack.Screen name="Conversation" component={Conversation} options={{title: 'Conversation'}} />
    </Stack.Navigator>);

const TabNavigator = () => (
    <NavigationContainer>
      <Tab.Navigator
          initialRouteName: 'Conversations'
          tabBarOptions={{
            activeTintColor: 'green',
            inactiveTintColor: '#556'
          }}
      >
        <Tab.Screen name="Conversations" component={ConversationsStack} options={{
          tabBarIcon: ({color}) => {
            let iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-chatbubbles`;
            return (<Ionicons name={iconName} size={20} color={color}/>);
          }
        }}/>
        <Tab.Screen name="Settings" component={Settings} options={{
          tabBarIcon: ({color}) => {
            let iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-star`;
            return (<Ionicons name={iconName} size={20} color={color}/>)
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
);

export default TabNavigator;
