// ============================================================
//  DATA
// ============================================================

const pythonData = [
    { name: "len()", description: "Returns the number of items in an object.", example: "len([1,2,3])", output: "3" },
    { name: "sorted()", description: "Returns a sorted list.", example: "sorted([5,2,1])", output: "[1,2,5]" },
    { name: "enumerate()", description: "Adds a counter to an iterable.", example: "list(enumerate(['a','b']))", output: "[(0,'a'),(1,'b')]" },
    { name: "zip()", description: "Combines iterables.", example: "list(zip([1,2],[3,4]))", output: "[(1,3),(2,4)]" },
    { name: "map()", description: "Applies a function to every item.", example: "list(map(lambda x:x*2,[1,2,3]))", output: "[2,4,6]" },
    { name: "filter()", description: "Filters elements satisfying a condition.", example: "list(filter(lambda x:x>2,[1,2,3,4]))", output: "[3,4]" },
    { name: "range()", description: "Generates a sequence of numbers.", example: "list(range(5))", output: "[0,1,2,3,4]" },
    { name: "max()", description: "Returns maximum value.", example: "max([1,7,3])", output: "7" },
    { name: "min()", description: "Returns minimum value.", example: "min([1,7,3])", output: "1" },
    { name: "sum()", description: "Returns sum of elements.", example: "sum([1,2,3])", output: "6" },
    { name: "abs()", description: "Returns absolute value.", example: "abs(-10)", output: "10" },
    { name: "type()", description: "Returns object type.", example: "type(10)", output: "<class 'int'>" },
    { name: "list()", description: "Creates a list.", example: "list('abc')", output: "['a','b','c']" },
    { name: "tuple()", description: "Creates a tuple.", example: "tuple([1,2,3])", output: "(1,2,3)" },
    { name: "set()", description: "Creates a set.", example: "set([1,1,2,3])", output: "{1,2,3}" },
    { name: "dict()", description: "Creates a dictionary.", example: "dict(a=1,b=2)", output: "{'a':1,'b':2}" },
    { name: "reversed()", description: "Returns reverse iterator.", example: "list(reversed([1,2,3]))", output: "[3,2,1]" },
    { name: "any()", description: "Returns True if any element is true.", example: "any([False,True])", output: "True" },
    { name: "all()", description: "Returns True if all elements are true.", example: "all([True,True])", output: "True" },
    { name: "pow()", description: "Returns power.", example: "pow(2,3)", output: "8" }
];

const javaData = [
    { name: "NullPointerException", description: "Occurs when accessing a null object.", solution: "Initialize the object before using it." },
    { name: "ArrayIndexOutOfBoundsException", description: "Occurs when array index exceeds size.", solution: "Use valid indexes." },
    { name: "NumberFormatException", description: "Occurs when converting invalid strings to numbers.", solution: "Validate input before parsing." },
    { name: "ArithmeticException", description: "Occurs during illegal arithmetic operations.", solution: "Check divisors before division." },
    { name: "StringBuilder", description: "Used for mutable strings.", solution: "Preferred over String for repeated modifications." },
    { name: "ArrayList", description: "Dynamic array implementation.", solution: "Used when size changes frequently." },
    { name: "HashMap", description: "Stores key-value pairs.", solution: "Fast retrieval using keys." },
    { name: "Inheritance", description: "Acquiring properties from parent class.", solution: "Promotes code reusability." },
    { name: "Polymorphism", description: "One interface, many forms.", solution: "Improves flexibility." },
    { name: "Encapsulation", description: "Binding data and methods together.", solution: "Provides data hiding." }
];

const sqlData = [
    { name: "JOIN", query: "SELECT * FROM Employee JOIN Department ON Employee.id = Department.id;", description: "Combines rows from two tables." },
    { name: "LEFT JOIN", query: "SELECT * FROM Employee LEFT JOIN Department ON Employee.id = Department.id;", description: "Returns all rows from left table." },
    { name: "RIGHT JOIN", query: "SELECT * FROM Employee RIGHT JOIN Department ON Employee.id = Department.id;", description: "Returns all rows from right table." },
    { name: "GROUP BY", query: "SELECT department,COUNT(*) FROM Employee GROUP BY department;", description: "Groups rows." },
    { name: "HAVING", query: "SELECT department,COUNT(*) FROM Employee GROUP BY department HAVING COUNT(*)>2;", description: "Filters groups." },
    { name: "ORDER BY", query: "SELECT * FROM Employee ORDER BY salary DESC;", description: "Sorts rows." },
    { name: "COUNT", query: "SELECT COUNT(*) FROM Employee;", description: "Counts rows." },
    { name: "AVG", query: "SELECT AVG(salary) FROM Employee;", description: "Calculates average value." },
    { name: "SUM", query: "SELECT SUM(salary) FROM Employee;", description: "Calculates total sum." },
    { name: "LIMIT", query: "SELECT * FROM Employee LIMIT 5;", description: "Restricts rows returned." }
];

const gitData = [
    { name: "git clone", syntax: "git clone repository_url", purpose: "Copies a repository." },
    { name: "git init", syntax: "git init", purpose: "Creates a new repository." },
    { name: "git add", syntax: "git add .", purpose: "Stages files." },
    { name: "git commit", syntax: "git commit -m 'message'", purpose: "Saves changes." },
    { name: "git push", syntax: "git push origin main", purpose: "Uploads code to GitHub." },
    { name: "git pull", syntax: "git pull origin main", purpose: "Downloads latest changes." },
    { name: "git branch", syntax: "git branch", purpose: "Lists branches." },
    { name: "git merge", syntax: "git merge branchName", purpose: "Combines branches." },
    { name: "git checkout", syntax: "git checkout branchName", purpose: "Switches branches." },
    { name: "git stash", syntax: "git stash", purpose: "Temporarily saves changes." }
];

