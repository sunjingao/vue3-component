import { useConfig } from '@/hooks/useConfig';

const { CLS_PRE } = useConfig();

const COMP_NAME = `total`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  total: {
    required: true,
    type: Number,
    default: 0,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
