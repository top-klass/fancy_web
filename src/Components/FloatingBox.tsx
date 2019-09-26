import React from "react";
import styled from "styled-components";
import GitHubLogin from "./GitHubLogin";
import Search from "./Search";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Modal } from "antd";
import { applyAccount } from "../Utils/block";
import { getBalance } from "../Utils/getBalance";

const Container = styled.div`
  position: sticky;
  top: 1rem;
  max-height: 20rem;
  display: flex;
  flex-direction: column;
  max-width: 17rem;
`;

const ProfileContainer = styled.div`
  background-color: white;
  max-height: 15rem;
  min-width: 15rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ProfileImg = styled.div`
  background-image: url(https://mblogthumb-phinf.pstatic.net/MjAxODA1MjhfMTA0/MDAxNTI3NDg3MTczOTY5.C2eXPMwTXPN7mN6rhXpLrbLAu36fyR7JDr3Ym8URGl8g.97dxz-n9zjbzgv8KbhDwrICDNbNierqWueC0aRsfgjIg.JPEG.ehfkdl8989/KakaoTalk_Moim_4UjmLsR1AohJhEmSqqNZkX7uHKU0kp.jpg?type=w800);
  background-position: center center;
  background-size: 100%;
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  margin-right: 0.5rem;
`;

const Nickname = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const Button = styled.button`
  background: linear-gradient(48deg, #444dc8 0%, #4d2377 100%);
  width: 100%;
  color: white;
  font-weight: 700;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 1rem;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
`;

const Address = styled.div`
  font-size: 1.2rem;
  color: #0036d1;
  font-weight: 700;
`;
const Alert = styled.div``;

const Token = styled.div`
  font-size: 1.2rem;
`;

interface Props extends RouteComponentProps {
  toggleTag: (idx: number) => void;
  tags: number[];
}

interface State {
  visible: boolean;
  privateKey: string;
  token: number;
}

class FloatingBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
      privateKey: "",
      token: 0
    };
  }

  handleOnChange = (e: any) => {
    const {
      target: { value }
    } = e;
    this.setState({ privateKey: value });
  };

  onClickLogOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("address");
    this.props.history.push("/");
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = (e: any) => {
    try {
      applyAccount("3915393", this.state.privateKey);
    } catch (error) {}
    this.setState({
      visible: false
    });
  };

  handleCancel = (e: any) => {
    this.setState({
      visible: false
    });
  };

  componentDidMount = async () => {
    const address = localStorage.getItem("address");
    const hasAddress = Boolean(address);
    if (hasAddress) {
      getBalance(address, (token: number) => {
        this.setState({ token });
      });
    }
  };

  render() {
    const { privateKey } = this.state;
    const isLogin = Boolean(localStorage.getItem("jwt"));
    const address = localStorage.getItem("address");
    const hasAddress = Boolean(address);
    const { token } = this.state;
    return (
      <Container>
        {isLogin ? (
          <ProfileContainer>
            <UserProfile>
              <ProfileImg />
              <Nickname>보노보노</Nickname>
            </UserProfile>
            <ButtonContainer>
              {hasAddress ? (
                <>
                  <Address>
                    {localStorage.getItem("address")!.slice(0, 10) + "..."}
                  </Address>
                  <Token>₭ {token}</Token>
                </>
              ) : (
                <Alert>지갑주소를 입력해주세요.</Alert>
              )}
              <Modal
                title="Input your Klaytn private key"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <Input value={privateKey} onChange={this.handleOnChange} />
              </Modal>
              <Button onClick={this.showModal}>지갑주소 등록하기</Button>

              <Button onClick={this.onClickLogOut}>로그아웃</Button>
            </ButtonContainer>
          </ProfileContainer>
        ) : (
          <GitHubLogin />
        )}
        <Search />
      </Container>
    );
  }
}

export default withRouter(FloatingBox);
