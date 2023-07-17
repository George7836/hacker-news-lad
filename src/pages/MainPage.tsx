import { styled } from "styled-components";
import NewsList from "../components/NewsList";

const Title = styled.h2`
  margin-bottom: 20px;
`

export default function MainPage() {
  return (
    <>
      <Title>News</Title>
      <NewsList/>
    </>
  )
}
