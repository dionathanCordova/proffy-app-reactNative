import React, { ReactNode } from 'react';
import { Image } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { 
    Container, 
    TopBar,
    Title,
    Header
} from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

interface PageHederProps {
    title: string;
    headerRight?: ReactNode
}

const PageHeader: React.FC<PageHederProps> = ({title, headerRight, children}) => {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate('landing');
    }

    return (
        <Container>
            <TopBar>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain"/>
                </BorderlessButton>

                <Image source={logoImg}/>
            </TopBar>

            <Header>
                <Title>{title}</Title>
                {headerRight}
            </Header>

            {children}
        </Container>
    )
}

export default PageHeader;