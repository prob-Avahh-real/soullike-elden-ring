# soullike elden-ring（Souls Ring · 褪色者）

受《艾尔登法环》启发的移动端俯视角魂系动作小游戏，已集成 Capacitor Android 壳与穿戴设备输入（归档于 `archive/from-home/soullike elden-ring`）。

## 玩法与特性

- **魂系战斗核心**：生命值 / 精力条管理、翻滚无敌帧、锁定目标、轻重攻击与赐福点休整
- **移动端与窄屏适配**：虚拟摇杆 + 右侧动作键，含智能手表小屏（`<=280px`）自适应样式
- **穿戴输入支持**：智能戒指（`DeviceOrientation`）倾斜走位、智能手杖（`DeviceMotion`）挥击/敲击交互

## 目标平台（Target 判定）

- **移动端**：可选（已具备 Capacitor `android/` 工程壳）
- **智能硬件**：可选（已内置戒指/手杖状态徽章与窄屏适配）

## 快速运行与验证

```bash
npm install
npm test
npm run build
npx cap sync android
```
