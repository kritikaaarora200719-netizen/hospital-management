# MediCare Hospital - B.Tech Academic Project

A complete college-level hospital website built with **React + Vite + JavaScript + JSX + Plain CSS**. It demonstrates HTML, CSS, JavaScript and React concepts required for a B.Tech viva.

## How to Run

```bash
npm install
npm run dev      # starts the dev server
npm run build    # production build
npm run lint     # eslint check
```

The dev server runs automatically in this environment. Open the printed local URL in your browser.

---

## Folder Structure

```
medicare-hospital/
├── index.html                  # HTML entry (title, fonts, root div)
├── package.json                # dependencies + scripts
├── vite.config.js              # Vite + React plugin config
├── eslint.config.js            # ESLint rules
└── src/
    ├── main.jsx                # React entry - wraps app in BrowserRouter
    ├── App.jsx                 # All routes (public pages + portals)
    ├── index.css               # Global styles, color system, forms, tables
    ├── App.css                 # Button, layout, dashboard shared styles
    │
    ├── data/
    │   ├── departments.js      # Array of 10 department objects
    │   ├── doctors.js          # Array of 10 doctor objects
    │   ├── services.js         # Array of 8 service objects
    │   ├── testimonials.js     # Array of 4 patient testimonials
    │   ├── medicalRecords.js   # Dummy medical records for patient portal
    │   ├── storage.js          # localStorage helpers (JSON.stringify/parse)
    │   └── auth.jsx            # Auth context + useAuth hook (session)
    │
    ├── components/             # Reusable components
    │   ├── Navbar.jsx + .css   # Responsive navbar with mobile menu
    │   ├── Footer.jsx + .css   # Site footer
    │   ├── Button.jsx          # Reusable button (solid/outline/link)
    │   ├── Sidebar.jsx + .css  # Reusable portal sidebar
    │   ├── DoctorCard.jsx + .css
    │   ├── Cards.jsx + .css    # DepartmentCard + ServiceCard
    │   └── AppointmentForm.jsx + .css  # Controlled form + validation
    │
    ├── pages/                  # Public pages
    │   ├── Home.jsx + .css     # Hero, stats, departments, services, doctors, testimonials, CTA
    │   ├── About.jsx           # Story, mission, vision, values
    │   ├── Departments.jsx     # Departments + Services pages
    │   ├── Doctors.jsx         # Search + filter doctors, profile modal
    │   ├── Appointment.jsx     # Book appointment form
    │   ├── Contact.jsx         # Contact info + form
    │   ├── Login.jsx           # Role-based login (Patient/Doctor/Receptionist)
    │   └── Pages.css           # Shared inner-page styles
    │
    └── portals/                # Role-based dashboards
        ├── PortalPages.css     # Shared portal styles
        ├── patient/
        │   ├── PatientPortal.jsx       # Layout + routes
        │   ├── PatientDashboard.jsx
        │   ├── PatientProfile.jsx
        │   ├── PatientAppointments.jsx
        │   ├── PatientDoctors.jsx
        │   └── PatientRecords.jsx
        ├── doctor/
        │   ├── DoctorPortal.jsx
        │   ├── DoctorDashboard.jsx
        │   ├── DoctorAppointments.jsx
        │   ├── DoctorPatients.jsx
        │   ├── DoctorSchedule.jsx
        │   └── DoctorProfile.jsx
        └── receptionist/
            ├── ReceptionistPortal.jsx
            ├── ReceptionistDashboard.jsx
            ├── RegisterPatient.jsx
            ├── ReceptionistPatients.jsx
            ├── ReceptionistAppointments.jsx
            └── SearchPatient.jsx
```

---

## Explanation of Each Major File

| File | Purpose |
|------|---------|
| `main.jsx` | Mounts the React app and wraps it in `BrowserRouter` for routing. |
| `App.jsx` | Defines all routes - public pages share Navbar/Footer; portals have their own sidebar layout. |
| `data/*.js` | Static data arrays (departments, doctors, services, testimonials, records) rendered with `map()`. |
| `data/storage.js` | Helpers that wrap `localStorage` with `JSON.stringify()` / `JSON.parse()`. |
| `data/auth.jsx` | React Context that stores the login session in localStorage; provides `useAuth()`. |
| `components/Navbar` | Sticky responsive navbar with a hamburger menu for mobile. |
| `components/Footer` | Footer with quick links, departments and contact info. |
| `components/Button` | Reusable button supporting link, solid and outline variants. |
| `components/Sidebar` | Reusable sidebar used by all three portals. |
| `components/DoctorCard` | Reusable card showing a doctor's photo and details. |
| `components/Cards` | `DepartmentCard` and `ServiceCard` reusable cards. |
| `components/AppointmentForm` | Controlled form with validation; saves to localStorage. |
| `pages/Home` | Full homepage with hero, emergency banner, stats, why-choose, departments, services, featured doctors, testimonials and CTA. |
| `pages/Login` | Role selector + email/password; redirects to the correct portal. |
| `portals/patient/*` | Patient dashboard, profile, appointments (cancel), doctors, medical records. |
| `portals/doctor/*` | Doctor dashboard, appointments (update status), patients, schedule, profile. |
| `portals/receptionist/*` | Reception dashboard, register patient, patients list, appointments, search. |

---

## HTML Concepts Used

