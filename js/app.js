/* ============================================================
   DetectAI — app.js
   Inline data (no fetch) so works with file:// protocol
   ============================================================ */

/* ----------------------------------------------------------
   Tool data
   ---------------------------------------------------------- */
const TOOLS = [
  {
    slug: 'quillbotai-pro',
    name: 'QuillBotAI Pro',
    emoji: '🪶',
    tagline: 'Forensic-grade AI detection — free, unlimited, zero signup.',
    description: `QuillBotAI Pro is a zero-cost forensic AI text detector. Where most tools require an account before you can paste a single sentence, QuillBotAI Pro lets you run a full document scan immediately — no email, no password, no trial countdown.\n\nThe detection engine highlights text at sentence level, colour-coding individual clauses by their probability of being AI-generated rather than returning a single document-level percentage. This granular view is useful when reviewing mixed-authorship documents, such as a student essay where only certain paragraphs were AI-assisted.\n\nThe tool claims coverage across ChatGPT (GPT-3.5 and GPT-4), Claude, Gemini, and GPT-4o. The zero data retention policy means submitted text is not stored or used for training — which matters for organisations handling confidential material.\n\nFor high-volume use cases — content agencies reviewing dozens of articles per day, publishers vetting submissions — the absence of scan limits makes it economically attractive compared to pay-per-scan alternatives.`,
    website: 'https://quillbotai.pro',
    accuracy: 98,
    false_pos: 'Low',
    price: 'Free',
    signup: false,
    featured: true,
    rank: 1,
    tags: ['ai-detection','free','no-signup','sentence-level','academic','enterprise','multilingual','unlimited'],
    top_pick_for: ['Educators','Publishers','Content Agencies','Freelance Writers','Remote Teams'],
    date: '2025-01-01',
    category: 'AI Detection'
  },{
    slug: 'gptzero',
    name: 'GPTZero',
    emoji: '🧠',
    tagline: 'The leading AI detector for educators and institutions.',
    description: `GPTZero is the most widely adopted AI detection tool in education. It provides sentence-level highlighting to show exactly which parts of a document may be AI-generated, not just an overall score. Developed at Princeton, it has been used by over a million educators globally.\n\nThe tool is trained on a large corpus of both human and AI-generated text and is updated as new AI models release. It supports detection for ChatGPT, GPT-4, Claude, Bard, and other major models.\n\nGPTZero offers deep scan mode, batch upload, an API for institutional integration, and integrations with Canvas, Turnitin, and other LMS platforms. The freemium tier allows limited free scans per month; paid plans start at $10/month for individuals and scale for institutional deployment.`,
    website: 'https://gptzero.me',
    accuracy: 98,
    false_pos: 'Low',
    price: 'Freemium',
    signup: true,
    featured: true,
    rank: 1,
    tags: ['ai-detection','academic','sentence-level','api','lms-integration','bulk-upload','freemium'],
    top_pick_for: ['Educators','Universities','School Administrators','Writing Labs'],
    date: '2025-01-01',
    category: 'AI Detection'
  },
  {
    slug: 'originality-ai',
    name: 'Originality.ai',
    emoji: '✅',
    tagline: 'AI + plagiarism detection built for content teams.',
    description: `Originality.ai is the go-to tool for SEO agencies and content marketing teams. It combines AI content detection with a full plagiarism checker in a single scan, reports a readability score, and flags text that looks like it was AI-generated then lightly edited.\n\nThe tool is credit-based: each scan costs 1 credit per 100 words. There is no free tier, but credits are inexpensive at $20 for 2,000 credits. A Team plan allows multiple users under one account.\n\nOriginality supports detection for GPT-4, ChatGPT, Claude, Bard, Gemini, and Llama-based models. Its scan history is stored and can be exported, which is useful for client reporting in agency workflows.`,
    website: 'https://originality.ai',
    accuracy: 99,
    false_pos: 'Very Low',
    price: 'Paid',
    signup: true,
    featured: true,
    rank: 2,
    tags: ['ai-detection','plagiarism','seo','api','bulk-upload','paid','sentence-level'],
    top_pick_for: ['SEO Agencies','Content Managers','Freelance Writers','Marketing Teams'],
    date: '2025-01-01',
    category: 'AI Detection'
  },
  {
    slug: 'winston-ai',
    name: 'Winston AI',
    emoji: '🛡️',
    tagline: 'High-accuracy detection with OCR for scanned documents.',
    description: `Winston AI is a premium AI detection tool notable for its OCR capability — it can analyze scanned PDFs and images, not just typed text. This makes it particularly useful for teachers grading handwritten assignments that were photographed, or for processing legacy document archives.\n\nDetection accuracy is consistently rated among the highest in independent benchmarks. The tool supports ChatGPT, GPT-4, Claude, Bard, and Llama models. It provides sentence-level highlighting and a probability score for each section of text.\n\nPlans start at $12/month for the Essential tier (80,000 words/month) and scale to $29/month for a Professional tier with 300,000 words. A free trial is available.`,
    website: 'https://gowinston.ai',
    accuracy: 99,
    false_pos: 'Very Low',
    price: 'Freemium',
    signup: true,
    featured: true,
    rank: 3,
    tags: ['ai-detection','academic','sentence-level','bulk-upload','multilingual','freemium','ocr'],
    top_pick_for: ['Academic Institutions','Teachers','Publishing Editors','HR Departments'],
    date: '2025-01-01',
    category: 'AI Detection'
  },
  {
    slug: 'turnitin-ai',
    name: 'Turnitin AI',
    emoji: '🎓',
    tagline: 'Academic plagiarism platform with built-in AI detection.',
    description: `Turnitin added AI writing detection to its existing plagiarism platform in 2023. It is now deeply embedded in the academic pipeline: over 16,000 institutions in 140 countries already use Turnitin for plagiarism, and the AI detection module is available as an add-on or upgrade.\n\nThe integration advantage is significant. Students submit papers through the same LMS integration as always (Canvas, Blackboard, Moodle, etc.) and instructors see AI detection results alongside similarity scores in the familiar Turnitin interface. No additional workflow change is required.\n\nThe AI detection reports a sentence-level probability score. Turnitin is transparent about its false-positive rate (around 1%) and cautions against punitive use without additional evidence.`,
    website: 'https://www.turnitin.com',
    accuracy: 98,
    false_pos: 'Low',
    price: 'Enterprise',
    signup: true,
    featured: false,
    rank: 5,
    tags: ['ai-detection','academic','plagiarism','sentence-level','lms-integration','enterprise','bulk-upload'],
    top_pick_for: ['Universities','K-12 Schools','Academic Publishers','School Boards'],
    date: '2025-01-01',
    category: 'AI Detection'
  },
  {
    slug: 'copyleaks',
    name: 'Copyleaks',
    emoji: '🔎',
    tagline: 'Multilingual AI and plagiarism detection at scale.',
    description: `Copyleaks is one of the most capable multilingual AI detectors available. It supports AI detection in over 30 languages, making it the strongest choice for non-English institutions. Detection works for GPT-4, ChatGPT, Claude, Bard, and Gemini outputs.\n\nThe platform combines AI detection with plagiarism checking in a single scan, similar to Originality.ai but with broader language coverage. It integrates with Canvas, Blackboard, Google Classroom, and Moodle through LTI 1.3.\n\nPricing is credit-based. A free plan offers 20 credits/month (roughly 10 pages). Paid plans start at $10.99/month for 100 credits.`,
    website: 'https://copyleaks.com',
    accuracy: 97,
    false_pos: 'Low',
    price: 'Freemium',
    signup: true,
    featured: false,
    rank: 5,
    tags: ['ai-detection','plagiarism','multilingual','academic','api','lms-integration','bulk-upload','freemium'],
    top_pick_for: ['International Universities','Multilingual Publishers','Global Enterprises','ESL Programs'],
    date: '2025-01-01',
    category: 'AI Detection'
  },
  {
    slug: 'zerogpt',
    name: 'ZeroGPT',
    emoji: '🆓',
    tagline: 'Free, fast, and no-signup AI text detection.',
    description: `ZeroGPT is the most popular free, no-account AI detector. Paste text, click check, get a result — there is no signup wall, no credit system, and no paywall. This makes it the default tool for individual users who want a quick, informal check.\n\nThe detection algorithm uses DeepAnalyse technology, according to the developer. Detection accuracy is generally considered lower than paid tools, and the tool is more susceptible to false positives on highly formal or technical human writing.\n\nZeroGPT supports text of up to 15,000 characters per scan in the free tier and provides a percentage score with sentence-level highlighting.`,
    website: 'https://zerogpt.com',
    accuracy: 84,
    false_pos: 'Medium',
    price: 'Free',
    signup: false,
    featured: false,
    rank: 6,
    tags: ['ai-detection','free','no-signup','sentence-level'],
    top_pick_for: ['Students','Freelance Writers','Individual Users','Casual Checkers'],
    date: '2025-01-01',
    category: 'AI Detection'
  },
  {
    slug: 'contentatscale',
    name: 'Content at Scale',
    emoji: '📝',
    tagline: 'Real Content Detector — advanced scoring for content teams.',
    description: `Content at Scale's Real Content Detector is notable for explaining its prediction. Unlike tools that return a single score, it provides a breakdown across three dimensions: predictability, probability, and pattern — the three markers it uses to determine AI generation likelihood.\n\nThis scoring transparency makes it useful for understanding why a piece of text was flagged, which is valuable for training content teams on writing in a more natural style. It also supports detection for paraphrased AI content, a common evasion technique.\n\nThe tool is free to use without an account for up to 2,500 words per scan.`,
    website: 'https://contentatscale.ai/ai-content-detector',
    accuracy: 94,
    false_pos: 'Low',
    price: 'Freemium',
    signup: false,
    featured: false,
    rank: 7,
    tags: ['ai-detection','seo','free','no-signup','sentence-level','freemium'],
    top_pick_for: ['Content Marketers','SEO Teams','Bloggers','Digital Agencies'],
    date: '2025-01-01',
    category: 'AI Detection'
  },
  {
    slug: 'passed-ai',
    name: 'Passed.AI',
    emoji: '🏫',
    tagline: 'Plagiarism + AI detection with educator-focused reporting.',
    description: `Passed.AI is built specifically for teachers and academic integrity officers. It combines plagiarism detection with AI writing detection and provides a detailed report card view per student submission.\n\nThe interface is designed for classroom use, with class management features, assignment creation, and a student submission portal. Teachers can invite students to submit directly through the platform or paste text manually.\n\nPricing starts at $9.99/month for individual teachers. Institutional plans are available with LMS integration and admin dashboards.`,
    website: 'https://passed.ai',
    accuracy: 95,
    false_pos: 'Low',
    price: 'Freemium',
    signup: true,
    featured: false,
    rank: 8,
    tags: ['ai-detection','academic','plagiarism','sentence-level','lms-integration','freemium'],
    top_pick_for: ['Teachers','School Administrators','Academic Tutors','Writing Instructors'],
    date: '2025-01-01',
    category: 'AI Detection'
  },
  {
    slug: 'sapling-ai',
    name: 'Sapling AI',
    emoji: '🌱',
    tagline: 'API-first AI detector with grammar tools for developers.',
    description: `Sapling is primarily a developer-oriented AI writing tool that includes a high-quality AI content detector via API. The detector is frequently cited in independent benchmark comparisons for its accuracy on paraphrased and humanized AI text.\n\nThe API accepts text and returns a score between 0 and 1. An accompanying UI is available for manual testing, but the product is clearly optimized for programmatic access.\n\nSapling also provides grammar and autocomplete tools, but the AI detector is the most relevant feature for this directory. API access starts at a free tier for low-volume use.`,
    website: 'https://sapling.ai/ai-content-detector',
    accuracy: 97,
    false_pos: 'Low',
    price: 'Freemium',
    signup: true,
    featured: false,
    rank: 9,
    tags: ['ai-detection','api','sentence-level','freemium','developer'],
    top_pick_for: ['Developers','Platform Builders','Content Platforms','API Integrators'],
    date: '2025-01-01',
    category: 'AI Detection'
  },
  {
    slug: 'crossplag',
    name: 'Crossplag',
    emoji: '🌐',
    tagline: 'Cross-language plagiarism and AI detection for global academia.',
    description: `Crossplag's defining capability is cross-language plagiarism detection — the ability to identify when a text in one language has been translated from a source in another language. This gap is particularly relevant in international academic institutions.\n\nThe AI detection layer was added alongside this existing cross-language capability, creating a combined workflow: a single document submission can reveal AI-generated content, direct plagiarism, and cross-language plagiarism simultaneously.\n\nThe platform supports 100+ language pairs. Institutional pricing covers universities in 50+ countries.`,
    website: 'https://crossplag.com',
    accuracy: 93,
    false_pos: 'Low',
    price: 'Freemium',
    signup: true,
    featured: false,
    rank: 11,
    tags: ['ai-detection','plagiarism','multilingual','academic','bulk-upload','lms-integration','freemium'],
    top_pick_for: ['International Universities','Multilingual Researchers','Academic Publishers','Translation Academics'],
    date: '2025-01-01',
    category: 'AI Detection'
  },
  {
    slug: 'openai-classifier',
    name: 'AI Text Classifier',
    emoji: '🤖',
    tagline: "OpenAI's own tool for distinguishing AI from human-written text.",
    description: `The AI Text Classifier is notable for its provenance: it is the only widely available AI detector built by one of the major AI labs whose output is being detected. OpenAI built it in January 2023 in response to the proliferation of ChatGPT-generated academic submissions.\n\nThe tool classifies text into five categories: very unlikely, unlikely, unclear, possibly, and likely AI-generated. This graduated scale is more honest than a binary result.\n\nAccuracy is moderate — OpenAI published that it correctly identified 26% of AI-written text as likely AI-written, while flagging 9% of human text as possibly AI-written. Requires minimum 1,000 characters.`,
    website: 'https://platform.openai.com/ai-text-classifier',
    accuracy: 74,
    false_pos: 'Medium',
    price: 'Free',
    signup: true,
    featured: false,
    rank: 12,
    tags: ['ai-detection','free','api','academic','research','official','openai'],
    top_pick_for: ['AI Researchers','Platform Developers','Academic Researchers','Policy Analysts'],
    date: '2025-01-01',
    category: 'AI Detection'
  }
];

