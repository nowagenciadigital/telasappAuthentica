import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)` 
  height: 46px;
  padding: 0px 8px;
  background: #dd9933;
  border-radius: 4px;
  background: #555;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';  
  font-size: 14px;
    color: #fff;
`;