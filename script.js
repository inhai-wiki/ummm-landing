// i18n translations
const translations = {
    en: {
        'nav.features': 'Features',
        'nav.how': 'How to use',
        'nav.download': 'Download for macOS',
        'hero.title': 'Speak, don\'t type',
        'hero.desc1': 'Hold fn and speak naturally. Ummm converts your voice to text in real-time',
        'hero.desc2': 'and types it at your cursor. 3x faster than typing.',
        'hero.cta': 'Download for macOS',
        'demo.recording': 'Recording...',
        'demo.sample': 'Hello, this is text from voice input, no typing needed',
        'feature1.title': 'Hold to Record',
        'feature1.desc1': 'Hold fn to speak, release to stop and input.',
        'feature1.desc2': 'No start button, no stop button. Everything is instant.',
        'feature1.hint': 'Hold to speak',
        'feature2.title': 'Type Where You Click',
        'feature2.desc1': 'Whether you\'re writing emails, editing documents, or chatting,',
        'feature2.desc2': 'text is automatically inserted at your cursor position.',
        'feature2.prefix': 'To:',
        'feature2.typed': 'john@email.com',
        'speed.intro1': 'For years, we\'ve relied on keyboards. But that era is ending.',
        'speed.intro2': 'Speak naturally, watch your voice become text.',
        'speed.keyboard': 'Keyboard',
        'speed.unit': 'wpm',
        'speed.badge': '3x faster',
        'quote.text': 'This feels like magic.',
        'features.title': 'Why Ummm',
        'features.realtime.title': 'Real-time',
        'features.realtime.desc': 'Transcribe as you speak, see results instantly',
        'features.privacy.title': 'Privacy First',
        'features.privacy.desc': 'Local recognition by default, data stays on your Mac',
        'features.easy.title': 'Zero Learning Curve',
        'features.easy.desc': 'Hold fn, speak, release. That\'s it.',
        'features.cloud.title': 'Cloud Optional',
        'features.cloud.desc': 'Add API Key for more accurate cloud recognition',
        'features.hotkey.title': 'Custom Hotkey',
        'features.hotkey.desc': 'Don\'t like fn? Change it to any key combo',
        'features.chinese.title': 'Chinese Optimized',
        'features.chinese.desc': 'Deeply optimized for Chinese speech recognition',
        'how.title': 'Get Started',
        'how.step1.title': 'Download',
        'how.step1.desc': 'Download DMG, drag to Applications',
        'how.step2.title': 'Grant Access',
        'how.step2.desc': 'Allow microphone and accessibility',
        'how.step3.title': 'Hold & Speak',
        'how.step3.desc': 'fn + voice = text',
        'cta.title': 'Ready?',
        'cta.subtitle': 'Free download, try it now',
        'cta.button': 'Download for macOS',
        'cta.version': 'Version 1.0',
        'cta.size': 'Free',
        'cta.macos': 'macOS 12.0 Monterey or later',
        'cta.chip': 'Apple Silicon (M1/M2/M3) & Intel',
        'footer.contact': 'Contact',
        'footer.bailian': 'Alibaba Cloud Bailian',
        'filler.title': 'Removes Filler',
        'filler.desc1': 'Automatically removes filler words like "um," "uh," and "you know,"',
        'filler.desc2': 'making your transcriptions clear and professional.',
        'filler.badge': 'Removes filler',
        'filler.example.filler1': 'Um, well, ',
        'filler.example.text1': 'I think we can ',
        'filler.example.filler2': ', like, ',
        'filler.example.text2': 'discuss it tomorrow?',
        'filler.example.result': 'I think we can discuss it tomorrow?',
        'hotwords.title': 'Domain Hotwords',
        'hotwords.desc1': 'Add your unique terminology to improve recognition accuracy.',
        'hotwords.desc2': 'Powered by Alibaba Cloud FunASR, fine-tune for your domain.',
        'hotwords.your': 'Your Hotwords',
        'hotwords.link': 'Get your model on Bailian →',
        'hotwords.item1': 'Tongyi Qianwen',
        'hotwords.item3': 'Bailian',
        'platforms.title': 'Works on All Apps',
        'platforms.subtitle': 'Seamless AI voice dictation in every application on your Mac.'
    },
    zh: {
        'nav.features': '功能',
        'nav.how': '使用',
        'nav.download': '下载 macOS 版',
        'hero.title': '说话，不打字',
        'hero.desc1': '按住 fn 键自然说话，Ummm 会将你的语音实时转换为文字，',
        'hero.desc2': '并自动输入到光标位置。比打字快 3 倍。',
        'hero.cta': '下载 macOS 版',
        'demo.recording': '正在录音...',
        'demo.sample': '你好，这是通过语音输入的文字，不需要打字，说话就好',
        'feature1.title': '按住即录',
        'feature1.desc1': '按住 fn 键开始说话，松开自动停止并输入。',
        'feature1.desc2': '没有开始按钮，没有停止按钮，一切都是即时的。',
        'feature1.hint': '按住说话',
        'feature2.title': '光标在哪，文字就在哪',
        'feature2.desc1': '无论你在写邮件、编辑文档还是聊天，',
        'feature2.desc2': '识别结果会自动输入到当前光标位置。',
        'feature2.prefix': '发送至：',
        'feature2.typed': '张三的邮箱',
        'speed.intro1': '多年来，我们一直依赖键盘。但这个时代正在结束。',
        'speed.intro2': '自然地说话，看着你的声音变成文字。',
        'speed.keyboard': '键盘',
        'speed.unit': '字/分钟',
        'speed.badge': '快 3 倍',
        'quote.text': '这感觉像魔法一样',
        'features.title': '为什么选择 Ummm',
        'features.realtime.title': '实时识别',
        'features.realtime.desc': '边说边转换，识别结果即时显示',
        'features.privacy.title': '隐私优先',
        'features.privacy.desc': '默认本地识别，数据不离开你的电脑',
        'features.easy.title': '零学习成本',
        'features.easy.desc': '按住 fn 说话，松开自动输入',
        'features.cloud.title': '云端可选',
        'features.cloud.desc': '填入 API Key 使用更精准的云端识别',
        'features.hotkey.title': '自定义快捷键',
        'features.hotkey.desc': '不习惯 fn？可以改成任意组合键',
        'features.chinese.title': '中文优化',
        'features.chinese.desc': '针对中文语音识别深度优化',
        'how.title': '开始使用',
        'how.step1.title': '下载安装',
        'how.step1.desc': '下载 DMG，拖入应用程序',
        'how.step2.title': '授权权限',
        'how.step2.desc': '允许麦克风和辅助功能',
        'how.step3.title': '按住说话',
        'how.step3.desc': 'fn + 语音 = 文字',
        'cta.title': '准备好了吗？',
        'cta.subtitle': '免费下载，立即体验',
        'cta.button': '下载 macOS 版',
        'cta.version': '版本 1.0',
        'cta.size': '免费',
        'cta.macos': 'macOS 12.0 Monterey 或更高版本',
        'cta.chip': 'Apple Silicon (M1/M2/M3) 和 Intel 芯片',
       'footer.contact': '联系我们',
        'footer.bailian': '阿里云百炼',
        'filler.title': '语气词过滤',
        'filler.desc1': '自动去除“嗯”、“那个”、“就是”等语气词，',
        'filler.desc2': '让你的转写内容更加清晰专业。',
        'filler.badge': '过滤语气词',
        'filler.example.filler1': '嗯，那个，',
        'filler.example.text1': '我觉得我们可以',
        'filler.example.filler2': '，就是，',
        'filler.example.text2': '明天再讨论？',
        'filler.example.result': '我觉得我们可以明天再讨论？',
        'hotwords.title': '领域热词',
        'hotwords.desc1': '添加你的专业术语，提升识别准确率。',
        'hotwords.desc2': '基于阿里云 FunASR，支持领域模型微调。',
        'hotwords.your': '你的热词',
        'hotwords.link': '前往百炼获取模型 →',
        'hotwords.item1': '通义千问',
        'hotwords.item3': '百炼',
        'platforms.title': '适用所有应用',
        'platforms.subtitle': '在 Mac 上的任何应用中使用 AI 语音输入。'
    }
};

