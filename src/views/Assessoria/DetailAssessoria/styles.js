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
`;

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
  background: #f2f2f2;
  font-family: 'RobotoSlab-Medium';
`;

export const Departament = styled.View`
    background: #fff;
    padding: 20px;
    border-radius: 7px;
    margin: 10px 0px;
`;

export const TextDepartament = styled.View`
    color: #666;
`;

export const Form = styled.View`
    margin-top: 5px;
    align-self: stretch;
`;

export const Detail = styled.View`
    flex: 1;  
`;

export const Question = styled.View`
    flex-direction: column;
    justify-content: space-between;
`;

export const Left = styled.View`
    margin: 10px 0px;
    background: #fff;
    align-items: flex-start;
    padding: 20px;
    border-radius: 7px;
`;

export const Right = styled.View`
    margin: 10px 0px;
    background: #fff;
    flex-direction: row;
    align-self: stretch;  
    align-items: flex-start;
    text-align: right;
    padding: 20px;
    border-radius: 7px;
`;

export const Date = styled.Text`
  font-size: 12px;
  margin: 5px 0;
  font-weight: bold;  
`;
export const LabelDetail = styled.Text`
  font-size: 16px;
`;
export const TitleQuestion = styled.Text`
  margin: 12px 0px;
  font-weight: bold;  
  
`;

export const TextQuestion = styled.Text`
    margin-bottom: 5px;
`;

export const Return = styled.View`
    
`;

export const ReturnT = styled.View`
    
`;
export const Avatar = styled.Image`
    width: 70px;
    height: 65px;
    margin-right: 5px;
`;

export const Hr = styled.View`
    border: 1px solid #ccc;
    margin: 8px 0;
`;
    
export const FormInput = styled(Input)`
  margin-bottom: 10px;
  align-self: stretch;
  background: #fff;
  border: 1px solid #fff;

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
  margin: 10px 0;
  align-items: flex-start;
  background: #fff;
  height: 150px;
  border: 1px solid #fff;


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

export const Checkboxcontainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`;

export const Checkbox = styled(Input)`
  align-self: center;
`;

export const LabelCheckbox = styled.Text`
  margin: 8px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 25px;
  background: #dfb01c;
`;

export const SubmitButtonText  = styled.Text`
  font-size: 17px;
  text-transform: uppercase;
  color: #333;
`;

export const AudioButton = styled(Button)`
  margin-top: 5px;
  background: #ffff;
  color: #333;
  align-items: flex-end;
  align-self: stretch;
  align-content: center;
`;

export const AudioButtonText = styled.Text`
  color: #333;
  align-self: stretch;
  align-content: center;
  text-transform: uppercase;
  margin-right: 10px;
  
`;

export const AnexoButton = styled(Button)`
  margin-top: 15px;
  background: #ffff;
  border: 1px solid #ccc;
  align-items: flex-end;

`;

export const AnexoButtonText = styled.Text`
  color: #333;
  text-transform: uppercase;
  padding-right: 10px;

`;
