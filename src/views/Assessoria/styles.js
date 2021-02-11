import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Main = styled.View`
`
export const Container = styled.ScrollView.attrs({
  // showVerticalScrollIndicator: false,
  // contentContainerStyle: { padding: 30 },
  // keyboardShouldPersistTaps: 'handled',
})`
  background: #f2f2f2;
  font-family: 'RobotoSlab-Medium';
`;

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

export const Item = styled.View`
  background: #fff;
  margin: 10px 0;
  border-radius: 6px;
  padding: 20px;
  align-self: stretch;
  align-content: stretch;

`
export const One = styled.View`
    flex-direction: row;
    align-self: stretch;
    align-items: center;
    justify-content: space-between;
`

export const Date = styled.Text`
  color: #666;
  font-size: 12px
  flex-direction: row;
  align-self: stretch;
  align-items: flex-start;

`
export const Status = styled.View`
  background: green;
  text-align: right;
  align-items: flex-end;
  border-radius: 10px
  align-content: flex-end;
  padding: 3px 8px;
  text-transform: capitalize;
  
  `
export const TextStatus = styled.Text`
  color: #fff;
  text-align: center;
  align-items: center;
  font-size: 11px;

`
export const Two = styled.View`

`
export const TitleCard = styled.Text`
  margin: 10px 0;
  color: #333;
  font-size: 16px;

`
export const Departament = styled.Text`
  color: #666;
  font-size: 13px;
  margin-bottom: 10px;
`
export const LinkDetail = styled(Button)`
  padding: 10px 0px;
  margin: 0px;
  width: 100%;
  background: #333;
`

export const Float = styled.View`
    position: absolute;
    align-items: flex-end;
    align-self: flex-end;
    justify-content: flex-end;
    bottom: 100px;
    right: 23px;
`
export const ButtonFloat = styled(Button)`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background: #333;
`
export const LinkDetailText = styled.Text`
  color: #dfb01c;
  font-size: 14px;
  text-transform: uppercase;
`