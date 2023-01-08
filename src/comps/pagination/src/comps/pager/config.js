import { useConfig } from '@/hooks/useConfig';

const { CLS_PRE } = useConfig();

const COMP_NAME = `pager`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  UPDATE_MODEL_VALUE: 'update:modelValue',
  PAGE_CHANGE: 'pageChange',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  modelValue: {
    required: false,
    type: [Number, String],
    default: 1,
  },
  total: {
    required: false,
    type: Number,
  },
  isButton: {
    required: false,
    type: Boolean,
    default: false,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
