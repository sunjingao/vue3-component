import { useConfig } from '@/hooks/useConfig/index';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-button-group`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  type: {
    required: false,
    type: String,
    default: 'default',
  },
  width: {
    require: false,
    type: String,
  },
  height: {
    require: false,
    type: String,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
