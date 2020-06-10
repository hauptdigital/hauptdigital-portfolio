import React from 'react';
import styled from '@emotion/styled';
import profileimage from '../assets/dev-emoji.PNG';
import LinkList from './LinkList';
import Link from './Link';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
`;

const ProfileImageContainer = styled.div`
  flex-basis: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  max-width: 150px;
`;

const ProfileDetails = styled.div`
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const Title = styled.p`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
`;

const SubTitle = styled(Title)`
  color: #707070;
`;

function ProfileBox() {
  return (
    <ProfileContainer>
      <ProfileImageContainer>
        <ProfileImage src={profileimage} alt="Marc Haupt" />
      </ProfileImageContainer>
      <ProfileDetails>
        <Title>Marc Haupt</Title>
        <SubTitle>{`<FreelanceWebDeveloper />`}</SubTitle>
        <LinkList>
          <Link href="https://github.com/hauptdigital/" target="_blank">
            GitHub
          </Link>
          <Link href="https://www.xing.com/profile/Marc_Haupt2" target="_blank">
            XING
          </Link>
          <Link href="https://www.linkedin.com/in/marchaupt2/" target="_blank">
            LinkedIN
          </Link>
          <Link href="mailto:marc@haupt.digital" target="_blank">
            Mail
          </Link>
        </LinkList>
      </ProfileDetails>
    </ProfileContainer>
  );
}

export default ProfileBox;
