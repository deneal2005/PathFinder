# Pathfinder career discovery prototype

A browser based demonstration of the workflow described in the included career discovery report: profile text to skill extraction, weighted role readiness, explainable skill gaps, and a short learning plan.

## Run it

Open `index.html` in a current browser. To use a local web server instead, run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Try it

- Edit the example profile and select **Find my skills**, or upload a plain text `.txt` resume.
- Open **My skills** to change skill levels or add a skill. Career scores and learning steps update as you make changes.
- Explore **Career matches**, then choose **Build this path** to select a role for the learning plan.
- Mark learning steps done or print the plan. Changes persist in this browser using local storage.

The prototype runs without a server or external API. Skill extraction uses a small, visible-in-code keyword and alias catalogue; the scores use weighted role requirements and the proficiency multipliers explained in the app. ESCO and O*NET labels are illustrative taxonomy references. This is a functional demonstration, not a live job-market feed or a production NLP model.

Visual refinement follows Unslop by Damir Sokolovsky, CC BY 4.0.
