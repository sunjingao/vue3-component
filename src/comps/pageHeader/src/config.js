import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-page-header`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  BACK: 'back',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  title: {
    require: false,
    type: String,
    default: '返回',
  },
  content: {
    require: false,
    type: String,
    default: '',
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
