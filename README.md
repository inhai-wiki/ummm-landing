# Ummm Landing Page
<img width="2940" height="1604" alt="image" src="https://github.com/user-attachments/assets/47969d5c-3ba9-4d4d-a3f8-052c473d0608" />

**在线页面**: https://ummm-landing.vercel.app/

**GitHub**: https://github.com/inhai-wiki/ummm-landing

**源码仓库**: https://github.com/inhai-wiki/ummm

---

## 项目介绍

Ummm 是一款 macOS 语音转文字工具，让你通过说话代替打字，效率提升 3 倍。

### 背景

打字是一件繁琐的事。无论你是写邮件、做笔记还是写代码注释，大量时间都花在了键盘上。而人类说话的速度远超打字，平均说话速度是 150 字/分钟，而打字只有 40-50 字/分钟。

### 解决方案

Ummm 让语音输入变得简单自然：
- 按住 fn 键说话，松开即输入
- 文字自动出现在光标位置，无缝融入任何应用
- 支持本地识别（隐私优先）和阿里云 FunASR 云端识别（精准优先）

### 核心能力

| 能力 | 说明 |
|------|------|
| 实时转写 | 边说边转，即时看到结果 |
| 语气词过滤 | 自动去除“嗯”“那个”“就是”等语气词 |
| 领域热词 | 支持添加专业术语，提升识别准确率 |
| 中文优化 | 针对中文语音深度优化 |

### 技术支持

本项目集成阿里云百炼平台的 FunASR 语音识别模型，支持基于领域热词的模型微调能力。如需获取或微调 ASR 模型，请访问：

https://bailian.console.aliyun.com/cn-beijing/?source_channel=%22ummm%22/?tab=model#/efm/model_experience_center/voice

---

## 功能特点

### 按住即录
按住 `fn` 键说话，松开自动停止并输入。没有开始按钮，没有停止按钮，一切都是即时的。

### 光标即目标
无论你在写邮件、编辑文档还是聊天，识别结果会自动输入到当前光标位置。

### 实时转写
边说边转换，识别结果即时显示，不需要等待。

### 隐私优先
默认使用本地识别，数据不离开你的 Mac。

### 云端可选
填入阿里云 API Key，使用更精准的 FunASR 云端识别。

### 中文优化
针对中文语音识别深度优化，支持领域热词微调。

---

## 快速开始

### 1. 下载安装

下载地址: https://inhai-wiki.oss-cn-hangzhou.aliyuncs.com/ummm/Ummm.dmg

下载 DMG 安装包，拖拽到「应用程序」文件夹即可。

**系统要求:**
- macOS 12.0 Monterey 或更高版本
- Apple Silicon (M1/M2/M3) 或 Intel 芯片

### 2. 授权权限

首次启动需要授权以下权限：

| 权限 | 用途 | 设置路径 |
|------|------|---------|
| 麦克风 | 录制语音 | 系统设置 - 隐私与安全性 - 麦克风 |
| 辅助功能 | 监听快捷键 | 系统设置 - 隐私与安全性 - 辅助功能 |
| 语音识别 | 本地识别 | 系统设置 - 隐私与安全性 - 语音识别 |

### 3. 开始使用

```
按住 fn 键 - 说话 - 松开 - 文字自动输入到光标位置
```

---

## 进阶配置

### 自定义快捷键

不习惯 `fn` 键？右键点击菜单栏图标，可以修改为任意组合键。

### 云端识别

使用阿里云 FunASR 获得更精准的识别效果：

1. 访问阿里云百炼获取 API Key: https://bailian.console.aliyun.com/cn-beijing/?source_channel=%22ummm%22?tab=app#/api-key
2. 右键点击菜单栏图标，填入 API Key
3. 自动切换为云端识别引擎

**云端识别优势:**
- 更高的识别准确率
- 自动过滤语气词（"嗯"、"那个"、"就是"）
- 支持领域热词微调

---

## 领域热词微调

FunASR 支持添加专业术语，提升特定领域的识别准确率。

**适用场景:**
- 医疗：专业药品名、疾病名称
- 法律：法律术语、案件编号
- 技术：产品名、技术术语
- 金融：股票代码、金融术语

**模型微调入口:** https://bailian.console.aliyun.com/cn-beijing/?source_channel=%22ummm%22/?tab=model#/efm/model_experience_center/voice

---

## 技术架构

### 应用技术栈

| 组件 | 技术 |
|------|------|
| 框架 | SwiftUI + AppKit |
| 本地识别 | Apple Speech Framework |
| 云端识别 | 阿里云 FunASR (WebSocket) |
| 快捷键 | Carbon Framework |
| 打包 | Universal Binary (arm64 + x86_64) |

### Landing 页面技术栈

| 组件 | 技术 |
|------|------|
| 结构 | HTML5 |
| 样式 | CSS3 |
| 交互 | JavaScript |
| 特性 | 中英文双语、响应式设计、SEO 优化 |

---

## 项目结构

```
landing/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # 交互逻辑和国际化
├── favicon.png         # 网站图标
├── apple-touch-icon.png # iOS 图标
└── README.md           # 说明文档
```

---

## 本地开发

### 预览页面

```bash
# 方式一：直接打开
open index.html

# 方式二：Python 服务器
python -m http.server 8080

# 方式三：Node.js 服务器
npx serve .
```

### 部署

页面为纯静态文件，可部署到任意静态托管服务：
- Vercel
- Netlify
- GitHub Pages
- 阿里云 OSS

---

## 相关链接

| 资源 | 链接 |
|------|------|
| 在线页面 | https://ummm-landing.vercel.app/ |
| 源码仓库 | https://github.com/inhai-wiki/ummm |
| GitHub 仓库 | https://github.com/inhai-wiki/ummm-landing |
| 下载安装包 | https://inhai-wiki.oss-cn-hangzhou.aliyuncs.com/ummm/Ummm.dmg |
| 获取 API Key | https://bailian.console.aliyun.com/cn-beijing/?source_channel=%22ummm%22?tab=app#/api-key |
| 模型微调 | https://bailian.console.aliyun.com/cn-beijing/?source_channel=%22ummm%22/?tab=model#/efm/model_experience_center/voice |
| AI IDE | https://qoder.ai |

---

## 许可证

MIT License

---

Powered by Qoder.ai & 阿里云百炼

Made by inhai - https://inhai.wiki
