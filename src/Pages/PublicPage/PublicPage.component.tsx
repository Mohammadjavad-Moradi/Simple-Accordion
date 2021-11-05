import { useState } from 'react';
import CustomAccordion from '../../Components/CustomAccordion/CustomAccordion.component';
import { PublicPageWrapperStyles } from './PublicPage.styles';

interface PublicType {
  user: null | any;
}

const PublicPage: React.FC<PublicType> = ({ user }) => {
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
        type={user ? 'loggedIn' : null}
      />
      <CustomAccordion
        handleClick={handleClick}
        expanded={expanded === 2}
        id={2}
        type={user ? 'loggedIn' : null}
      />
      <CustomAccordion
        handleClick={handleClick}
        expanded={expanded === 3}
        id={3}
        type={user ? 'loggedIn' : null}
      />
    </PublicPageWrapperStyles>
  );
};

export default PublicPage;
