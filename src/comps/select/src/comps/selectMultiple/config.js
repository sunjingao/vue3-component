import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-select-multiple`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  UPDATE_MODEL_VALUE: 'update:modelValue',
  CHANGE: 'change',
  CLOSE: 'close',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  width: {
    required: false,
    type: Number,
    default: 180,
  },
  minHeight: {
    required: false,
    type: Number,
    default: 40,
  },
  maxHeight: {
    required: false,
    type: Number,
    default: 200,
  },
  modelValue: {
    required: false,
    default: [],
  },
  placeholder: {
    required: false,
    default: '',
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
