import { useConfig } from '@/hooks/useConfig';

const { CLS_PRE } = useConfig();

const COMP_NAME = `jumper`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  UPDATE_MODEL_VALUE: 'update:modelValue',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  modelValue: {
    required: true,
    type: Number,
  },
  total: {
    required: true,
    type: Number,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
