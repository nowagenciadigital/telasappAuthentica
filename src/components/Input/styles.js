import styled from 'styled-components/native';

export const Container = styled.View`
  font-family: 'RobotoSlab-Medium';
  padding: 0 15px;
  height: 46px;
  background: #222;
  border-radius: 4px;
  border: 1px solid #333;
  flex-direction: row;
  align-items: center;
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: '#aaa',
  // borderBottomColor : '#fff',
})`
  font-family: 'RobotoSlab-Medium';
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #ccc;
  padding-top: 3px;
  align-items: center;

  i{
    align-items: center;

  }
`