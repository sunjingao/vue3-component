import { useConfig } from '@/hooks/useConfig';

const { CLS_PRE } = useConfig();

const COMP_NAME = `sizes`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  SELECT_CHANGE: 'selectChange',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  selectArr: {
    required: false,
    type: Array,
  },
  pageSize: {
    required: false,
    type: Number,
    default: 10,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
