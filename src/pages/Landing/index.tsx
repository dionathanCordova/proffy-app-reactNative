import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Alert } from 'react-native';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import { useNavigation } from '@react-navigation/native';

import {
    Container, 
    Title, 
    TitleBold,
    ButtonsContainer,
    ButtonPrimary,
    ButtonSecondary,
    ButtonText,
    TotalConnection
} from './styles';

import api from '../../service/api';

function Landing () {
    const navigation = useNavigation();
    const [ connections, setConnections ] = useState(0);

    useEffect(() => {
        api.get('connection').then(response => {
            setConnections(response.data.total);
        })
    }, []);

    function handleNavigateToGiveClassesPage() {
        navigation.navigate('giveClasses')
    }

    function handleNavigateToStudyPages() {
        navigation.navigate('study')
    }

    return (
        <ScrollView>
            <Container>
                <Image source={landingImg} style={{width: '100%', resizeMode: 'contain'}}/>

                <Title>
                    Seja bem-vindo, {'\n'} 
                    <TitleBold>O que deseja fazer? </TitleBold>
                </Title>

                <ButtonsContainer>
                    <ButtonPrimary onPress={handleNavigateToStudyPages}> 
                        <Image source={studyIcon}/>
                        <ButtonText>Estudar</ButtonText>
                    </ButtonPrimary>

                    <ButtonSecondary onPress={handleNavigateToGiveClassesPage}> 
                        <Image source={giveClassIcon}/>
                        <ButtonText>Dar aulas</ButtonText>
                    </ButtonSecondary>

                </ButtonsContainer>

                <TotalConnection>
                    Total de {connections} conexões já realizadas. <Image source={heartIcon} />
                </TotalConnection>
            </Container>
        </ScrollView>
    )
}

export default Landing;