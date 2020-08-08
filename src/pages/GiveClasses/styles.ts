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
    font-weight: 700;
    color: #fff;
    font-size: 32px;
    line-height: 37px;
    max-width: 180px;
`
export const Description = styled.Text`
    margin-top: 24px;
    color: #d4c2ff;
    font-size: 16px;
    line-height: 26px;
    max-width: 240px;
`
export const OkButton = styled(RectButton)`
    margin-vertical: 40px;
    background: #04d361;
    height: 58px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    
`
export const OkButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
`