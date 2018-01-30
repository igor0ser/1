import { withStateHandlers } from 'recompose';
import AccordionView from './AccordionView';

export const toggle = ({ expanded }) => () => ({ expanded: !expanded });

const Accordion = withStateHandlers(
  { expanded: false },
  { toggle },
)(AccordionView);

export default Accordion;
