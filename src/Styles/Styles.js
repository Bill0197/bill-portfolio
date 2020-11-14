import styled from "styled-components";
import { Network } from "@styled-icons/zondicons/Network";
import { Groups } from "@styled-icons/material-rounded/Groups";
import { Tasklist } from "@styled-icons/octicons/Tasklist";
import { OndemandVideo } from "@styled-icons/material-rounded/OndemandVideo";
import { Navicon } from "@styled-icons/evil/Navicon";
import { Fastly } from "@styled-icons/simple-icons/Fastly";
import { Percent } from "@styled-icons/remix-line/Percent";
import { SentimentSatisfiedAlt } from "@styled-icons/material-sharp/SentimentSatisfiedAlt";
import { HighQuality } from "@styled-icons/material-outlined/HighQuality";
import { FacebookF } from "@styled-icons/fa-brands/FacebookF";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Telegram } from "@styled-icons/simple-icons/Telegram";

export const Fb = styled(FacebookF)`
    height: 31px;
    cursor: pointer;
    color: #8490ff;
    margin-right: 2rem;
    :hover {
        color: #5a6afa;
    }
    :active {
        color: #2e43fa;
    }
`;
export const Insta = styled(Instagram)`
    height: 31px;
    cursor: pointer;

    color: #8490ff;
    margin: 0 2rem;
    :hover {
        color: #5a6afa;
    }
    :active {
        color: #2e43fa;
    }
`;
export const Git = styled(Github)`
    height: 31px;
    cursor: pointer;
    color: #8490ff;
    margin: 0 2rem;
    :hover {
        color: #5a6afa;
    }
    :active {
        color: #2e43fa;
    }
`;
export const Tg = styled(Telegram)`
    height: 31px;
    cursor: pointer;
    color: #8490ff;
    margin: 0 2rem;
    :hover {
        color: #5a6afa;
    }
    :active {
        color: #2e43fa;
    }
`;
export const WrapperIcon = styled.div`
    position: absolute;
    right: 3rem;
    margin-top: 4.5em;
    @media (max-width: 576px) {
        .gDQikt {
            margin-right: 0;
        }
        svg {
            margin: 0 0.6em;
        }
    }
`;
export const NetworkIcon = styled(Network)`
    height: 18px;
    color: #8490ff;
`;
export const GroupsIcon = styled(Groups)`
    height: 32px;
    color: #8490ff;
`;
export const TasklistIcon = styled(Tasklist)`
    height: 24px;
    color: #8490ff;
`;
export const StatusOnlineIcon = styled(OndemandVideo)`
    height: 24px;
    color: #8490ff;
`;
export const Wrapper = styled.span`
    @media (max-width: 930px) {
        #toggleIcon {
            display: block;
            right: 2rem;
        }
    }
`;

export const NavIcon = styled(Navicon)`
    height: 40px;
    color: #7987ff;
    position: absolute;
    right: 1rem;
    top: 2.5rem;
    cursor: pointer;
    display: none;
    :hover {
        color: #8490ff;
        height: 41px;
    }
    :active {
        color: #3c4ef1;
    }
`;
export const Feature = styled.div`
    padding: 50px 35px;
    border-radius: 10px;
    transition: all 300ms linear 0s;
    background: #fff;
    width: 300px;
    height: 350px;
    text-align: left;
    justify-content: center;
    display: block;
    margin: 30px 20px;
    :hover {
        box-shadow: 0px 20px 40px 10px rgba(0, 0, 0, 0.08);
        border-color: #fff;
    }
    :hover svg {
        color: #0e23db;
    }
`;

export const FastlyIcon = styled(Fastly)`
    height: 2.3rem;
    margin-top: -1.4rem;
    color: #8490ff;
`;
export const PercentIcon = styled(Percent)`
    height: 2.3rem;
    margin-top: -1.4rem;
    color: #8490ff;
`;
export const SatisfiedIcon = styled(SentimentSatisfiedAlt)`
    height: 2.3rem;
    margin-top: -1.4rem;
    color: #8490ff;
`;
export const HighQualityIcon = styled(HighQuality)`
    height: 2.3rem;
    margin-top: -1.4rem;
    color: #8490ff;
`;
export const FooterStyle = styled.div`
    background: #000410;
    color: #fff;
    margin-top: 2rem;
    margin-left: -0.5rem;
    width: 103%;
    overflow: hidden;
    position: relative;
    bottom: -0.5rem;
    height: 25vh;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
`;
