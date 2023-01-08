import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-steps`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  alignCenter: {
    require: false,
    type: Boolean,
    default: false,
  },
  space: {
    require: false,
    type: Number,
    default: 0,
  },
  active: {
    require: false,
    type: Number,
    default: 0,
  },
  error: {
    require: false,
    type: Boolean,
    default: false,
  },
  simple: {
    require: false,
    type: Boolean,
    default: false,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
