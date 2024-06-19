import {
  Locale,
  Button,
  Form,
  Field,
  CellGroup,
  Icon,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  NavBar,
  DatePicker,
  Collapse,
  CollapseItem,
  Toast,
  Popup,
  Cell,
  Picker,
  List,
  PullRefresh,
} from "vant";
import "vant/lib/index.css";
import enUS from "vant/es/locale/lang/en-US";

Locale.use("en-US", enUS);

export default function initVant(app) {
  app.use(Button);
  app.use(Form);
  app.use(Field);
  app.use(CellGroup);
  app.use(Icon);
  app.use(Tabbar);
  app.use(TabbarItem);
  app.use(Swipe);
  app.use(SwipeItem);
  app.use(NavBar);
  app.use(DatePicker);
  app.use(Collapse);
  app.use(CollapseItem);
  app.use(Toast);
  app.use(Popup);
  app.use(Cell);
  app.use(Picker);
  app.use(List);
  app.use(PullRefresh);
}
