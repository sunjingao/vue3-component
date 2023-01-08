import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-transfer`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  CHANGE: 'change',
  INPUT: 'input',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  titles: {
    required: false,
    type: Array,
    default() {
      return ['source', 'target'];
    },
  },
  buttonTexts: {
    required: false,
    type: Array,
  },
  sourceData: {
    required: false,
    type: Array,
    default() {
      return [];
    },
  },
  targetData: {
    required: false,
    type: Array,
    default() {
      return [];
    },
  },
  filterable: {
    required: false,
    type: Boolean,
    default: false,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