- Semantic elements: `header`, `nav`, `main`, `section`, `article`, `footer`, `address`, `aside`
- Forms: `form`, `label`, `input` (text, email, tel, date, time, password), `select`, `option`, `textarea`, `button`
- Tables: `table`, `thead`, `tbody`, `tr`, `th`, `td` (appointments, patients, records, schedule)
- Lists: `ul`, `li` (navbar, footer links, doctor details, testimonials)
- Links and images: `a`, `img` with `alt` attributes

## CSS Concepts Used

- Selectors: element, class, id, descendant, pseudo-class (`:hover`, `:focus`)
- Box model: margin, padding, border, border-radius
- Flexbox: navbar, card layouts, form rows, button groups
- CSS Grid: department/service/testimonial grids, footer, dashboard stat cards
- Positioning: sticky navbar, fixed modal overlay, absolute close button
- Transitions: hover effects on cards, buttons, links
- Media queries: responsive breakpoints at 880px, 768px, 600px, 480px
- Responsive design: hamburger menu, stacking grids, horizontal-scroll tables
- Custom properties (CSS variables): full color system with primary, secondary, accent, success, warning, error and neutral ramps

## JavaScript Concepts Used

- `let` and `const` declarations
- Functions and arrow functions
- Arrays and objects (departments, doctors, services data)
- Conditions (`if`, ternary `? :`)
- Array methods: `map()`, `filter()`, `find()`, `includes()`, `forEach()`
- Events: `onClick`, `onChange`, `onSubmit`
- Form validation: regex email/phone checks, required-field checks
- `JSON.stringify()` and `JSON.parse()` via the storage helpers
- `localStorage.getItem()` / `setItem()` for appointments, patients, session

## React Concepts Used

- Components (functional components throughout)
- Props (passed to DoctorCard, DepartmentCard, ServiceCard, Button, Sidebar, AppointmentForm)
- `useState` (forms, search, filters, modals, menus, lists)
- `useEffect` (loading from localStorage on mount)
- `useNavigate`, `useLocation` (React Router navigation + passing state)
- Conditional rendering (modals, empty states, role guards, success messages)
- List rendering with `map()` (departments, doctors, services, testimonials, appointments, patients)
- `filter()` for search and department filtering
- `find()` for matching a doctor by name
- Controlled forms (every input bound to state via `value` + `onChange`)
- Form validation with error state
- Reusable components (Button, Navbar, Footer, Sidebar, DoctorCard, cards, AppointmentForm)
- React Router (`Routes`, `Route`, `NavLink`, `Link`, nested routes for portals)
- Context API (`AuthProvider`, `useAuth`) for session management

---

## 20 Likely Viva Questions with Simple Answers

**1. What is this project about?**
It is a hospital website called MediCare Hospital built with React and Vite. It has public pages and role-based portals for patients, doctors and receptionists.

**2. Why did you use React?**
React lets me build reusable components and manage UI state easily, which is ideal for a multi-page site with forms and dashboards.

**3. What is Vite?**
Vite is a build tool that starts a fast dev server and bundles the project for production. It supports hot module replacement.

**4. What is a component in React?**
A component is a reusable JavaScript function that returns JSX (UI). Example: `DoctorCard`, `Navbar`.

**5. What is JSX?**
JSX is a syntax that looks like HTML inside JavaScript. It lets me write UI elements in React components.

**6. What is useState?**
It is a React hook that lets a component remember data, like the value typed in a search box or a selected department.

**7. What is useEffect?**
It is a hook that runs code after the component renders, like loading saved appointments from localStorage when the page opens.

**8. What is props?**
Props are values passed from a parent component to a child component, like passing a doctor object to `DoctorCard`.

**9. How did you implement doctor search?**
I stored a search term in state and used `filter()` to show only doctors whose name or specialization includes the typed text.

**10. How did you implement department filtering?**
I kept the selected department in state and used `filter()` to show only doctors whose department matches the selection.

**11. How does the appointment form work?**
Every input is a controlled input bound to state. On submit I validate the fields, and if valid I save the appointment to localStorage.

**12. What is localStorage and why did you use it?**
localStorage stores data in the browser as key-value strings. I used it to save appointments, registered patients and the login session so data persists across reloads.

**13. Why do you use JSON.stringify and JSON.parse?**
localStorage only stores strings. I use `JSON.stringify` to save objects and `JSON.parse` to read them back.

**14. How does login work?**
The user picks a role and enters any email/password. I save the session in localStorage and redirect to the matching portal. It is not real authentication - it is for academic demonstration.

**15. What is React Router and why did you use it?**
React Router lets me navigate between pages without reloading the browser. I used `Routes`, `Route`, `Link` and `NavLink`.

**16. What is conditional rendering?**
Showing UI only when a condition is true. Example: the doctor profile modal only shows when `selectedDoctor` is not null.

**17. How did you make the site responsive?**
I used CSS Flexbox and Grid for layout and media queries to change the layout for tablet and mobile, including a hamburger menu for the navbar.

**18. What CSS layout techniques did you use?**
I used Flexbox for the navbar and form rows, and CSS Grid for card grids, the footer and dashboard stat cards.

**19. What is the difference between map, filter and find?**
`map()` transforms each item in an array, `filter()` returns items matching a condition, and `find()` returns the first matching item.

**20. How did you reuse components?**
I created reusable components like `Button`, `DoctorCard`, `DepartmentCard`, `Sidebar` and `AppointmentForm` and used them in multiple pages and portals.

---

## Academic Note

This project is for B.Tech viva demonstration only. The login is not real authentication, medical records are dummy data, and all data is stored in the browser's localStorage (no backend or database).
