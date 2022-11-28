import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { Input, Button } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespace } from "../utils/common";
import { images } from "../utils/images";
import { Alert } from "react-native";
import { login } from "../../firebaseConfig";

const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  // background-color: ${({ theme }) => theme.background};
  padding: 0 30px;
`;

const Title = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-align: center;
  padding: 10px;
`;

const Contents = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 4px;
`;

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorText};
`;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef();

  const [errorMessage, setErrorMessage] = useState("");

  //이메일 유효성 검사
  const _handleEmailChange = (email) => {
    const changedEmail = removeWhitespace(email);
    setEmail(changedEmail);
    setErrorMessage(
      validateEmail(changedEmail) ? "" : "올바른 이메일을 입력해주세요."
    );
  };

  //비밀번호 유효성 검사
  const _handlePasswordChange = (password) => {
    setPassword(removeWhitespace(password));
  };

  //로그인 버튼
  const _handleLoginButtonPress = async () => {
    try {
      const user = await login({ email, password });
      console.log("Logged in with:", user.email);
      // console.log("user.uid:", user.uid);
      navigation.navigate("Main");
    } catch (e) {
      Alert.alert("LoginScreen Error", e.message);
    }
  };

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!(email && password && !errorMessage));
  }, [email, password, errorMessage]);

  // const user = firebase.auth().currentUser;
  // console.log(user);

  return (
    <Background source={images.background} resizeMode="cover">
      <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 1 }}
        extraScrollHeight={20}
      >
        <Container>
          <Title>Antudy</Title>
          <Contents>
            <Input
              label="이메일"
              value={email}
              onChangeText={_handleEmailChange}
              onSubmitEditing={() => passwordRef.current.focus()}
              placeholder="이메일을 입력해주세요."
              returnKeyType="next"
            />
            <Input
              ref={passwordRef}
              label="비밀번호"
              value={password}
              onChangeText={_handlePasswordChange}
              onSubmitEditing={_handleLoginButtonPress}
              placeholder="비밀번호를 입력해주세요."
              returnKeyType="done"
              isPassword
            />

            <ErrorText>{errorMessage}</ErrorText>
            <Button
              title="로그인"
              onPress={_handleLoginButtonPress}
              disabled={disabled}
            />
            <Button
              title="계정이 없으신가요?"
              onPress={() => navigation.navigate("Signup")}
              isFilled={false}
            />
          </Contents>
        </Container>
      </KeyboardAwareScrollView>
    </Background>
  );
};

export default LoginScreen;
