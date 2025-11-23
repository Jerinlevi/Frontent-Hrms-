
🚀 HRMS – Human Resource Management System

A full-stack Human Resource Management System built using React + Node.js + Express + SQLite.
This app allows organizations to manage employees, teams, assignments, authentication, and more.

⸻

📌 Features

🔐 Authentication
	•	Register organization and admin user
	•	Login using JWT
	•	Protected routes
	•	Role-based access (admin only features)

🧑‍🤝‍🧑 Employee Management
	•	Add employees
	•	View all employees
	•	Delete employees
	•	Each employee belongs to an organization

👥 Team Management
	•	Add teams
	•	View teams for the logged-in organization
	•	Assign employees to teams
	•	Unassign employees
	•	Many-to-many relationship using employee_team table

🏢 Organization
	•	Separate table for organizations
	•	Each user, employee, and team belongs to an organization
	•	Organization ID comes from JWT token after login

🧾 Action Logs (Optional)
	•	Every action (add employee, delete employee, assign team) can be logged in a logs table

⸻

🏗 Tech Stack

Frontend
	•	React
	•	React Router
	•	Context API (Auth)
	•	Axios

Backend
	•	Node.js
	•	Express
	•	SQLite with sqlite3
	•	JWT
	•	bcrypt

⸻

🗂 Database Structure

organistation

column	type	details
id	integer	PK, autoincrement
name	varchar	org name
created_at	timestamp	default current_timestamp

users

column	type	details
id	integer	PK
organistation_id	integer	FK → organistation
name	varchar	admin name
email	varchar	unique
password_hash	varchar	bcrypt

employees

column	type
id	integer
name	varchar
email	varchar
organistation_id	FK

teams

column	type
id	integer
name	varchar
organistation_id	FK

employee_team (many-to-many)

column	type
id	integer
employee_id	FK
team_id	FK
organistation_id	FK


⸻

🔄 API Endpoints

Auth

Method	Endpoint	Description
POST	/register	Register organization + admin
POST	/login	Login & get JWT token

Employees

Method	Endpoint	Description
GET	/employees	Get all employees
POST	/employees	Add employee
DELETE	/employees/:id	Delete employee

Teams

Method	Endpoint	Description
GET	/teams	Get all teams
POST	/teams	Add team

Assignments

Method	Endpoint	Description
POST	/assign	Assign employee to team
DELETE	/unassign	Remove employee from team


⸻

🔐 Protected Routes (Frontend)

Routes protected using AuthContext & JWT:

/home
/employees
/teams
/assign

If token is missing → user is redirected to /login.

⸻

▶️ Run Locally

1️⃣ Clone repo

git clone https://github.com/yourusername/hrms.git
cd hrms

2️⃣ Install backend deps

cd backend
npm install
npm start

3️⃣ Install frontend deps

cd ../frontend
npm install
npm run dev


⸻

🗃 Default Folder Structure

HRMS/
  backend/
    index.js
    hrms.db
  frontend/
    src/
      components/
      pages/
      context/
      App.jsx


⸻

🛠 Future Improvements
	•	Admin dashboard
	•	Employee role access
	•	Payroll module
	•	Attendance module
	•	Email notifications
	•	Detailed logs view

⸻

❤️ Thanks
