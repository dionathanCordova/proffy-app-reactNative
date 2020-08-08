import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface FaviritedProps {
	favorited: boolean;
}

export const Container = styled.View`
    background: #fff/
    border-width: 1px;
    border-color: #e6e6f0;
    border-radius: 8px;
    margin-bottom: 16px;
    overflow: hidden;
`
export const Profile = styled.View`
    flexDirection: row;
    align-items: center;
    padding: 24px;
`
export const ProfileInfo = styled.View`
    margin-left: 16px;
`
export const Name = styled.Text`
    font-weight: bold;
    color: #32264d;
    font-size: 20px;
`
export const Subject = styled.Text`
    color: #6a6180;
    font-size: 12px;
    margin-top: 4px;
`
export const Bio = styled.Text`
    color: #6a6180;
    font-size: 15px;
    margin-horizontal: 24px;
    line-height: 24px;
    color: #6a6180;
`

export const Footer = styled.View`
    background: #fafafc;
    padding: 24px;
    align-items: center;
    margin-top: 24px;
`
export const Price = styled.Text`
    color: #6a6180;
    font-size: 14px;
`
export const PriceValue = styled.Text`
    font-weight: bold;
    color: #8257e5;
    font-size: 16px;
`
export const ButtonsContainer = styled.View`
    flex-direction: row;
    margin-top: 16px;
`

export const FavoriteButton = styled(RectButton)<FaviritedProps>`
    background: ${props => props.favorited ? '#8257e5' : '#e33d3d'};
    width: 56px;
    height: 56px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin-right: 8px;

`
export const ContactButton = styled(RectButton)`
    background: #04d361;
    flex: 1;
    height: 56px;
    border-radius: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 8px;

`
export const ContactButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    margin-left: 16px;
`