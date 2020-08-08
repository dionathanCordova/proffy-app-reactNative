import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background: #f0f0f7;
`
export const TeachersList = styled.ScrollView`
    margin-top: -60px;
`

export const SearchForm = styled.View`
    margin-bottom: 24px;
`

export const LabelInput = styled.Text`
    color: #d4c2ff;
`
export const InputText = styled.TextInput`
    height: 54px;
    background: #fff;
    border-radius: 8px;
    justify-content: center;
    padding-horizontal: 16px;
    margin-top: 4px;
    margin-bottom: 16px;
`
export const InputGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const InputBlock = styled.View`
    width: 48%;
`

export const SubmitButton = styled(RectButton)`
    background: #04d361;
    height: 56px;
    border-radius: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const SubmitButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`

