import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

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

export const Container = styled.View`
  flex: 1;
  background: #f2f2f2;
`;

export const Form = styled.ScrollView.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 }
})`
    margin-top: 30px;
    align-self: stretch;
`;
export const FormInput = styled(Input)`
    background: transparent;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    
`;
export const FormInputHide = styled(Input)`
  display: none;
`;
export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
export const LogoutButton = styled(Button)`
  margin-top: 20px;
  background: #f64c75;
`;
export const Separator = styled.View`
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin: 20px 0 30px;
`;