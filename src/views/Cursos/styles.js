import styled from 'styled-components/native';
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
  padding: 30px;
`;

export const CardD = styled.View`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
`;

export const TitleCard = styled.Text`
  color: #333
  font-size: 15px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 25px;
`;

export const SubmitButtonText = styled.Text`
 
`;