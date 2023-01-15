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
    type: String,
    default: '180px',
  },
  minHeight: {
    required: false,
    type: String,
    default: '40px',
  },
  maxHeight: {
    required: false,
    type: String,
    default: '200px',
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
