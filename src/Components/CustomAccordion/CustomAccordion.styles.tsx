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
  border: 1px solid black;
`;

export const AccordionSummaryStyles = styled(MuiAccordionSummary)``;

export const AccordionTitleStyles = styled.div``;

export const TitleWrapperStyles = styled.div``;

export const TitleStyles = styled.p``;
export const AccordionDetailsStyles = styled(MuiAccordionDetails)`
  border-top: 1px solid black;
`;

export const DetailsStyles = styled.div``;

export const HyperLinkContainerStyles = styled.a``;

export const DividerLineStyles = styled(Divider)``;

export const CloseButtonStyles = styled(Button)``;

export const AddIconStyles = styled(AddIcon)``;

export const RemoveIconStyles = styled(RemoveIcon)``;
