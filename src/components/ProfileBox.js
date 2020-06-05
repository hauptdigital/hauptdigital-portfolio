import React from 'react';
import styled from '@emotion/styled';
import profileimage from '../assets/mh_foto.png';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const ProfileImage = styled.img`
  max-width: 150px;
`;

const ProfileDetails = styled.div`
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
      <ProfileImage src={profileimage} alt="Marc Haupt" />
      <ProfileDetails>
        <Title>Marc Haupt</Title>
        <SubTitle>👨‍💻 Freelance Web Developer</SubTitle>
      </ProfileDetails>
    </ProfileContainer>
  );
}

export default ProfileBox;
