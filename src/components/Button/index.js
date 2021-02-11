import React from 'react';
import PropTypes from 'prop-types';

// import { ReactButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

export default function Button({ children, ...rest }){
    return(
        <Container {...rest}>
            <ButtonText>{children}</ButtonText>
        </Container>
    );
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};