// ============================================================
//  RENDER ENGINE
// ============================================================

const contentEl = document.getElementById('content');
const searchBox = document.getElementById('searchBox');
const clearBtn = document.getElementById('clearBtn');

function renderCards(items, renderFn) {
    if (!items || items.length === 0) {
        contentEl.innerHTML = `
            <div class="no-results">
                <span class="big-emoji">🔍</span>
                <h3>No results found</h3>
                <p style="color:var(--text-muted);">Try adjusting your search or select a category.</p>
            </div>
        `;
        return;
    }
    let html = `<div class="content-grid">`;
    items.forEach(item => {
        html += renderFn(item);
    });
    html += `</div>`;
    contentEl.innerHTML = html;
}

// ---------- RENDERERS ----------
function renderPython(item) {
    return `
        <div class="content-card">
            <div class="card-header">
                <span class="badge">🐍</span>
                <h3>${item.name}</h3>
                <span class="lang-tag">Python</span>
            </div>
            <p>${item.description}</p>
            <div class="code-block">
                <span class="label">Example</span>
                <code>${item.example}</code>
            </div>
            <div class="output-block">
                <strong>▶ Output:</strong> ${item.output}
            </div>
        </div>
    `;
}

function renderJava(item) {
    return `
        <div class="content-card">
            <div class="card-header">
                <span class="badge">☕</span>
                <h3>${item.name}</h3>
                <span class="lang-tag">Java</span>
            </div>
            <p>${item.description}</p>
            <div class="solution-block">
                <strong>💡 Solution:</strong> ${item.solution}
            </div>
        </div>
    `;
}

function renderSQL(item) {
    return `
        <div class="content-card">
            <div class="card-header">
                <span class="badge">🗄</span>
                <h3>${item.name}</h3>
                <span class="lang-tag">SQL</span>
            </div>
            <p>${item.description}</p>
            <div class="code-block">
                <span class="label">Query</span>
                <code>${item.query}</code>
            </div>
        </div>
    `;
}

function renderGit(item) {
    return `
        <div class="content-card">
            <div class="card-header">
                <span class="badge">🔥</span>
                <h3>${item.name}</h3>
                <span class="lang-tag">Git</span>
            </div>
            <p>${item.purpose}</p>
            <div class="code-block">
                <span class="label">Syntax</span>
                <code>${item.syntax}</code>
            </div>
        </div>
    `;
}

const RENDER_MAP = {
    python: renderPython,
    java: renderJava,
    sql: renderSQL,
    git: renderGit
};

const DATA_MAP = {
    python: pythonData,
    java: javaData,
    sql: sqlData,
    git: gitData
};

// ---------- SHOW CATEGORY ----------
function showCategory(cat) {
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.cat === cat);
    });
    const data = DATA_MAP[cat];
    const renderFn = RENDER_MAP[cat];
    renderCards(data, renderFn);
    searchBox.value = '';
    clearBtn.classList.remove('visible');
}

// ---------- SEARCH ----------
function performSearch(query) {
    const q = query.toLowerCase().trim();
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));

    if (!q) {
        contentEl.innerHTML = `
            <div class="welcome-card">
                <span class="emoji-big">🧑‍💻</span>
                <h2>Welcome to DevPrep Hub</h2>
                <p>Select a category above or use the search bar to explore Python, Java, SQL, and Git concepts.</p>
                <div class="tags">
                    <span>🐍 20+ Python functions</span>
                    <span>☕ 10 Java concepts</span>
                    <span>🗄 10 SQL queries</span>
                    <span>🔥 10 Git commands</span>
                </div>
            </div>
        `;
        clearBtn.classList.remove('visible');
        return;
    }

    const results = [];

    pythonData.forEach(item => {
        if (item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)) {
            results.push({ ...item, render: renderPython });
        }
    });
    javaData.forEach(item => {
        if (item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)) {
            results.push({ ...item, render: renderJava });
        }
    });
    sqlData.forEach(item => {
        if (item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)) {
            results.push({ ...item, render: renderSQL });
        }
    });
    gitData.forEach(item => {
        if (item.name.toLowerCase().includes(q) || item.purpose.toLowerCase().includes(q)) {
            results.push({ ...item, render: renderGit });
        }
    });

    if (results.length === 0) {
        contentEl.innerHTML = `
            <div class="no-results">
                <span class="big-emoji">🔍</span>
                <h3>No matches for “${query}”</h3>
                <p style="color:var(--text-muted);">Try a different keyword or browse a category above.</p>
            </div>
        `;
        return;
    }

    let html = `
        <div class="search-results-header">
            <h2>🔍 Search results</h2>
            <span class="count">${results.length}</span>
        </div>
        <div class="content-grid">
    `;
    results.forEach(item => {
        html += item.render(item);
    });
    html += `</div>`;
    contentEl.innerHTML = html;
}

// ---------- EVENT BINDINGS ----------
searchBox.addEventListener('input', function() {
    const val = this.value;
    if (val.length > 0) {
        clearBtn.classList.add('visible');
    } else {
        clearBtn.classList.remove('visible');
    }
    performSearch(val);
});

clearBtn.addEventListener('click', function() {
    searchBox.value = '';
    clearBtn.classList.remove('visible');
    performSearch('');
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
});

// expose showCategory globally
window.showCategory = showCategory;

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const tag = document.activeElement?.tagName;
        if (tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'SELECT') {
            e.preventDefault();
            searchBox.focus();
        }
    }
    if (e.key === 'Escape' && document.activeElement === searchBox) {
        searchBox.blur();
    }
});