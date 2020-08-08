import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Container } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeachersItem } from '../../components/TeacherItem';

import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function Favirites() {
    const [ favoritesTeachers, setFavoriteTeachers] = useState([]);
    
    async function loadFavorites() {
        const favorites = await AsyncStorage.getItem('@favorites');

        if(favorites) {
            const favoritesTeachers = JSON.parse(favorites);
            setFavoriteTeachers(favoritesTeachers);
        }
    }

    useFocusEffect(() => {
        loadFavorites();
    })
    
    return (
        <Container>
            <PageHeader title="Meus proffys favoritos"/>

            <ScrollView 
                style={{marginTop: -40}}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}    
            >
                {favoritesTeachers.map((teachers: ITeachersItem) => {
                    return (
                        <TeacherItem 
                            key={teachers.id}
                            teacher={teachers}
                            favorited={true}
                        />
                    )
                })}
            </ScrollView>
        </Container>
        
    )
}