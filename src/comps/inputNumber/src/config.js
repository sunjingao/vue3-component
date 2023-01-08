import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-input-number`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  UPDATE_MODEL_VALUE: 'update:modelValue',
  INPUT: 'input',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  modelValue: {
    required: false,
    type: Number,
    default: 0,
  },
  controlsPosition: {
    required: false,
    type: String,
    default: 'bothSides',
  },
  disabled: {
    required: false,
    type: Boolean,
    default: false,
  },
  width: {
    required: false,
    type: String,
    default: '180px',
  },
  height: {
    required: false,
    type: String,
    default: '40px',
  },
  min: {
    required: false,
    type: Number,
    default: -Number.MAX_VALUE,
  },
  max: {
    required: false,
    type: Number,
    default: Number.MAX_VALUE,
  },
  step: {
    required: false,
    type: Number,
    default: 1,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
