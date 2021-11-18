import React from "react";
import styled, { keyframes } from "styled-components";
import {
  BellOutlined,
  BookOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

const HeaderSection = styled.section`
  width: 100%;
  height: 80px;
  padding: 4px 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoHoverAnimation = keyframes`
    0%{
        box-shadow: 0px 0px 20px #999
    } 25%{
        box-shadow: 0px 0px 3px #999
    } 50%{
        box-shadow: 0px 0px 20px #999
    } 75% {
        box-shadow: 0px 0px 3px #999
    } 100% {
        box-shadow: 0px 0px 20px #999
    }
`;

const LogoHoverAnimation2 = keyframes`
    100% {
        transform : rotate(360deg);
    }
`;

const LogoImg = styled.img`
  width: 48px;
  height: 48px;

  cursor: pointer;

  &:hover {
    animation: ${LogoHoverAnimation2} 1s forwards;
  }
`;

const SearchBar = styled.input`
  margin: 0px 10px;
  width: calc(100% - 212px);
  height: 48px;

  outline: none;
  border: none;

  background-color: #e6e6e6;
  border-radius: 24px;
  padding: 0px 25px;

  color: #222;
  font-size: 22px;
`;

const BellIcon = styled(BellOutlined)`
  width: 48px;
  height: 48px;
  line-height: 48px;
  font-size: 24px;
  color: #000;

  cursor: pointer;

  &:hover {
    animation: ${LogoHoverAnimation2} 0.5s forwards;
  }
`;

const BookIcon = styled(BookOutlined)`
  width: 48px;
  height: 48px;
  line-height: 48px;
  font-size: 24px;
  color: #000;

  cursor: pointer;

  &:hover {
    animation: ${LogoHoverAnimation2} 0.5s forwards;
  }
`;

const ShareIcon = styled(ShareAltOutlined)`
  width: 48px;
  height: 48px;
  line-height: 48px;
  font-size: 24px;
  color: #000;

  cursor: pointer;

  &:hover {
    animation: ${LogoHoverAnimation2} 0.5s forwards;
  }
`;

const BodySection = styled.section`
  padding: 10px 80px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <HeaderSection>
        <LogoImg
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/4leaflender%2Fassets%2Fimages%2Flogo%2Ffavicon.png?alt=media&token=1824f89c-3ee3-4de4-accf-4d0d5c2ee25f`}
          alt="LOGO"
        />
        <SearchBar />
        <BellIcon />
        <BookIcon />
        <ShareIcon />
      </HeaderSection>
      <BodySection>{children}</BodySection>
    </>
  );
};

export default Layout;
