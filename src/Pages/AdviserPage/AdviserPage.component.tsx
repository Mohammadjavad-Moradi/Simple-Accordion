import { useState } from 'react';
import CustomAccordion from '../../Components/CustomAccordion/CustomAccordion.component';

const AdviserPage: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean | number>(false);
  const handleClick = (id: number): void => {
    id === expanded ? setExpanded(false) : setExpanded(id);
  };
  return (
    <div>
      <CustomAccordion
        handleClick={handleClick}
        expanded={expanded === 1}
        id={1}
        type="adviser"
      />
    </div>
  );
};

export default AdviserPage;
