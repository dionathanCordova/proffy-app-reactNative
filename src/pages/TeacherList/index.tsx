import React, { useState, useEffect } from 'react';
import { Text, TextInput } from 'react-native';

import { 
    Container,
    SearchForm,
    LabelInput,
    InputText,
    InputGroup,
    InputBlock,
    SubmitButton,
    SubmitButtonText
} from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeachersItem } from '../../components/TeacherItem';
import { ScrollView, BorderlessButton } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';
import api from '../../service/api';

import AsyncStorage from '@react-native-community/async-storage';

export default function TeachersList() {
    const [ isFilterVisible, setIsFilterVisible ] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [teachers, setTeachers] = useState([]);
    const [ favoritesTeachers, setFavoriteTeachers] = useState<number[]>([]);

    function loadFavorites() {
        AsyncStorage.getItem('@favorites').then(response => {
            if(response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeacherIds = favoritedTeachers.map((teacher: ITeachersItem) => {
                    return teacher.id
                });

                setFavoriteTeachers(favoritedTeacherIds);
            }
        })
    }

    function handleToggleFilterSearch() {
        setIsFilterVisible(!isFilterVisible)
    }

    async function handleSubmit() {
        loadFavorites()

        const response = await api.get('classes', {
            params: {subject, week_day, time}
        });

        setTeachers(response.data);
        setIsFilterVisible(false)
    }

    return (
        <Container>
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFilterSearch}>
                        <Icon name="filter" size={20} color="#fff"/>
                    </BorderlessButton>
                )}
            >
                {isFilterVisible && (<SearchForm>
                    <LabelInput>Matéria</LabelInput>
                    <InputText 
                        placeholder="Qual a matéria?"
                        placeholderTextColor="#c1bccc"
                        value={subject}
                        onChangeText={text => setSubject(text)}
                    />

                    <InputGroup>
                        <InputBlock>
                            <LabelInput>Dia da semana</LabelInput>
                            <InputText 
                                placeholder="Qual o dia?"
                                placeholderTextColor="#c1bccc"
                                value={week_day}
                                onChangeText={text => setWeekDay(text)}
                            />
                        </InputBlock>

                        <InputBlock>
                            <LabelInput>Horario</LabelInput>
                            <InputText 
                                placeholder="Qual o horario?"
                                placeholderTextColor="#c1bccc"
                                value={time}
                                onChangeText={text => setTime(text)}
                            />
                        </InputBlock>
                    </InputGroup>

                    <SubmitButton onPress={handleSubmit}>
                        <SubmitButtonText>FIltrar</SubmitButtonText>
                    </SubmitButton>

                </SearchForm>)}
            </PageHeader>

            <ScrollView 
                style={{marginTop: -40}}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}    
            >
                {teachers.map((teacher: ITeachersItem) => {
                    return (
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher} 
                            favorited={favoritesTeachers.includes(teacher.id)}
                        />
                    )
                })}
            </ScrollView>
        </Container>
    )
}