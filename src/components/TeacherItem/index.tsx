import React, { useState } from 'react';
import { Image, Linking } from 'react-native';
import { Container, Profile, ProfileInfo, Name, Subject, Bio, Footer, ContactButton, ContactButtonText, Price, PriceValue, ButtonsContainer, FavoriteButton } from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import AsyncStorage from '@react-native-community/async-storage';

export interface ITeachersItem{
    id:number;
    avatar: string;
    bio: string;
    cost: string;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: ITeachersItem;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher, favorited}) => {
    const formatWhatsapp = teacher.whatsapp.replace(/ /g,'');
    const [ isFavorited, setIsFavorited ] = useState(favorited);

    function handleLinkToWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=55${47999642834}`)
    }

    async function handleToggleFavorite() {
        let favoriteArray = [];
        const favorites = await AsyncStorage.getItem('@favorites');
        
        if(favorites) {
            favoriteArray = JSON.parse(favorites);
        }
        
        if(isFavorited) {
            const favoriteIndex = favoriteArray.findIndex((teacherItem: ITeachersItem) => {
                return teacherItem.id === teacher.id;
            })

            favoriteArray.splice(favoriteIndex, 1);

            setIsFavorited(false);
        } else {
            setIsFavorited(true);
            favoriteArray.push(teacher);
        }

        console.log(favoriteArray, isFavorited, isFavorited);

        await AsyncStorage.setItem('@favorites', JSON.stringify(favoriteArray));
    }

    return (
        <Container>
            <Profile>
                <Image 
                    style={{width: 64, height: 64, borderRadius:32, backgroundColor: '#eee'}}
                    source={{uri: teacher.avatar}}
                />

                <ProfileInfo>
                    <Name>{teacher.name}</Name>
                    <Subject>{teacher.subject}</Subject>
                </ProfileInfo>                
            </Profile>

            <Bio>
                {teacher.bio}
            </Bio>

            <Footer>
                <Price>
                    Preço/hora {'   '}
                    <PriceValue>R$ {teacher.cost}</PriceValue>
                </Price>

                <ButtonsContainer>
                    <FavoriteButton favorited={isFavorited} onPress={handleToggleFavorite}>
                        <Image source={isFavorited ? heartOutlineIcon : unfavoriteIcon}/>
                    </FavoriteButton>

                    <ContactButton onPress={handleLinkToWhatsapp}>
                        <Image source={whatsappIcon}/>
                        <ContactButtonText>Entrar em contato</ContactButtonText>
                    </ContactButton>
                </ButtonsContainer>
            </Footer>

        </Container>

    )
}

export default TeacherItem;