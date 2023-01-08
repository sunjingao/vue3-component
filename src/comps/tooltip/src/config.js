import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-tooltip`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  placement: {
    require: false,
    type: String,
    default: 'bottom',
  },
  content: {
    require: false,
    type: String,
    default: '',
  },
  theme: {
    require: false,
    type: String,
    validator(val) {
      return ['dark', 'light'].includes(val);
    },
    default: 'light',
  },
  disabled: {
    require: false,
    type: Boolean,
    default: false,
  },
  offset: {
    require: false,
    type: Number,
    default: 10,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
