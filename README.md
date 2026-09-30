# 🎓 Digital College ID Card Generator

A comprehensive React web application for generating and managing student digital identity cards — built as a training project covering core React concepts.

![React](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-cyan) ![EmailJS](https://img.shields.io/badge/EmailJS-Real%20Email-green)

---

## 🚀 Features

- **Admin Portal** — Approve enrollments, generate IDs, bulk upload up to 100 students, email log
- **Student Portal** — Enroll, track approval status, download ID card as PNG or PDF
- **3D Flip Card** — Front and back sides with real CSS `rotateY` animation
- **Pixel-perfect ID card** — Matches the real Vignan's physical ID card design
- **Real Email** — Sends actual emails via EmailJS when an ID is generated
- **Protected Routes** — Role-based access (Admin / Student)

---

## 🧠 React Concepts Covered

| Concept | Where Used |
|---|---|
| Controlled Forms | All input fields — `useState` + `onChange` |
| Props | `IDCardPreview`, `RoleLogin`, `ControlledInput` |
| useReducer | Global state in `AppContext` (7 action types) |
| Context API | `AppProvider` wraps the entire app |
| Dynamic Rendering | Student dashboard — 3 views based on ID status |
| Protected Routes | `ProtectedRoute` component in `App.jsx` |
| forwardRef | `IDCardPreview` and `IDCardBack` for html2canvas |

---

## 🛠️ Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **React Router DOM 6**
- **EmailJS** — real browser-based email
- **html2canvas** + **jsPDF** — ID card export

---

## ⚙️ Setup & Run

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/college-id-generator.git
cd college-id-generator

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
http://localhost:5173
```

---

## 🔑 Demo Credentials

| Role | Username | Password |
|---|---|---|
| Admin | `admin` | `admin123` |
| Student | `aisha.sharma@university.edu` | `student123` |
| Student | `rahul.verma@university.edu` | `student123` |

---

## ✉️ Email Setup (EmailJS)

To enable real email sending:

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create a Gmail service and email template
3. Open `src/context/AppContext.jsx` and replace:

```js
const EMAILJS_SERVICE_ID  = 'your_service_id'
const EMAILJS_TEMPLATE_ID = 'your_template_id'
const EMAILJS_PUBLIC_KEY  = 'your_public_key'
```

---

## 📁 Project Structure

```
src/
├── context/
│   └── AppContext.jsx       # Global state (useReducer + Context)
├── components/
│   ├── IDCardPreview.jsx    # Front side of ID card (forwardRef)
│   ├── IDCardBack.jsx       # Back side of ID card (forwardRef)
│   ├── FlipCard3D.jsx       # 3D CSS flip animation wrapper
│   ├── ControlledInput.jsx  # Reusable form input
│   ├── RoleLogin.jsx        # Parameterised login form
│   └── Toast.jsx            # Global notification
├── pages/
│   ├── Landing.jsx          # / — hero + role selection
│   ├── StudentDashboard.jsx # /student
│   └── AdminDashboard.jsx   # /admin
├── App.jsx                  # Router + ProtectedRoute
└── main.jsx                 # Entry point
```

---

## 👩‍💻 Built By

**Javangula Charitha Sri Satya**
Vignan's Foundation for Science, Technology & Research
React Training Project — 2024
