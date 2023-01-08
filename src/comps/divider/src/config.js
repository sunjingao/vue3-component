import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-divider`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  direction: {
    require: false,
    type: String,
    validator(val) {
      return ['horizontal', 'vertical'].includes(val);
    },
    default: 'horizontal',
  },
  position: {
    require: false,
    type: String,
    validator(val) {
      return ['left', 'right', 'center'].includes(val);
    },
    default: 'left',
  },
  showLine: {
    require: false,
    type: Boolean,
    default: true,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
