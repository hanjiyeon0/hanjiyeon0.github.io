import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import media from "../Common/media";
// import PROFILE_IMAGE_LINK from "../../assets/img_profile.png";

const PROFILE_IMAGE_LINK =
  "https://avatars.githubusercontent.com/u/56794107?s=400&u=e7748331d1141a1d322777558532e7754aaf9538&v=4";
const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
  border-radius: 50%;

  ${media.mobile} {
    width: 80px;
    height: 80px;
  }
`;
const ProfileImage: FunctionComponent = () => {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />;
};

export default ProfileImage;
