import { atom } from 'recoil';

export const initialState = {
  logged: false,
  menuList: [],
  username: '张三',
  role: '管理员',
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
};

export const userState = atom({
  key: 'userState',
  default: initialState,
});