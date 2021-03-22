import React from "react";
import Accordion from "../components/accordion";
import OptForm from "../components/opt-form";
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>자주 묻는 질문</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>
            {item.body}
            <br />
            <br />
            {item.body1}
          </Accordion.Body>
        </Accordion.Item>
      ))}
      <OptForm>
        <OptForm.Input placeholder="이메일 주소" />
        <OptForm.Button>30일 무료이용</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          시작할 준비가 되셧나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
          입력하세요.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
