import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const baseUrl = "https://blog.pinakalegal.com";

const subjects = [
  ["Family Law", ["498A & DV Defence", "Adoption", "Child Custody", "Divorce - After", "Divorce - Documents", "Divorce - Getting Started", "Divorce - Process", "Domestic Violence", "Inheritance Rights", "Maintenance", "Marriage - Registration", "Wills & Succession"]],
  ["Criminal Law", ["2026 New Laws", "Accused Defence", "Arrest - Aftermath", "Arrest - Crisis", "Bail", "Cheating & Fraud", "Cheque Bounce", "Criminal Misc", "Cyber Crime", "Defamation", "FIR Problems", "Money Recovery", "Motor Accident", "Neighbour & Local", "Political Harassment", "Women Safety"]],
  ["Property Law", ["Builder Disputes", "Inheritance of Property", "Land Disputes", "Landlord Problems", "POA & Deeds", "Property Due Diligence", "Property Misc", "Society & Redevelopment", "Tenant Problems"]],
  ["Consumer Rights", ["Banking", "Consumer Basics", "Education", "Insurance", "Medical", "Online Shopping", "Telecom & Utilities", "Travel"]],
  ["Workplace & Employment", ["Employer Side", "Employment Contracts", "Salary & Wages", "Termination", "Workplace Harassment"]],
  ["Business & Contracts", ["Arbitration", "Breach & Enforcement", "Drafting Needs", "Startup & Biz"]],
  ["Tax & Finance", ["Capital Gains", "ED & PMLA", "GST", "IT Notices", "Loan Recovery", "TDS & Salary", "Tax Planning"]],
  ["Intellectual Property", ["2026 IPR", "Copyright", "Design & GI", "Licensing", "Patent", "Trade Secret", "Trademark"]],
  ["Cyber Law", ["AI & Tech", "Crypto", "Privacy", "New Scams", "Online Harm", "Remote Work"]],
  ["Documents & Formats", ["Affidavits", "Business Formats", "Complaints", "Employment Formats", "Family Formats", "Financial Formats", "Legal Notices", "Property Formats"]],
];

const descriptions = {
  "498A & DV Defence": "Articles on defending 498A and domestic violence proceedings, bail, quashing, and family protection.",
  "Bail": "Articles about bail, anticipatory bail, regular bail, arrest protection, and post-arrest remedies.",
  "Domestic Violence": "Articles on domestic violence remedies, protection orders, maintenance, and defence strategy.",
};

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeJson(value) {
  return JSON.stringify(String(value)).slice(1, -1);
}

