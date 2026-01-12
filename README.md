# 🖥️ Interactive Terminal Portfolio

> A **terminal-inspired developer portfolio** built with **React + Redux**, designed to feel like a real UNIX shell while showcasing projects, skills, and links through commands.

---

## ✨ What Makes This Project Special

Unlike traditional portfolios with buttons and sections, this project:

* 🧠 Uses **command-based interaction** (like a real terminal)
* ⚡ Feels **developer-native** (keyboard-driven, no mouse required)
* 🧩 Separates **command execution** and **command rendering** cleanly
* 🎨 Mimics a **real shell experience** (cursor, history, clear, etc.)

This portfolio doesn’t *tell* that you’re a developer — it **shows it**.

---

## 🎥 Demo Preview (GIFs)

> *(Add your own GIFs/screenshots here)*

* Typing commands in terminal
  `![Typing Demo](./gifs/typing.gif)`

* Opening external links (GitHub, Resume)
  `![Action Commands](./gifs/actions.gif)`

* Viewing skills & projects
  `![Skills](./gifs/skills.gif)`

---

## 🏗️ Architecture Overview

```
User Keyboard
     ↓
TerminalInput (captures keystrokes)
     ↓
Redux Store (command, cursor, history)
     ↓
CommandHistory (loops past commands)
     ↓
CommandResult (renders output)
```

This separation is **intentional** and makes the system scalable.

---

## 🧠 Core Concepts

### 1️⃣ TerminalInput (The Brain)

Responsible for:

* Capturing **keyboard input**
* Handling cursor movement (← →)
* Editing text (Backspace, Delete)
* Submitting commands (Enter)
* Dispatching updates to Redux

💡 *This component never renders output — it only listens and dispatches.*

---

### 2️⃣ Redux State (Single Source of Truth)

```js
terminal: {
  currentCommand: "github",
  currentCursor: 6,
  commandHistory: [...]
}
```

Why Redux?

* Predictable terminal behavior
* Cursor position stays accurate
* Command history survives re-renders

---

### 3️⃣ CommandHistory (Terminal Memory)

* Iterates over previous commands
* For each command:

  * Shows prompt (`harshchouhan:$`)
  * Renders output via `CommandResult`

This mimics how **real terminals reprint output**.

---

### 4️⃣ CommandResult (Command Interpreter)

This is where **commands come alive**.

Supported commands:

| Command       | Description       |
| ------------- | ----------------- |
| `whoami`      | About me          |
| `stats`       | Developer stats   |
| `skills`      | Skill matrix      |
| `projects`    | Live projects     |
| `history`     | Command history   |
| `github`      | Opens GitHub      |
| `resume`      | Opens resume      |
| `linkedin`    | Opens LinkedIn    |
| `gfg`         | Opens GFG profile |
| `clear / cls` | Clears terminal   |

Example logic:

```js
if (actionCommands.includes(normalized)) {
  return (
    <>
      <p>Opening {normalized}...</p>
      <p>Command Executed</p>
    </>
  )
}
```

---

## 🌐 Action Commands (External Links)

Action commands are **side-effects**, not UI.

Handled in `TerminalInput`:

```js
actionCommand("github") → window.open(url)
```

Rendered in `CommandResult`:

```
Opening github...
Command Executed
```

This clean split avoids UI bugs and keeps logic pure.

---

## 📊 Skills Visualization

Animated progress bars rendered via `SkillMatrix`:

```
DSA     [█████████░] 90%
React   [████████░░] 80%
```

Why bars?

* Quick visual scan
* Recruiter-friendly
* Terminal-consistent

---

## 🚀 Projects Section

Each project includes:

* Name
* Short description
* Tech stack
* **Live website link**

This proves *execution*, not just ideas.

---

## 🎨 UI & UX Decisions

* 🟢 Monospace font → authenticity
* ⌨️ Keyboard-only → power-user feel
* 🟩 Green-on-black → classic terminal
* 🌀 Smooth scroll → natural flow

Every design choice reinforces the **terminal illusion**.

---

## 🧪 Edge Cases Handled

* Uppercase vs lowercase commands (`GitHub`, `GITHUB`)
* Empty enter press
* Cursor at bounds
* Clearing history
* Unknown commands

---

## 🔮 Future Enhancements

* `help` command
* Command autocomplete (Tab)
* Theme switching
* Fake filesystem (`ls`, `cd`)
* Command suggestions

---

## 🧑‍💻 Author

**Harsh Chouhan**
Full-Stack Developer | Terminal UI Enthusiast

* GitHub: [https://github.com/HarshCh0uhan](https://github.com/HarshCh0uhan)
* Portfolio: *(this project)*

---

## 🏁 Final Note

This portfolio is not just a website —

> **It’s an interface that speaks the language of developers.**

If a recruiter understands terminals, they’ll understand *you* instantly.

🚀
