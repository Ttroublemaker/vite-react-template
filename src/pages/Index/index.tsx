import React from 'react'
import { Button } from 'antd'
// @ts-ignore 解决别名路径无法识别问题
import { userState, initialState } from '@/stores/user'
import { useRecoilState } from 'recoil'
import { getMode } from '../../utils/env'
import css from './index.module.less'

export default function Index() {
  const [user, setUser] = useRecoilState(userState)
  const toggeleUser = () => {
    if (user.username === '张三') {
      setUser({
        logged: false,
        menuList: [],
        username: '李四',
        role: '访客',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
      })
    } else {
      setUser(initialState)
    }
  }
  return (
    <div>
      <Button type="primary" className="tw-m-4">Index</Button>
      <Button type="primary" onClick={toggeleUser}>toggele user</Button>
      <div className={String(css.username) + ' tw-p-10'}>{user.username}</div>
    </div>
  )
}
