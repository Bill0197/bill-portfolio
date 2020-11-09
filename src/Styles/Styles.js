import styled from "styled-components";
import { Network } from "@styled-icons/zondicons/Network";
import { Groups } from "@styled-icons/material-rounded/Groups";
import { Tasklist } from "@styled-icons/octicons/Tasklist";

import { OndemandVideo } from "@styled-icons/material-rounded/OndemandVideo";
import { Navicon } from "@styled-icons/evil/Navicon";

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
    @media (max-width: 1187px) {
        #toggleIcon {
            display: block;
        }
    }
`;
export const NavIcon = styled(Navicon)`
    height: 36px;
    color: #7987ff;
    position: absolute;
    right: 0px;
    top: 72px;
    cursor: pointer;
    display: none;
    :hover {
        color: #8490ff;
        height: 36.5px;
    }
    :active {
        color: #3c4ef1;
    }
`;
