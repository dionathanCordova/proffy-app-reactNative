import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses/indes';
import StudyTabs from './StudyTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="landing" component={LandingPage}/>
                <Screen name="giveClasses" component={GiveClasses}/>
                <Screen name="study" component={StudyTabs}/>
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;