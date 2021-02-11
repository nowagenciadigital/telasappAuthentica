import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS == 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background: #222;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;
export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;
export const SubmitButton = styled(Button)`
  margin-top: 5px;
  background: #dfb01c;
`;
// export const SubmitButtonText= styled(Button)`
//   color: #333;
//   font-size: 16px;
//   text-transform: uppercase;
// `;
export const SignLink = styled.TouchableOpacity`
  margin-top: 15px;
  text-align: center;
`;
export const SignLinkText = styled.Text`
  color: #999;
  font-weight: normal;
  font-size: 14px;
  text-align: center;
`;