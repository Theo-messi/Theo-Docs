export function Sidebartelevision() {
  return [
    {
      text: "基础设置",
      // collapsed: true,
      base: "/VPS/",
      items: [
        { text: "甲骨文云与谷歌云防火墙设置", link: "01" },
        { text: "开启防火墙端口与root登陆", link: "03" },
      ],
    },
    {
      text: "进阶使用",
      // collapsed: true,
      base: "/VPS/",
      items: [
        { text: "简化重装系统", link: "02" },
        { text: "一键脚本部署开ARM机器", link: "04" },
        { text: "VPS全能工具箱", link: "05" },
      ],
    },
    {
      text: "搭建服务",
      // collapsed: true,
      base: "/VPS/",
      items: [
        { text: "安装哪吒面板", link: "06" },
        { text: "V2Ray搭建详细教程", link: "07" },
        { text: "X-ui搭建详细教程", link: "08" },
        { text: "VPS一键检测流媒体解锁", link: "09" },
        { text: "一键检测机场奈飞解锁", link: "10" },
      ],
    },
  ];
}

export function SidebarScientific() {
  return [
    {
      text: "ESXi 8.0安装",
      // collapsed: true,
      base: "/ESXI/",
      items: [
        { text: "安装指南", link: "ESXI-01" },
        { text: "ESXI写盘", link: "ESXI-02" },
        { text: "主板BIOS设置", link: "ESXI-03" },
        { text: "ESXI安装", link: "ESXI-04" },
        { text: "ESXI后台配置", link: "ESXI-05" },
        { text: "ESXI前台配置", link: "ESXI-06" },
      ],
    },
    {
      text: "ESXI — OpenWrt",
      // collapsed: true,
      base: "/ESXI/",
      items: [
        { text: "ESXI安装Openwrt", link: "OP-01" },
        { text: "关闭IPV6", link: "OP-02" },
        { text: "PPPOE拨号", link: "OP-03" },
        { text: "OpenWrt扩容内存", link: "OP-04" },
      ],
    },
  ];
}

export function SidebarSharing() {
  return [
    {
      text: "安装青龙面板",
      // collapsed: true,
      base: "/Docker/",
      items: [
        { text: "安装Docker", link: "QL-01" },
        { text: "安装青龙面板", link: "QL-02" },
        { text: "阿里云盘签到", link: "QL-03" },
        { text: "京东签到", link: "QL-04" },
      ],
    },
    {
      text: "获取京东Cookie",
      // collapsed: true,
      base: "/Docker/",
      items: [
        { text: "插件版", link: "JD-01" },
        { text: "浏览器版", link: "JD-02" },
        { text: "Boxjs", link: "JD-03" },
      ],
    },
    {
      text: "获取阿里云盘Cookie",
      // collapsed: true,
      base: "/Docker/",
      items: [
        { text: "自动获取 - refresh_token", link: "AL-01" },
        { text: "手动获取 - refresh_token", link: "AL-02" },
      ],
    },
  ];
}

export function SidebarAirport() {
  return [
    {
      // text: "网络技术教程",
      // collapsed: true,
      base: "/skill/",
      items: [
        { text: "PicGo + Github 搭建图床", link: "01" },
        { text: "Homebrew 使用", link: "02" },
        { text: "梅林固件刷机需知", link: "03" },
        { text: "Markdown 使用", link: "test" },
      ],
    },
  ];
}
