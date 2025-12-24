let currentGuideStep = 1;

function navigateTo(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // 显示目标页
    document.getElementById(pageId).classList.add('active');
    
    // 控制导航栏和引导初始化
    document.getElementById('main-nav').style.display = (pageId === 'page-home') ? 'flex' : 'none';
    
    if (pageId === 'page-guide') {
        renderGuide();
    }
}

function selectTask(el, task) {
    document.querySelectorAll('.task-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    document.getElementById('btn-purpose-next').classList.remove('disabled');
}

// 引导页逻辑
const guideSteps = [
    { title: "步骤 1/3", text: "点击【开始聊天】" },
    { title: "步骤 2/3", text: "输入联系人名称" },
    { title: "步骤 3/3", text: "发送第一条消息" }
];

function renderGuide() {
    const step = guideSteps[currentGuideStep - 1];
    const container = document.getElementById('guide-content');
    container.innerHTML = `
        <div style="color:#007AFF; font-weight:bold; margin-bottom:10px;">${step.title}</div>
        <h2 style="font-size:28px; margin-bottom:40px;">${step.text}</h2>
        <div style="height:200px; background:#eee; border-radius:20px; display:flex; align-items:center; justify-content:center; border:2px dashed #ccc;">
            模拟应用界面
        </div>
    `;
    document.getElementById('btn-guide-next').innerText = currentGuideStep === 3 ? "完成" : "下一步";
}

function nextGuideStep() {
    if (currentGuideStep < 3) {
        currentGuideStep++;
        renderGuide();
    } else {
        alert("学会啦！");
        navigateTo('page-home');
        currentGuideStep = 1;
    }
}

function resetGuide() {
    currentGuideStep = 1;
    renderGuide();
}
