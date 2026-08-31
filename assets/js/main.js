// Fortis Hardware — 公共交互脚本
(function () {
  'use strict';

  // 汉堡菜单切换
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // 移动端点击导航链接后自动收起菜单
  if (links) {
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  // 当前页导航高亮（根据 URL 路径匹配）
  var path = window.location.pathname;
  var navAnchors = document.querySelectorAll('.nav-links a');
  navAnchors.forEach(function (a) {
    var href = a.getAttribute('href') || '';
    if (href === '/' || href === '') return;
    if (path.indexOf(href.replace(/\/$/, '')) !== -1) {
      a.classList.add('active');
    }
  });
  // 首页高亮
  if (path === '/' || path === '/index.html') {
    var home = document.querySelector('.nav-links a[href="/"]');
    if (home) home.classList.add('active');
  }
})();
