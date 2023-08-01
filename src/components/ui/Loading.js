// Loading.js
import React from 'react';
import {Background, LoadingText} from './Styles';
import Spinner from '../ui/assets/spinner.gif';

export default () => {
    return (
        <Background>
            <img src={Spinner} alt="로딩중" width="5%" />
            <LoadingText>Loading...</LoadingText>
        </Background>
    );
};