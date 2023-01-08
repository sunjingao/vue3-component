import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-dropdown`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  COMMAND: 'command',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  splitButton: {
    require: false,
    type: Boolean,
    default: false,
  },
  hoverTrigger: {
    require: false,
    type: Boolean,
    default: false,
  },
  hideOnClick: {
    require: false,
    type: Boolean,
    default: true,
  },
  placement: {
    require: false,
    type: String,
    default: 'bottom-end',
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