function page(subjectName, topicName) {
  const subjectSlug = slugify(subjectName);
  const topicSlug = slugify(topicName);
  const canonical = `${baseUrl}/${subjectSlug}/${topicSlug}/`;
  const description = descriptions[topicName] || `Articles under ${topicName} in ${subjectName}.`;

  return `<!DOCTYPE html>
<html lang="en-IN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(topicName)} Articles | ${escapeHtml(subjectName)} | Pinaka Legal Blog</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:title" content="${escapeHtml(topicName)} Articles | ${escapeHtml(subjectName)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${canonical}">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Home","item":"${baseUrl}/"},
    {"@type":"ListItem","position":2,"name":"${escapeJson(subjectName)}","item":"${baseUrl}/${subjectSlug}/"},
    {"@type":"ListItem","position":3,"name":"${escapeJson(topicName)}","item":"${canonical}"}
  ]
}
</script>
<style>
:root{--accent:#c8323c;--dark:#12131c;--text:#1a1c2a;--muted:#5a5e72;--bg:#f9f9fb;--card:#fff;--border:#e4e5ec}
*{box-sizing:border-box}body{margin:0;font-family:Segoe UI,Arial,sans-serif;background:var(--bg);color:var(--text);line-height:1.65}
a{color:var(--accent);text-decoration:none}a:hover{text-decoration:underline}
.site-nav{background:var(--dark);padding:0 24px;display:flex;align-items:center;justify-content:space-between;min-height:56px}
.nav-brand{color:#fff;font-weight:700}.nav-links{display:flex;gap:18px;list-style:none;margin:0;padding:0;flex-wrap:wrap}.nav-links a{color:rgba(255,255,255,.82);font-size:.9rem}
main{max-width:1120px;margin:0 auto;padding:36px 20px 64px}.breadcrumbs{font-size:.9rem;color:var(--muted);margin-bottom:18px}.eyebrow{color:var(--accent);font-weight:700;text-transform:uppercase;font-size:.78rem;letter-spacing:.08em}
h1{font-size:clamp(1.8rem,3vw,2.5rem);line-height:1.2;margin:.25rem 0 1rem;color:var(--dark)}p{color:var(--muted)}
.toolbar{display:flex;gap:12px;align-items:center;justify-content:space-between;margin:28px 0 18px;flex-wrap:wrap}.count{font-size:.9rem;color:var(--muted)}
.search{min-width:min(100%,320px);border:1px solid var(--border);border-radius:8px;padding:10px 12px;font:inherit;background:#fff}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin-top:10px}.card{background:var(--card);border:1px solid var(--border);border-radius:8px;overflow:hidden;display:flex;flex-direction:column;min-height:190px}
.thumb{width:100%;aspect-ratio:16/9;object-fit:cover;background:#eef0f5}.card-body{padding:18px 20px;display:flex;flex-direction:column;gap:8px;flex:1}
.card h2{font-size:1.06rem;line-height:1.35;margin:0;color:var(--dark)}.meta{font-size:.84rem;color:var(--muted)}.excerpt{font-size:.92rem;color:var(--muted);margin:0;flex:1}.empty{background:#fff;border:1px dashed var(--border);border-radius:8px;padding:24px;color:var(--muted)}
footer{background:var(--dark);color:rgba(255,255,255,.68);padding:28px 20px;text-align:center;font-size:.85rem}
</style>
</head>
<body data-subject="${subjectSlug}" data-topic="${topicSlug}">
<nav class="site-nav" aria-label="Main navigation">
  <a class="nav-brand" href="/">Pinaka Legal Blog</a>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/${subjectSlug}/">${escapeHtml(subjectName)}</a></li>
    <li><a href="https://www.pinakalegal.com/contact">Contact</a></li>
  </ul>
</nav>
<main>
  <p class="breadcrumbs"><a href="/">Home</a> / <a href="/${subjectSlug}/">${escapeHtml(subjectName)}</a> / ${escapeHtml(topicName)}</p>
  <div class="eyebrow">${escapeHtml(subjectName)}</div>
  <h1>${escapeHtml(topicName)}</h1>
  <p>${escapeHtml(description)}</p>

  <div class="toolbar">
    <div class="count" id="article-count">Loading articles...</div>
    <input class="search" id="article-search" type="search" placeholder="Search articles in this topic" autocomplete="off">
  </div>

  <section class="grid" id="article-grid" aria-live="polite"></section>
</main>
<footer>Pinaka Legal Blog. Legal information for general awareness only.</footer>
<script>
(function () {
  var subject = document.body.dataset.subject;
  var topic = document.body.dataset.topic;
  var grid = document.getElementById('article-grid');
  var count = document.getElementById('article-count');
  var search = document.getElementById('article-search');
  var articles = [];

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, function (char) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char];
    });
  }

  function formatDate(value) {
    if (!value) return '';
    var date = new Date(value + 'T00:00:00+05:30');
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  function articleUrl(article) {
    return '/' + article.subject + '/' + article.topic + '/' + article.slug + '/';
  }

  function thumbUrl(article) {
    if (!article.thumb) return '';
    if (/^https?:\\/\\//.test(article.thumb) || article.thumb.charAt(0) === '/') return article.thumb;
    return articleUrl(article) + article.thumb;
  }

  function render() {
    var q = search.value.trim().toLowerCase();
    var filtered = articles.filter(function (article) {
      var haystack = [article.title, article.excerpt, article.date].join(' ').toLowerCase();
      return !q || haystack.indexOf(q) !== -1;
    });

    count.textContent = filtered.length + ' article' + (filtered.length === 1 ? '' : 's') + ' in this topic';

    if (!filtered.length) {
      grid.innerHTML = '<div class="empty">No articles are published in this topic yet.</div>';
      return;
    }

    grid.innerHTML = filtered.map(function (article) {
      var thumb = thumbUrl(article);
      return '<article class="card">' +
        (thumb ? '<img class="thumb" src="' + escapeHtml(thumb) + '" alt="" loading="lazy">' : '') +
        '<div class="card-body">' +
          '<p class="meta">' + escapeHtml(formatDate(article.date)) + '</p>' +
          '<h2><a href="' + escapeHtml(articleUrl(article)) + '">' + escapeHtml(article.title) + '</a></h2>' +
          '<p class="excerpt">' + escapeHtml(article.excerpt) + '</p>' +
          '<p class="meta"><a href="' + escapeHtml(articleUrl(article)) + '">Read article -></a></p>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  fetch('/articles.json', { cache: 'no-cache' })
    .then(function (response) {
      if (!response.ok) throw new Error('Could not load articles.json');
      return response.json();
    })
    .then(function (data) {
      articles = data
        .filter(function (article) { return article.subject === subject && article.topic === topic; })
        .sort(function (a, b) { return String(b.date || '').localeCompare(String(a.date || '')); });
      render();
    })
    .catch(function () {
      count.textContent = 'Articles could not be loaded';
      grid.innerHTML = '<div class="empty">The article list is unavailable. Please check articles.json.</div>';
    });

  search.addEventListener('input', render);
})();
</script>
</body>
</html>
`;
}

for (const [subjectName, topics] of subjects) {
  const subjectSlug = slugify(subjectName);
  for (const topicName of topics) {
    const topicSlug = slugify(topicName);
    const filePath = path.join(root, subjectSlug, topicSlug, "index.html");
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, page(subjectName, topicName), "utf8");
  }
}
