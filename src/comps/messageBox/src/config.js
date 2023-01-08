import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-messagebox`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  // message confirm prompt
  type: {
    required: false,
    type: String,
    validator: function (value) {
      return ['message', 'confirm', 'prompt'].includes(value);
    },
    default: 'message',
  },
  title: {
    required: false,
    type: String,
    default: '',
  },
  content: {
    required: false,
    type: String,
    default: '',
  },
  cancelButtonText: {
    required: false,
    type: String,
    default: '取消',
  },
  confirmButtonText: {
    required: false,
    type: String,
    default: '确认',
  },
  cancelCallBack: {
    required: false,
    type: Function,
    default: function () {
      return function () {
        return true;
      };
    },
  },
  confirmCallBack: {
    required: false,
    type: Function,
    default: function () {
      return function () {
        return true;
      };
    },
  },
  closeCallBack: {
    required: false,
    type: Function,
    default: function () {
      return function () {
        return true;
      };
    },
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