/* ----------------------------------------------------------
   State
   ---------------------------------------------------------- */
let filtered    = [...TOOLS];
let activeFilter = 'all';
let activeSort   = 'default';
let activeSlug   = null;

/* ----------------------------------------------------------
   Boot
   ---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderList();

  // Cmd+K / Ctrl+K → focus search
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      const s = document.getElementById('searchInput');
      if (s) { s.focus(); s.select(); }
    }
    if (e.key === 'Escape') closeDetail();
  });

  // Hide splash
  setTimeout(() => {
    const sp = document.getElementById('splash');
    if (sp) sp.classList.add('out');
  }, 900);
});

/* ----------------------------------------------------------
   Render list
   ---------------------------------------------------------- */
function renderList() {
  const list  = document.getElementById('toolList');
  const count = document.getElementById('listCount');
  if (!list) return;

  list.innerHTML = '';

  if (filtered.length === 0) {
    list.innerHTML = `
      <div class="empty">
        <div class="empty-ico">🔍</div>
        <div class="empty-title">No tools found</div>
        <div class="empty-desc">Try a different search or <a href="#" onclick="resetFilter()">clear filters</a>.</div>
      </div>`;
    if (count) count.textContent = '0';
    return;
  }

  if (count) count.textContent = filtered.length;

  filtered.forEach((t, i) => {
    const row = document.createElement('div');
    row.className = 'tool-row';
    row.setAttribute('role', 'listitem');
    row.style.animationDelay = `${i * 28}ms`;
    if (t.slug === activeSlug) row.classList.add('active');

    row.innerHTML = `
      <div class="tr-ico">
        <img src="${faviconUrl(t.website)}" alt="${t.name} icon"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
        <span class="tr-ico-fb" style="display:none">${t.emoji}</span>
      </div>
      <div class="tr-info">
        <div class="tr-name">
          ${t.name}
          ${t.featured ? '<span class="tr-star">★</span>' : ''}
        </div>
        <div class="tr-desc">${t.tagline}</div>
      </div>
      <div class="tr-right">
        <span class="badge ${priceClass(t.price)}">${t.price}</span>
        <span class="tr-chevron">›</span>
      </div>`;

    row.addEventListener('click', () => openDetail(t.slug));
    list.appendChild(row);
  });
}

