import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { Button, Input } from '../components';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespace } from "../utils/common";
import { Alert } from "react-native";
import { signup } from "../firebase";



const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background };
    padding: 100px 40px;
    
`;

const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
`;

const ErrorText = styled.Text`
    align-items: flex-start;
    width: 100%;
    height: 20px;
    margin-bottom: 10px;
    line-height: 20px;
    color: red;
`;



const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [disabled, setDisabled] = useState(true);

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const didMountRef = useRef();

    useEffect(() => {
        if(didMountRef.current) {
            let _errorMessage = "";
            if(!name) {
                _errorMessage = "이름을 입력해주세요.";
            } else if(!validateEmail(email)) {
                _errorMessage = "이메일을 입력해주세요.";
            } else if(password.length < 6) {
                _errorMessage = "6자 이상의 이메일을 입력해주세요."
            } else if(password !== passwordConfirm) {
                _errorMessage = "입력하신 비밀번호가 일치하지 않습니다."
            } else {
                _errorMessage = "";
            }
            setErrorMessage(_errorMessage);
        } else {
            didMountRef.current = true;
        }
    }, [name, email, password, passwordConfirm]);

    useEffect(() => {
        setDisabled(
            !(name && email && password && passwordConfirm && !errorMessage)
        );
    }, [name, email, password, passwordConfirm, errorMessage]);


    const _handleSignupButtonPress = async () => {
        try {
            const user = await signup({ email, password});
            console.log(user);
            Alert.alert('회원가입 성공', user.email);
        } catch (e) {
            Alert.alert('회원가입 실패', e.message);
        }
    };

    return (
        <KeyboardAwareScrollView extraScrollHeight={20}>
            <Container>
                <Title>회원가입</Title>
                <Input
                    label="이름"
                    value={name}
                    onChangeText={text => setName(text)}
                    onSubmitEditing={() => {
                        setName(name.trim());
                        emailRef.current.focus();
                    }}
                    onBlur={() => setName(name.trim())}
                    placeholder="이름을 입력해주세요."
                    returnKeyType="next"
                    />
                <Input
                    ref={emailRef}
                    label="이메일"
                    value={email}
                    onChangeText={text => setEmail(removeWhitespace(text))}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    placeholder="이메일을 입력해주세요."
                    returnKeyType="next"
                />
                <Input
                    ref={passwordRef}
                    label="비밀번호"
                    value={password}
                    onChangeText={text => setPassword(removeWhitespace(text))}
                    onSubmitEditing={() => passwordConfirmRef.current.focus()}
                    placeholder="비밀번호를 입력해주세요."
                    returnKeyType="done"
                    isPassword
                />
                <Input
                    ref={passwordConfirmRef}
                    label="비밀번호 확인"
                    value={passwordConfirm}
                    onChangeText={text => setPasswordConfirm(removeWhitespace(text))}
                    onSubmitEditing={_handleSignupButtonPress}
                    placeholder="비밀번호를 확인해주세요."
                    returnKeyType="done" //done을 누르면 회원가입 버튼 클릭
                    isPassword
                />
                <ErrorText>{errorMessage}</ErrorText>
                <Button
                    title="가입하기"
                    onPress={_handleSignupButtonPress}
                    disabled={disabled}
                />
                
            </Container>
        </KeyboardAwareScrollView> 
    );
};

export default Signup;