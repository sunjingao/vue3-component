import './assets/font/iconfont.css';
import './css/index.scss';

import Button from './comps/button/index';
import ButtonGroup from './comps/buttonGroup/index';
import Link from './comps/link/index';
import Radio from './comps/radio/index';
import RadioButton from './comps/radioButton/index';
import RadioGroup from './comps/radioGroup/index';
import Checkbox from './comps/checkbox/index';
import CheckboxButton from './comps/checkboxButton/index';
import CheckboxGroup from './comps/checkboxGroup/index';
import Input from './comps/input/index';
import Textarea from './comps/textarea/index';
import Autocomplete from './comps/autocomplete/index';
import InputNumber from './comps/inputNumber/index';
import Select from './comps/select/index';
import Cascader from './comps/cascader/index';
import OptionGroup from './comps/optionGroup/index';
import Option from './comps/option/index';
import Tag from './comps/tag/index';
import Switch from './comps/switch/index';
import Slider from './comps/slider/index';
import Timepicker from './comps/timepicker/index';
import Transfer from './comps/transfer/index';
import Datepicker from './comps/datepicker/index';
import Rate from './comps/rate/index';
import Progress from './comps/progress/index';
import Pagination from './comps/pagination/index';
import Tooltip from './comps/tooltip/index';
import Badge from './comps/badge/index';
import Alert from './comps/alert/index';
// import Tabs from './comps/tabs/index';
import PageHeader from './comps/pageHeader/index';
import Popover from './comps/popover/index';
import Divider from './comps/divider/index';
import Image from './comps/image/index';
import InfiniteScroll from './comps/infiniteScroll/index';
import Loading from './comps/loading/index';
import Message from './comps/message/index';
import Notification from './comps/notification/index';
import MessageBox from './comps/messageBox/index';
import Tabs from './comps/tabs/index';
import TabPane from './comps/tabPane/index';
import Breadcrumb from './comps/breadcrumb/index';
import BreadcrumbItem from './comps/breadcrumbItem/index';
import Dropdown from './comps/dropdown/index';
import DropdownMenu from './comps/dropdownMenu/index';
import DropdownItem from './comps/dropdownItem/index';
import Steps from './comps/steps/index';
import Step from './comps/step/index';
import Dialog from './comps/dialog/index';
import Carousel from './comps/carousel/index';
import CarouselItem from './comps/carouselItem/index';
import Collapse from './comps/collapse/index';
import CollapseItem from './comps/collapseItem/index';
import Timeline from './comps/timeline/index';
import TimelineItem from './comps/timelineItem/index';
import Tree from './comps/tree/index';
import BackTop from './comps/backTop/index';
import Card from './comps/card/index';

import Popper from '@sunjingao/popper';
window.Popper = Popper;

const comps = [
  Button,
  ButtonGroup,
  Link,
  Radio,
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Input,
  Textarea,
  Autocomplete,
  InputNumber,
  Tag,
  Select,
  Cascader,
  OptionGroup,
  Option,
  Switch,
  Slider,
  Timepicker,
  Transfer,
  Rate,
  Progress,
  Pagination,
  Tooltip,
  Datepicker,
  Badge,
  Alert,
  PageHeader,
  Popover,
  Divider,
  Image,
  InfiniteScroll,
  Loading,
  Message,
  Notification,
  MessageBox,
  Tabs,
  TabPane,
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Steps,
  Step,
  Dialog,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Timeline,
  TimelineItem,
  Tree,
  BackTop,
  Card,
];

function install(app) {
  comps.forEach((item) => {
    item.install(app);
  });
}

export {
  install,
  Button,
  ButtonGroup,
  Link,
  Radio,
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Input,
  Textarea,
  Autocomplete,
  InputNumber,
  Tag,
  Select,
  Cascader,
  OptionGroup,
  Option,
  Switch,
  Slider,
  Rate,
  Timepicker,
  Transfer,
  Progress,
  Pagination,
  Tooltip,
  Datepicker,
  Badge,
  Alert,
  PageHeader,
  Popover,
  Divider,
  Image,
  InfiniteScroll,
  Loading,
  Message,
  Notification,
  MessageBox,
  Tabs,
  TabPane,
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Steps,
  Step,
  Dialog,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Timeline,
  TimelineItem,
  Tree,
  BackTop,
  Card,
};
