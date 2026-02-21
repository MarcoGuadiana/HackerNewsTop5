Top 5 articles on hackernews displayed and updated every monday. 

Backend: Used python and flask to send get requests to the hacker news api, first /topstories, second /item {title},{link}.
I validated the response before moving further in the process. Last step was to link front end and backend.

How to run:

Step 1: Start the Backend (Flask)
Open your terminal, navigate to the folder containing the Python code, and run these commands:

Create a Virtual Environment (Highly recommended):

Windows: python -m venv venv then venv\Scripts\activate

Mac/Linux: python3 -m venv venv then source venv/bin/activate

Install Dependencies:

Bash
pip install flask flask-cors requests
Run the Server:

Bash
python your_filename.py
Check that it says: Running on http://127.0.0.1:5000.

Step 2: Start the Frontend (React)
Open a second terminal window (keep the first one running!) and navigate to your React project folder:

Install Node Modules:

Bash
npm install
Start the Development Server:

Bash
npm start
This should open your browser automatically to http://localhost:3000.
