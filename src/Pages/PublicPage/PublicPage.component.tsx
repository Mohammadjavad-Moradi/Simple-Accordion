import { useState } from 'react';
import CustomAccordion from '../../Components/CustomAccordion/CustomAccordion.component';
import { PublicPageWrapperStyles } from './PublicPage.styles';
const PublicPage: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean | number>(false);
  const handleClick = (id: number): void => {
    id === expanded ? setExpanded(false) : setExpanded(id);
  };
  return (
    <PublicPageWrapperStyles>
      <CustomAccordion
        handleClick={handleClick}
        expanded={expanded === 1}
        id={1}
      />
      <CustomAccordion
        handleClick={handleClick}
        expanded={expanded === 2}
        id={2}
      />
      <CustomAccordion
        handleClick={handleClick}
        expanded={expanded === 3}
        id={3}
      />
    </PublicPageWrapperStyles>
  );
};

export default PublicPage;
