const extraStyles = document.createElement('link');
extraStyles.rel = 'stylesheet';
extraStyles.href = 'css/admin-extra.css';
document.head.append(extraStyles);
const memberStyles = document.createElement('link');
memberStyles.rel = 'stylesheet';
memberStyles.href = 'css/admin-members.css';
document.head.append(memberStyles);
const form = document.querySelector('#loginForm');
const login = document.querySelector('#login');
const dashboard = document.querySelector('#dashboard');
const error = document.querySelector('#error');
const title = document.querySelector('#pageTitle');
const crumb = document.querySelector('#crumb');
const titles = { overview: 'Good morning, Prodigy.', events: 'Events & sessions', members: 'Member directory', announcements: 'Announcements', locations: 'Campus locations' };
form.addEventListener('submit', event => { event.preventDefault(); if (document.querySelector('#username').value === 'Prodigy' && document.querySelector('#password').value === 'prodigy2083') { login.hidden = true; dashboard.hidden = false; } else error.textContent = 'Please check your username and password.'; });
function showView(name) { document.querySelectorAll('.view').forEach(view => view.classList.toggle('active-view', view.id === name)); document.querySelectorAll('aside a').forEach(link => link.classList.toggle('active', link.dataset.view === name)); title.textContent = titles[name]; crumb.textContent = `DASHBOARD / ${name.toUpperCase()}`; }
document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => showView(button.dataset.view)));
document.querySelector('#saveLocation').addEventListener('click', () => { document.querySelector('#saveLocation').textContent = 'Saved'; setTimeout(() => document.querySelector('#saveLocation').textContent = 'Save changes', 1500); });
document.querySelector('#logout').addEventListener('click', () => { dashboard.hidden = true; login.hidden = false; form.reset(); error.textContent = ''; });

const memberRows = document.querySelector('#memberRows');
const memberForm = document.querySelector('#memberForm');
const batchForm = document.querySelector('#batchForm');
const addRow = (name, role = 'Student member') => {
  const row = document.createElement('div');
  row.className = 'table-row';
  row.innerHTML = `<b></b><span></span><small>2083</small>`;
  row.querySelector('b').textContent = name;
  row.querySelector('span').textContent = role;
  memberRows.append(row);
};
document.querySelector('#addMember').addEventListener('click', () => { memberForm.hidden = !memberForm.hidden; batchForm.hidden = true; });
document.querySelector('#batchMember').addEventListener('click', () => { batchForm.hidden = !batchForm.hidden; memberForm.hidden = true; });
memberForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('#memberName').value.trim();
  if (name) addRow(name, document.querySelector('#memberRole').value);
  memberForm.reset(); memberForm.hidden = true;
});
document.querySelector('#saveBatch').addEventListener('click', () => {
  document.querySelector('#batchNames').value.split(/\r?\n/).map(name => name.trim()).filter(Boolean).forEach(name => addRow(name));
  document.querySelector('#batchNames').value = ''; batchForm.hidden = true;
});
