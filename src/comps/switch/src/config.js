import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-switch`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  UPDATE_MODEL_VALUE: 'update:modelValue',
  CHANGE: 'change',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  modelValue: {
    required: false,
    type: Boolean,
    default: true,
  },
  width: {
    required: false,
    type: Number,
    default: 40,
  },
  height: {
    required: false,
    type: Number,
    default: 20,
  },
  disabled: {
    required: false,
    type: Boolean,
    default: false,
  },
  circleBgColor: {
    required: false,
    type: String,
    default: '#fff',
  },
  inactiveBgColor: {
    required: false,
    type: String,
    default: '#C0CCDA',
  },
  activeBgColor: {
    required: false,
    type: String,
    default: '#409EFF',
  },
  inactiveFontColor: {
    required: false,
    type: String,
    default: '#303133',
  },
  activeFontColor: {
    required: false,
    type: String,
    default: '#409eff',
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
