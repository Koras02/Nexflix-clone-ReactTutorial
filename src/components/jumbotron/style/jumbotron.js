// 사용자 동작을 기록해서 재사용해주는 방법으로 반복되는 작업이 줄어든다
import styled from "styled-components/macro";

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: #fff;
  overflow: hidden;
`;

export const Inner = styled.section`
  display: flex;
  align-items: center;
    flex-direction: ${({ direction }) => direction}
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column; // 1000px 일때 가운데로
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 25px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media screen and (max-width: 600px) {
    font-size: 20px;
  } ;
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Container = styled.div``;
