"use client";

import useFetch from "@/hooks/useFetch";
import { apiPaths } from "@/config/api";
import { UserProfile } from "@/types/User";

import dt from "@/lib/designToken/designTokens";

import { Container } from "@/component/styled-components/Container";
import Wrapper from "@/component/styled-components/Wrapper";
import { TitleWrapper } from "@/component/styled-components/TextBoxes";
import { Title } from "@/component/styled-components/TextBoxes";
import StyledAccounts from "@/app/myAccount/myAccountClientComponents";
import MyAccountLoading from "@/app/myAccount/loading";
import EditSections from "./MyAccount";

const { PartContainerV, PageWrapper } = StyledAccounts;
const tokens = dt.DesignTokenVarNames;

export const Myaccount = () => {
  // 회원 정보 수정하기 전의 페이지입니다.
  // 유저의 정보들을 불러옵니다.
  const [userProfileData, error] = useFetch<UserProfile>(
    apiPaths.mypage.info,
    {}
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userProfileData) {
    return (
      <Wrapper $bgColor={tokens.colors.simple.whitebg}>
        {" "}
        <MyAccountLoading />;
      </Wrapper>
    );
  }

  //console.log("[마이 페이지] 불러온 정보: userProfileData", userProfileData);
  return (
    <Container
      $height={"100vh"}
      $bgColor={tokens.colors.simple.whitebg}
      as="section"
      $padding={"2rem 0 2rem 0"}
      $gap={"2px"}
    >
      <PartContainerV>
        <TitleWrapper>
          <Title
            $fontSize={tokens.fontSize.web.large}
            $color={tokens.colors.simple.blackbasic}
            $htype={2}
          >
            내 정보 수정하기
          </Title>
        </TitleWrapper>
        <PageWrapper>
          <EditSections UserProfile={userProfileData} />
        </PageWrapper>
      </PartContainerV>
    </Container>
  );
};
