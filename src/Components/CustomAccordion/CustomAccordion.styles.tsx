import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { ReactComponent as AddIcon } from '../../assets/add-icon.svg';
import { ReactComponent as RemoveIcon } from '../../assets/remove-icon.svg';

export const AccordionStyles = styled(({ ...props }) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))`
  font-family: sans-serif;
  && {
    width: ${(props) => (props.xs ? '288px' : '459px')};
    min-height: ${(props) => (props.xs ? '72px' : '48px')};

    background-color: ${(props) =>
      props.type === 'adviser' ? '#E6EFF2' : '#FFFFFF'} !important;
    border: 1px solid #004b88;
  }
`;

export const AccordionSummaryStyles = styled(MuiAccordionSummary)`
  && {
    color: #004b88;
    padding: 0;

    div {
      margin: 0;
    }
  }

  &:last-child {
    transform: matrix(-1, 0, 0, 1, 0, 0) !important;
  }
`;

export const AccordionTitleStyles = styled.div`
  && {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TitleWrapperStyles = styled.div``;

export const TitleStyles = styled(({ ...props }) => <div {...props} />)`
  font-family: 'Open Sans';
  font-size: ${(props) => (props.xs ? '16px' : '18px')};
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  margin: 12px 16px !important;
`;
export const AccordionDetailsStyles = styled(MuiAccordionDetails)`
  border-top: 1px solid #004b88;
  padding: 0 !important;
`;

export const DetailsStyles = styled.div`
  && {
    margin: 12px 16px 16px 12px;
    min-height: 136px;
  }
  font-family: 'Open Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #161616;
  & p {
    margin: 0;
  }
`;

export const HyperLinkContainerStyles = styled.a`
  display: inline-block;
  margin-top: 24px;
  text-decoration: underline;
  color: #004b88;
  &:visited {
    color: #004b88;
  }
`;

export const DividerLineStyles = styled(Divider)`
  && {
    margin: 0 16px;
  }
`;

export const CloseButtonStyles = styled(Button)`
  && {
    margin: 16px 16px 12px 0px;
    padding: 0;
    width: 48px;
    height: 24px;
    color: #004b88;
    text-decoration: underline;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    text-transform: none;
    font-family: 'Open Sans';
  }
`;

export const AddIconStyles = styled(AddIcon)`
  margin: 0 18px;
`;

export const RemoveIconStyles = styled(RemoveIcon)`
  margin: 0 18px;
`;

export const ReferenceButtonStyles = styled(({ ...props }) => (
  <Button {...props} />
))`
  && {
    min-width: ${(props) => (props.xs ? '82px' : '93px')};
    min-height: 36px;
    border-radius: 0;
    color: #018176;
    border-color: #018176;
    background-color: #ffffff;
    text-transform: none;
    font-size: ${(props) => (props.xs ? '14px' : '16px')};
    margin: ${(props) => (props.xs ? '0' : '18px 16px 18px 16px')};
  }
`;

export const AdviserButtonStyles = styled(({ ...props }) => (
  <Button {...props} />
))`
  && {
    min-width: ${(props) => (props.xs ? '69px' : '76px')};
    min-height: 30px;
    font-size: ${(props) => (props.xs ? '14px' : '16px')};
    border-radius: 0;
    background-color: #006278;
    color: #ffffff;
    text-transform: none;
    margin: 12px 16px 0 16px;
  }
`;
