import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '../../components/Button';
// import Input from '../../components/FormInput';

export const Header = styled.View`
  background: #333;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  padding: 18px;
`;

export const Menu = styled.Text`
  font-size: 14px;
  color: #777;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`
export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 30px 15px 0px;
  background: #fff;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #666;
  padding: 10px;
  font-family: 'RobotoSlab-Medium';
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #666;
  padding: 15px;
`;

// export const ContainerCard = styled.View`
//   margin-left: 10px;
//   margin-right: 10px;
//   margin-top: 20px;
// `;

export const DashButtons = styled.View`
  flex: 1;
  flex-direction: row;
  align-content: center;
  align-self: center;
`;
export const Items = styled.View`
  margin-top: 20px;
`
export const ItemAssessorias = styled(Button)`
  margin-top: 25px;
  padding: 40px;
  background: #333;
  `;

export const TextAssessorias = styled.Text`
color: #fff;  
font-size: 17px;
`

export const ItemCursos = styled(Button)`
  margin-top: 25px;
  margin-right: 5px;
  padding: 40px;
  background: #dfb01c;

`;

export const TextCursos = styled.Text`
  `
// export const List = styled.FlatList.attrs({
//   showVerticalScrollIndicator: false,
//   contentContainerStyle: {padding: 30},
// })``;
