import Koubei from '../koubei';
import Example from '../example';
import UsereInfo from '../UserCenter'

export const TAB_BATA = [{
  id: 1,
  title: "生活",
  badge: false,
  dot: false,
  icon: require('./icons/alipay-o.svg'),
  selectedIcon: require('./icons/alipay.svg'),
  component: Example
}, {
  id: 2,
  title: "口碑",
  badge: false,
  dot: false,
  icon: require('./icons/koubei-o.svg'),
  selectedIcon: require('./icons/koubei.svg'),
  component: Koubei
}, {
  id: 3,
  title: "朋友",
  badge: false,
  dot: false,
  icon: require('./icons/contacts-o.svg'),
  selectedIcon: require('./icons/contacts.svg'),
  component: Example
}, {
  id: 4,
  title: "我的",
  badge: false,
  dot: false,
  icon: require('./icons/rmb-o.svg'),
  selectedIcon: require('./icons/rmb.svg'),
  component: UsereInfo
}];
