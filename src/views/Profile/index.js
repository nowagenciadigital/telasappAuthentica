import React, { useRef, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import Logo from '../../components/Logo';

import {Container, Header, Menu, Title, Form, FormInput, SubmitButton, LogoutButton, Separator, FormInputHide} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Profile({ navigation }) {
//   const profile = useSelector(state => state.broker.profile);

//   const [id] = useState(profile.id);
//   const [name, setName] = useState(profile.name);
//   const [email, setEmail] = useState(profile.email);
//   const [telephone, setTelephone] = useState(profile.telephone);
//   const [doc, setDoc] = useState(profile.doc);
//   const [oldPassword, setOldPassword] = useState('');
//   const [password, setPassword] = useState();
//   const [confirmPassword, setConfirmPassword] = useState('');

//   useEffect(() => {
//     setOldPassword('');
//     setPassword('');
//     setConfirmPassword('');
//   }, [profile]);

//   function handleSubmit(){
//     dispatch(updateProfileRequest({
//         id,
//         name,
//         email,
//         oldPassword,
//         password,
//         confirmPassword,
//         telephone,
//         doc,
//     }))
//   }

  function handleSubmit(){
    navigation.navigate('Profile')
  }
  
  function handleLogout(){
    navigation.navigate('Login')
  }

  return (
    <>
         <Header>
          <Menu onPress={() => navigation.navigate('Dashboard')}>
            <Icon name="home" size={30} color="#fff"/>
          </Menu>
          <Title>Meu Perfil</Title>
          <Menu onPress={() => navigation.navigate('Profile')}>
            <Icon name="person" size={30} color="#fff"/>
          </Menu>
      </Header>

      <Container>
        <Form>
          <FormInputHide
            // value={id.toString()}
          />
        <FormInput
            // icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome e Sobrenome"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            // value={name}
            // onChangeText={setName}
          />
          <FormInput
            // icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail"
            // ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => telephoneRef.current.focus()}
            // value={email}
            // onChangeText={setEmail}
          />

          <FormInput
            // icon="phone"
            keyboardType="phone-pad"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Telefone"
            // ref={telephoneRef}
            returnKeyType="next"
            // onSubmitEditing={() => docRef.current.focus()}
            // value={telephone}
            // onChangeText={setTelephone}
          />

          <FormInput
            // icon="perm-contact-calendar"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="CPF"
            // ref={docRef}
            returnKeyType="next"
            // onSubmitEditing={() => oldPasswordRef.current.focus()}
            // value={doc}
            // onChangeText={setDoc}
          />

          <Separator />

          <FormInput
            // icon="lock-outline"
            // secureTextEntry
            placeholder="Sua nova senha"
            // ref={passwordRef}
            returnKeyType="next"
            // onSubmitEditing={() => confirmPasswordRef.current.focus()}
            // value={password}
            // onChangeText={setPassword}
          />
          <FormInput
            // icon="lock-outline"
            // secureTextEntry
            placeholder="Confirmar nova senha"
            // ref={confirmPasswordRef}
            returnKeyType="send"
            // onSubmitEditing={handleSubmit}
            // value={confirmPassword}
            // onChangeText={setConfirmPassword}
          />

          <SubmitButton onPress={handleSubmit}>
            Atualizar Perfil
          </SubmitButton>

          <LogoutButton onPress={handleLogout}>
            Logout
          </LogoutButton>

          {/* <SignLink onPress={() => navigation.navigate('SignIn')}>
            <SignLinkText>Já tenho conta</SignLinkText>
          </SignLink> */}
        </Form>
      </Container>
    </>
  );
}

// Profile.navigationOptions = ({ navigation }) => ({
//   headerTitle: () => <Logo />,
//   headerStyle: {
//     backgroundColor: '#273b80',
//   },
//   headerTintColor: '#fff',
//   headerLeft: () => (
//     <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
//       <Icon name="home" size={30} color="#fff" />
//     </TouchableOpacity>
//  ),
//  headerRight: () => (
//   <TouchableOpacity onPress={() => navigation.navigate('Indicator')}>
//     <Icon name="person-add" size={30} color="#fff" />
//   </TouchableOpacity>
// ),
// });
  // headerTitle: () => <Logo />,
  // headerStyle: {
  //   backgroundColor: '#273b80',
  //   textAlign: 'center',
  // },
  // headerTintColor: '#fff',
  // headerLeft: () => (
    // <TouchableOpacity onPress={() => {
    //   if (!navigation.state.isDrawerOpen) {
    //     navigation.openDrawer();
    //   } else {
    //     navigation.closeDrawer();
    //   }
    // }}>
    //   <Icon name="menu" size={30} color="#fff" />
    // </TouchableOpacity>
  // ),
// });

