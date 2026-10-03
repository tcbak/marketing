# Faculty of Computing - Degree Discovery Advisor Quiz

An interactive, responsive single-screen web application designed for prospective students to discover their ideal degree program in the **Faculty of Computing**.

## 🎓 Featured Degree Programs
- **AI** – BSc (Hons) in Artificial Intelligence
- **DS** – BSc (Hons) in Data Science
- **CS** – BSc (Hons) in Computer Science
- **SE** – BSc (Hons) in Software Engineering
- **MIS** – BSc (Hons) in Management Information Systems
- **Security** – BSc (Hons) in Cyber Security & Forensics

## ✨ Key Features
- **3-Question Rapid Assessment**: Randomly selects 3 distinct questions per session from a comprehensive question pool.
- **Zero-Scroll Viewport Layout**: Modern, compact layout designed to fit fully inside the display without requiring vertical scrolling.
- **Intelligent Affinity Matching**: Computes weighted scores across all 6 computing disciplines to identify primary and secondary degree matches.
- **Visual Affinity Breakdown**: Provides a comparative percentage affinity chart across all 6 computing programs.
- **Degree Profile Explorer**: Built-in modal to browse curriculum modules and career paths for all degrees.
- **Celebratory Confetti & Micro-Animations**: Engaging, polished user experience.

## 🚀 Running Locally
You can run this application using any local static file server.

### Option 1: Python
```bash
python -m http.server 8080
```
Then open [http://localhost:8080](http://localhost:8080) in your browser.

### Option 2: Node.js (npx serve)
```bash
npx serve .
```

## 🛠️ Tech Stack
- **HTML5**: Semantic, accessible markup.
- **Vanilla CSS**: Modern glassmorphic dark theme, custom responsive grid, CSS variables.
- **Vanilla JavaScript (ES Modules)**: State management, dynamic question pool sampling, affinity scoring algorithm.
