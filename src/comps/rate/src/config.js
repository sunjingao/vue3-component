import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-rate`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  UPDATE_MODEL_VALUE: 'update:modelValue',
  CHANGE: 'change',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  modelValue: {
    required: true,
    type: Number,
  },
  disabled: {
    required: false,
    type: Boolean,
    default: false,
  },
  max: {
    required: true,
    type: Number,
  },
  showText: {
    required: false,
    type: Boolean,
    default: false,
  },
  texts: {
    required: false,
    type: Array,
    default: function () {
      return [];
    },
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