/* ----------------------------------------------------------
   Detail panel
   ---------------------------------------------------------- */
function openDetail(slug) {
  const tool = TOOLS.find(t => t.slug === slug);
  if (!tool) return;
  activeSlug = slug;

  document.querySelectorAll('.tool-row').forEach(r => r.classList.remove('active'));

  const panel   = document.getElementById('detailPanel');
  const overlay = document.getElementById('detailOverlay');
  const content = document.getElementById('detailContent');

  const related = TOOLS.filter(t =>
    t.slug !== slug &&
    (t.price === tool.price || t.tags.some(tag => tool.tags.includes(tag)))
  ).slice(0, 4);

  const descHtml = tool.description
    ? tool.description.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('')
    : `<p>${tool.tagline}</p>`;

  const tagHtml  = (tool.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
  const pickHtml = (tool.top_pick_for || []).map(p => `<span class="pick">${p}</span>`).join('');
  const relHtml  = related.map(r => `
    <div class="rel-card" onclick="openDetail('${r.slug}')">
      <span class="rel-ico">${r.emoji}</span>
      <div>
        <div class="rel-name">${r.name}</div>
        <div class="rel-price">${r.price}</div>
      </div>
    </div>`).join('');

  const fpClass  = fpColorClass(tool.false_pos);
  const accClass = tool.accuracy >= 95 ? 'ps-green' : tool.accuracy >= 85 ? 'ps-accent' : 'ps-orange';

  content.innerHTML = `
    <div class="pnl-hdr">
      <span class="pnl-crumb">AI Detection Tools</span>
      <button class="pnl-close" onclick="closeDetail()" aria-label="Close">✕</button>
    </div>

    <div class="pnl-hero">
      <div class="pnl-hero-row">
        <div class="pnl-ico">
          <img src="${faviconUrl(tool.website)}" alt="${tool.name}"
               onerror="this.style.display='none';this.parentElement.textContent='${tool.emoji}'" />
        </div>
        <div class="pnl-titles">
          <div class="pnl-name">${tool.name}</div>
          <div class="pnl-sub">${tool.tagline}</div>
        </div>
      </div>

      <div class="pnl-stats">
        <div class="pnl-stat">
          <div class="ps-lbl">Accuracy</div>
          <div class="ps-val ${accClass}">${tool.accuracy != null ? tool.accuracy + '%' : '—'}</div>
        </div>
        <div class="pnl-stat">
          <div class="ps-lbl">False Pos.</div>
          <div class="ps-val ${fpClass}">${tool.false_pos || '—'}</div>
        </div>
        <div class="pnl-stat">
          <div class="ps-lbl">Signup</div>
          <div class="ps-val ps-gray">${tool.signup ? 'Required' : 'Not needed'}</div>
        </div>
      </div>

      <a class="pnl-visit" href="${tool.website}" target="_blank" rel="noopener">
        Visit ${tool.name} ↗
      </a>
    </div>

    <div class="pnl-body">
      <div class="pnl-sec">
        <div class="pnl-sec-lbl">About</div>
        <div class="pnl-desc">${descHtml}</div>
      </div>

      ${tagHtml ? `<div class="pnl-sec">
        <div class="pnl-sec-lbl">Tags</div>
        <div class="tag-row">${tagHtml}</div>
      </div>` : ''}

      ${pickHtml ? `<div class="pnl-sec">
        <div class="pnl-sec-lbl">Top pick for</div>
        <div class="picks-row">${pickHtml}</div>
      </div>` : ''}

      <div class="pnl-sec">
        <div class="pnl-sec-lbl">Details</div>
        <div class="meta-tbl">
          <div class="meta-row"><span class="meta-k">Pricing</span><span class="meta-v">${tool.price}</span></div>
          <div class="meta-row"><span class="meta-k">Category</span><span class="meta-v">${tool.category || 'AI Detection'}</span></div>
          <div class="meta-row"><span class="meta-k">Date added</span><span class="meta-v">${tool.date || '—'}</span></div>
          <div class="meta-row"><span class="meta-k">Website</span>
            <span class="meta-v"><a href="${tool.website}" target="_blank" rel="noopener">${tool.website.replace(/^https?:\/\//, '')}</a></span>
          </div>
        </div>
      </div>

      ${relHtml ? `<div class="pnl-sec">
        <div class="pnl-sec-lbl">Related tools</div>
        <div class="rel-grid">${relHtml}</div>
      </div>` : ''}

      <div class="pnl-sec">
        <div class="pnl-links">
          <a href="${tool.website}" target="_blank" rel="noopener">Official website ↗</a>
          <a href="#" onclick="showPage('submit');closeDetail();return false;">Submit correction</a>
        </div>
      </div>
    </div>`;

  overlay.classList.add('open');
  panel.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDetail() {
  document.getElementById('detailPanel').classList.remove('open');
  document.getElementById('detailOverlay').classList.remove('open');
  document.body.style.overflow = '';
  activeSlug = null;
  document.querySelectorAll('.tool-row').forEach(r => r.classList.remove('active'));
}

/* ----------------------------------------------------------
   Filter + sort
   ---------------------------------------------------------- */
function setFilter(el, val) {
  activeFilter = val;
  document.querySelectorAll('.sb-link').forEach(b => b.classList.remove('on'));
  el.classList.add('on');
  applyFilterSort();
}

function onSearch(e) {
  filterByQuery(e.target.value.trim().toLowerCase());
}

function filterByQuery(q) {
  let base = [...TOOLS];

  if (activeFilter === 'featured') {
    base = base.filter(t => t.featured);
  } else if (activeFilter !== 'all') {
    base = base.filter(t =>
      t.price.toLowerCase() === activeFilter ||
      (t.tags && t.tags.includes(activeFilter))
    );
  }

  if (q) {
    base = base.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.tagline.toLowerCase().includes(q) ||
      (t.tags && t.tags.some(tag => tag.includes(q)))
    );
  }

  filtered = sortTools(base, activeSort);
  renderList();
}

function applyFilterSort() {
  const q = (document.getElementById('searchInput')?.value || '').trim().toLowerCase();
  filterByQuery(q);
}

function onSort(e) {
  activeSort = e.target.value;
  applyFilterSort();
}

function sortTools(list, by) {
  if (by === 'accuracy') return [...list].sort((a, b) => (b.accuracy || 0) - (a.accuracy || 0));
  if (by === 'name')     return [...list].sort((a, b) => a.name.localeCompare(b.name));
  return [...list].sort((a, b) => (a.rank || 99) - (b.rank || 99));
}

function resetFilter() {
  activeFilter = 'all';
  document.querySelectorAll('.sb-link').forEach((b, i) => {
    b.classList.toggle('on', i === 0);
  });
  const s = document.getElementById('searchInput');
  if (s) s.value = '';
  filtered = [...TOOLS];
  renderList();
}

/* ----------------------------------------------------------
   Submit form
   ---------------------------------------------------------- */
function handleSubmit(e) {
  e.preventDefault();
  const name     = document.getElementById('f-name')?.value.trim();
  const url      = document.getElementById('f-url')?.value.trim();
  const category = document.getElementById('f-category')?.value;
  const price    = document.getElementById('f-price')?.value;
  const desc     = document.getElementById('f-desc')?.value.trim();

  if (!name || !url || !category || !price || !desc) {
    showToast('Please fill in all required fields.');
    return;
  }

  const title = `[Tool Submission] ${name}`;
  const body  =
`## Tool Submission

**Tool Name:** ${name}
**Website:** ${url}
**Category:** ${category}
**Pricing:** ${price}

**Description:**
${desc}

---
*Submitted via AIToolsList*`;

  const ghUrl = 'https://github.com/zoep79211-tech/awesome-ai-detection-tools/issues/new'
    + '?title=' + encodeURIComponent(title)
    + '&body='  + encodeURIComponent(body)
    + '&labels=' + encodeURIComponent('tool-submission');

  window.open(ghUrl, '_blank', 'noopener');

  document.getElementById('formCard').innerHTML = `
    <div class="success-box">
      <div class="success-ico">✓</div>
      <div class="success-title">GitHub opened!</div>
      <div class="success-desc">
        A new issue for <strong>${name}</strong> has been pre-filled on GitHub.
        Sign in and click <strong>Submit new issue</strong> to complete your submission.
      </div>
      <button class="btn btn-primary" onclick="showPage('home')">Back to Directory →</button>
    </div>`;
}

/* ----------------------------------------------------------
   Page router
   ---------------------------------------------------------- */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('on'));
  const page = document.getElementById('page-' + id);
  if (page) page.classList.add('on');
  document.querySelectorAll('.hdr-nav-item').forEach(b => {
    b.classList.toggle('on', b.dataset.page === id);
  });
  window.scrollTo(0, 0);
  if (id === 'home') renderList();
}

/* ----------------------------------------------------------
   Toast
   ---------------------------------------------------------- */
function showToast(msg, duration = 3000) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

/* ----------------------------------------------------------
   Helpers
   ---------------------------------------------------------- */
function faviconUrl(website) {
  try {
    const domain = new URL(website).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch { return ''; }
}

function priceClass(p) {
  return { Free: 'badge-free', Freemium: 'badge-freemium', Paid: 'badge-paid', Enterprise: 'badge-enterprise' }[p] || 'badge-free';
}

function fpColorClass(fp) {
  if (!fp || fp === 'Unknown') return 'ps-gray';
  if (fp === 'Very Low' || fp === 'Low') return 'ps-green';
  if (fp === 'Medium') return 'ps-accent';
  return 'ps-orange';
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/, '');
}
