VANTERA website - static site package / 静态网站包
================================================
Contents / 内容
  index.html   the whole site (HTML + CSS + JS in one file) / 整站页面
  images/      35 product images (JPG), referenced as images/<name>.jpg / 产品图片

How to deploy / 部署方式
  1. Upload the CONTENTS of this folder (index.html and the images folder) to the web root of the site.
     把 index.html 和 images 文件夹一起上传到网站根目录，保持相对路径不变。
  2. No build step, no backend, no database. Works on any static host
     (Cloudflare Pages, Netlify, Vercel, GitHub Pages, Nginx/Apache, cPanel).
     不需要构建和后端，任何静态托管都可以。
  3. Open the home page and check: images load, nav links jump to sections, WhatsApp button opens chat.

Things to know / 注意事项
  - Inquiry form: opens the visitor's email app addressed to alex@fortishardware.cn (mailto). It does not store submissions.
    To change the address, edit  const CONFIG={email:"..."}  near the bottom of index.html,
    and the two mailto/wa.me links in the contact section.
  - WhatsApp: https://wa.me/8615333835149
  - Fonts load from Google Fonts; if blocked, the page falls back to system fonts automatically.
  - Do not rename files in images/.
