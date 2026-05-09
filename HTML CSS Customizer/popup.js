document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn, .content').forEach(el => el.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

document.getElementById('apply-html').addEventListener('click', async () => {
    const code = document.getElementById('html-code').value;
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (html) => {
            document.body.insertAdjacentHTML('afterbegin', html);
        },
        args: [code]
    });
});

document.getElementById('apply-css').addEventListener('click', async () => {
    const code = document.getElementById('css-code').value;
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (css) => {
            const style = document.createElement('style');
            style.textContent = css;
            document.head.appendChild(style);
        },
        args: [code]
    });
});