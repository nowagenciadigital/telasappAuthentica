import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

export const Header = styled.View`
  background: #333;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Menu = styled.Text`
  font-size: 14px;
  color: #777;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`
export const Title = styled.Text`
    font-size: 18px;
    font-family: 'RobotoSlab-Medium';
    color: #f2f2f2;
    padding: 20px;
    font-weight: bold;
    line-height: 40px;
    align-self: center;
    margin-top: 5px;
    text-transform: uppercase;
`;

export const Container = styled.ScrollView.attrs({
  // showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
  keyboardShouldPersistTaps: 'handled',
})`
flex: 1;
background: #fff;

`;

export const Form = styled.View`
    margin-top: 30px;
    align-self: stretch;
  
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  align-self: stretch;
  background: #fff;
  border: 1px solid #ccc;

  &::placeholder{
    color: #aaaaaa;
    align-items: center;
    padding-top:10px;
  }
`;

export const Label = styled.Text`
  text-transform: uppercase;
  font-size: 16px;
  margin-bottom: 3px; 
`
export const TextInput = styled(Input)`
  margin-bottom: 10px;
  align-items: flex-start;
  background: #fff;
  height: 150px;
  border: 1px solid #ccc;


  &::placeholder{
    color: #aaaaaa;
    border-bottom: 0px;
    align-items: center;
  }
  &::i{
    padding-top:10px;
    align-items: center;
  }
`;

export const SubmitButton = styled(Button)`
  margin-top: 25px;
`;

export const SubmitButtonText  = styled(Button)`

`;
export const AudioButton = styled(Button)`
  margin-top: 5px;
  background: transparent;
  color: #333;
  align-items: flex-start;

  svg{
    widht: 40px;
  }
`;

export const AudioButtonText = styled.Text`
  color: #333;
`;

export const AnexoButton = styled(Button)`
  margin-top: 5px;
  background: #f2f2f2;
  border: 1px solid #ccc;
  align-items: flex-start;
`;

export const AnexoButtonText = styled.Text`
  color: #333;
`;
