import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-back-top`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  CLICK: 'click',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  selector: {
    require: false,
    type: String,
    default: 'root',
  },

  visibilityHeight: {
    require: false,
    type: Number,
    default: 200,
  },

  right: {
    require: false,
    type: String,
    default: '40px',
  },

  bottom: {
    require: false,
    type: String,
    default: '40px',
  },

  timeout: {
    require: false,
    type: Number,
    default: 500,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