const typingTexts = {
    en: [
        'Hello, this is text from voice input, no typing needed',
        'Hold fn key to speak, release to input at cursor',
        'Send an email to John asking if he\'s free tomorrow',
        'This is so much faster than typing'
    ],
    zh: [
        '你好，这是通过语音输入的文字，不需要打字，说话就好',
        '按住 fn 键说话，松开自动输入到光标位置',
        '帮我发一封邮件给张三，问他明天有空吗',
        '这比打字快多了，而且更自然'
    ]
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh' ? 'Ummm - 说话，不打字' : 'Ummm - Speak, don\'t type';
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update lang switch button
    const langBtn = document.getElementById('langSwitch');
    if (langBtn) {
        langBtn.textContent = lang === 'en' ? 'CN' : 'EN';
    }
    
    // Save preference
    localStorage.setItem('ummm-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // Check saved language preference
    const savedLang = localStorage.getItem('ummm-lang') || 'en';
    setLanguage(savedLang);
    
    // Language switch button
    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        langSwitch.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'zh' : 'en');
        });
    }
    
    // Typing effect
    const typedText = document.querySelector('.typed-text');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const texts = typingTexts[currentLang];
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typedText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 20 : 60;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    setTimeout(type, 1000);
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.feature-item, .step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease-out';
        observer.observe(el);
    });
    
    // Add visible class styles
    const style = document.createElement('style');
    style.textContent = `
        .feature-item.visible, .step.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Stagger animation
    document.querySelectorAll('.feature-item').forEach((item, i) => {
        item.style.transitionDelay = `${i * 0.1}s`;
    });
    
    document.querySelectorAll('.step').forEach((step, i) => {
        step.style.transitionDelay = `${i * 0.15}s`;
    });

    // Feature cards stacked reveal animation
    const featureCards = document.querySelectorAll('.feature-section, .speed-section');
    
    featureCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    featureCards.forEach((c, i) => {
                        setTimeout(() => {
                            c.classList.add('revealed');
                        }, i * 200);
                    });
                    cardObserver.disconnect();
                }
            });
        }, { threshold: 0.2 });
        
        if (index === 0) {
            cardObserver.observe(card);
        }
    });

    // Speed section number animation
    const speedSection = document.querySelector('.speed-section');
    if (speedSection) {
        const speedObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = speedSection.querySelectorAll('.speed-item');
                    const leftNum = items[0]?.querySelector('.speed-number');
                    const rightNum = items[1]?.querySelector('.speed-number');
                    
                    if (leftNum && !leftNum.dataset.animated) {
                        leftNum.dataset.animated = 'true';
                        animateNumber(leftNum, 45, 800, 300);
                    }
                    if (rightNum && !rightNum.dataset.animated) {
                        rightNum.dataset.animated = 'true';
                        animateNumber(rightNum, 150, 1200, 500);
                    }
                }
            });
        }, { threshold: 0.5 });
        
        speedObserver.observe(speedSection);
    }
    
    function animateNumber(el, target, duration, delay) {
        setTimeout(() => {
            const startTime = performance.now();
            
            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(eased * target);
                
                el.textContent = current;
                
                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            }
            
            requestAnimationFrame(update);
        }, delay);
    }

    // Cursor demo typing
    const cursorTyped = document.querySelector('.cursor-demo .typed');
    if (cursorTyped) {
        let shown = false;
        const cursorObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !shown) {
                    shown = true;
                    const text = currentLang === 'zh' ? '张三的邮箱' : 'john@email.com';
                    let i = 0;
                    cursorTyped.textContent = '';
                    const typeInterval = setInterval(() => {
                        cursorTyped.textContent = text.substring(0, i + 1);
                        i++;
                        if (i >= text.length) {
                            clearInterval(typeInterval);
                        }
                    }, 100);
                }
            });
        }, { threshold: 0.5 });
        
        cursorObserver.observe(cursorTyped.closest('.cursor-demo'));
    }
});
