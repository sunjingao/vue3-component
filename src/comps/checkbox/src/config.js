import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-checkbox`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  UPDATE_MODEL_VALUE: 'update:modelValue',
  CHANGE: 'change',
  PART_CHECK_CHANGE: 'part-check-change',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  modelValue: {
    required: false,
    type: [String, Number, Boolean],
    default: '',
  },
  value: {
    required: false,
    type: [String, Number, Boolean],
    default: '',
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
  isIndeterminate: {
    required: false,
    type: Boolean,
    default: false,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
