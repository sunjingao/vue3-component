import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-radio-button`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  CHANGE: 'change',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  modelValue: {
    required: false,
    type: [Number, String, Boolean],
  },
  value: {
    required: true,
    type: [Number, String, Boolean],
  },
  disabled: {
    required: false,
    type: Boolean,
    default: false,
  },
  border: {
    required: false,
    type: Boolean,
    default: false,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
