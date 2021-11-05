import {
  AccordionStyles,
  AccordionSummaryStyles,
  AccordionDetailsStyles,
  HyperLinkContainerStyles,
  DividerLineStyles,
  CloseButtonStyles,
  AccordionTitleStyles,
  TitleWrapperStyles,
  DetailsStyles,
  TitleStyles,
  AddIconStyles,
  RemoveIconStyles,
} from './CustomAccordion.styles';

interface AccordionProps {
  expanded: boolean;
  handleClick(id: number): void;
  id: number;
}

const CustomAccordion: React.FC<AccordionProps> = ({
  expanded,
  handleClick,
  id,
}) => {
  return (
    <AccordionStyles expanded={expanded}>
      <AccordionSummaryStyles
        aria-controls={`panel${id}d-content`}
        id={`panel${id}d-header`}
        onClick={() => handleClick(id)}
        expandIcon={
          expanded ? (
            <RemoveIconStyles aria-hidden="true" />
          ) : (
            <AddIconStyles aria-hidden="true" />
          )
        }
      >
        <AccordionTitleStyles>
          <TitleWrapperStyles>
            <TitleStyles>If you or your child were born in the UK</TitleStyles>
          </TitleWrapperStyles>
        </AccordionTitleStyles>
      </AccordionSummaryStyles>
      <AccordionDetailsStyles>
        <DetailsStyles>
          <p>
            If you were born in the UK, you might not need to apply to stay –
            you might already be a British citizen. Your child might be a
            British citizen if you lived in the UK for 5 years before they were
            born.
          </p>
          <p>
            <HyperLinkContainerStyles
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.gov.uk/"
            >
              Check if you're a British citizen
            </HyperLinkContainerStyles>{' '}
            on GOV.UK
          </p>
        </DetailsStyles>
        <DividerLineStyles variant="middle" />
        <CloseButtonStyles
          onClick={() => handleClick(id)}
          aria-label={`close button accordion ${id}`}
        >
          Close
        </CloseButtonStyles>
      </AccordionDetailsStyles>
    </AccordionStyles>
  );
};

export default CustomAccordion;
