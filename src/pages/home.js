import React from "react";
import { OptForm } from "../components";
import { HeaderContainer } from "../containers/header";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";
import Feature from "../components/feature";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>영화, TV프로그램을 무제한으로,</Feature.Title>
          <Feature.SubTitle>
            다양한 디바이스에서 시청하세요, 언제든 해지하실수 있습니다.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="이메일 주소" />
            <OptForm.Button>30일 무료이용</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              시작할 준비가 되셧나요? 멤버십을 등록하거나 재시작하려면 이메일
              주소를 입력하세요.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
