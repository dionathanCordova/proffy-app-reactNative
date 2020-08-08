import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    height: 100%;
    background: #8257E5;
    justify-content: center;
    padding: 40px;
`

export const Title = styled.Text`
    color: #fff;
    font-size: 20px;
    line-height: 30px;
    margin-top: 20px;
`

export const TitleBold = styled.Text`
    font-weight: bold;
`

export const ButtonsContainer = styled.View`
    flexDirection: row;
    margin-top: 30px;
    justify-content: space-between;
`

export const ButtonPrimary = styled(RectButton)`
    height: 150px;
    width: 48%;
    background: #333;
    border-radius: 8px;
    align-items:center;
    padding-top: 45px;
    background: #9871f5;
`
export const ButtonSecondary = styled(RectButton)`
    height: 150px;
    width: 48%;
    background: #333;
    border-radius: 8px;
    align-items:center;
    padding-top: 48px;
    background: #04d361;
`

export const ButtonText = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: #fff;
`

export const TotalConnection = styled.Text`
    font-weight: bold;
    color: #d4c2ff;
    font-size: 12px;
    line-height: 20px;
    max-width: 240px;
    margin: auto;
    margin-top: 20px;
`
