A comprehensive CRUD AI prompt-sharing system utilizing a MongoDB database and implementing NextAuth authentication.

live link: https://promptly-pqim57oo1-kelvinmatheka-1.vercel.app/

![Screenshot from 2024-01-10 01-07-22](https://github.com/KelvinMatheka-1/ctrlsend-main-web/assets/110156045/d03b1045-05e9-4e87-957e-430319da6b9f)
![Screenshot from 2024-01-10 01-07-49](https://github.com/KelvinMatheka-1/ctrlsend-main-web/assets/110156045/05ddf7e2-9d54-4cb3-b83d-b40df0d11d20)
![Screenshot from 2024-01-10 01-08-10](https://github.com/KelvinMatheka-1/ctrlsend-main-web/assets/110156045/91ce5e71-fd65-46f7-bd1b-981c64b2150a)


⚙️ Tech Stack
Next.js
MongoDB
NextAuth
TailwindCSS
🔋 Features
👉 Modern Design with Glassmorphism Trend Style: A modern and visually appealing design, incorporating the glassmorphism trend style for a sleek and contemporary appearance.

👉 Discover and Share AI Prompts: Allow users to discover AI prompts shared by the community and create their own prompts to share with the world.

👉 Edit and Delete Created Prompts: Users have the ability to edit their created prompts at any time and delete them when needed.

👉 Profile Page: Each user gets a dedicated profile page showcasing all the prompts they've created, providing an overview of their contributions.

👉 View Other People's Profiles: Users can explore the profiles of other creators to view the prompts they've shared, fostering a sense of community.

👉 Copy to Clipboard: Implement a convenient "Copy to Clipboard" functionality for users to easily copy the AI prompts for their use.

👉 Search Prompts by Specific Tag: Allow users to search for prompts based on specific tags, making it easier to find prompts related to specific topics.

👉 Google Authentication using NextAuth: Enable secure Google authentication using NextAuth, ensuring a streamlined and trustworthy login experience.

👉 Responsive Website: Develop a fully responsive website to ensure optimal user experience across various devices, from desktops to smartphones

and many more, including code architecture and reusability

🤸 Quick Start
Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

Git
Node.js
npm (Node Package Manager)
Cloning the Repository

git clone https://github.com/adrianhajdin/project_next_13_ai_prompt_sharing.git
cd project_next_13_ai_prompt_sharing
Installation

Install the project dependencies using npm:

npm install
Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=
GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on these corresponding websites from Google Cloud Console, Cryptpool (for random Auth Secret), and MongoDB.

Running the Project

npm run dev
Open http://localhost:3000 in your browser to view the project.
