import styled from '@emotion/styled';

const LinkList = styled.div`
  margin-left: -1rem;
  max-width: 600px;
  width: 100%;
  font-size: 18px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  @media (max-width: 767px) {
    justify-content: center;
    margin-left: 0;
  }
`;

export default LinkList;
