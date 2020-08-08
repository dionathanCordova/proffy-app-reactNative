import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeachersList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';
import Icon from 'react-native-vector-icons/Ionicons';

const { Navigator, Screen } = createBottomTabNavigator();

export default function StudyTabs() {
    return (
        <Navigator 
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20
                },
                labelStyle: {
                    fontWeight: "bold",
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d'

            }}
        >
            <Screen 
                name="teacherList" 
                component={TeachersList}
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({color, size, focused }) => {
                        return (
                            <Icon name="ios-easel" size={size} color={focused ? '#8257e5' : color}/>
                        )
                    }
                }}
            />

            <Screen 
                name="favorites" 
                component={Favorites}
                options={{
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({color, size, focused }) => {
                        return (
                            <Icon name="ios-heart" size={size} color={focused ? '#8257e5' : color}/>
                        )
                    }
                }}
            />
        </Navigator>
    )
}