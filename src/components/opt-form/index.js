/* eslint-disable react/prop-types */
import React from "react";
import { AiFillRightCircle } from "react-icons/ai";
import { Container, Input, Button, Text, Break } from "./style/opt-form";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <AiFillRightCircle alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormIntext({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
