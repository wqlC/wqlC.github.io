// 获取所有导航链接和主要部分的引用
const links = document.querySelectorAll('.sidebar a');
const sections = document.querySelectorAll('main section');

// 为每个导航链接添加单击事件处理程序
links.forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault(); // 阻止默认的跳转行为
		const href = link.getAttribute('href'); // 获取链接的目标 ID
		const target = document.querySelector(href); // 查找具有该 ID 的元素
		target.scrollIntoView({behavior: 'smooth'}); // 平滑地滚动到目标元素
	});
});

// 为每个主要部分添加交互效果
sections.forEach((section) => {
	section.addEventListener('mouseenter', () => {
		section.classList.add('highlight');
	});
	section.addEventListener('mouseleave', () => {
		section.classList.remove('highlight');
	});
});


const formatJsonBtn = document.getElementById('format-json');
formatJsonBtn.addEventListener('click', () => {
	const jsonPre = document.querySelector('.container pre');
	const jsonStr = jsonPre.textContent.trim();
	const formattedJson = formatJson(jsonStr);
	jsonPre.textContent = formattedJson;
});

const compareJsonBtn = document.getElementById('compare-json');
compareJsonBtn.addEventListener('click', () => {
	// 在此添加 JSON 对比的代码
	alert('JSON 对比');
});

function formatJson(jsonStr) {
	try {
		const obj = JSON.parse(jsonStr);
		return JSON.stringify(obj, null, '\t');
	} catch (e) {
		return jsonStr;
	}
}
