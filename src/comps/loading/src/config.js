import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-loading`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  params: {
    required: true,
    type: Object,
    default() {
      return {
        showLoadingIcon: true,
        content: '',
        loadingClass: '',
        contentClass: '',
        componentName: '',
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        opacity: 0,
        zIndex: 0,
      };
    },
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
