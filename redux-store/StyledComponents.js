import * as React from "react";

import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";

//Container
export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
`;

// Text
export const Paragraph = styled.Text`
  text-align: left;
  padding-bottom: 16px;
  color: ${(props) => props.theme.TEXT_COLOR};
  font-size: ${(props) => props.theme.FONT_SIZE_LARGE};
  font-family: ${(props) => props.theme.FONT_FAMILY};
`;

export const ParagraphSmall = styled.Text`
  text-align: left;
  padding-bottom: 16px;
  color: ${(props) => props.theme.TEXT_COLOR};
  font-size: ${(props) => props.theme.FONT_SIZE_MEDIUM};
  font-family: ${(props) => props.theme.FONT_FAMILY};
`;

/*
  font-size: ${(props) => props.theme.FONT_SIZE_LARGE};

export const AndroidSafeArea = styled.AndroidSafeArea`
  flex: 1;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  padding-top: Platform.OS === "android" ? StatusBar.currentHeight : 0;
`;


export const topNavigationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
`;

export const innerNavigationTopContainer = styled.View`
  flex-direction: row;
  gap: 16;
`;

export const topNavigationButton = styled.View`
  width: 32;
  height: 32;
  border-radius: 100;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.SPECIAL};
`;
*/
