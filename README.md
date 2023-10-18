# Furry Writer
A new furry writing site. Name is currently TBD

All frontend pieces will be run in the `web` directory

All backend pieces win be run in the `api` directory 

# Summary
The primary motivation behind building this site is the furry writing community does not have a good site to store written works and the flip side the readers do not have a convient site to read stories. Most of the current sites have writing as a secondary thought. Whether that be from lack of text editing support, horrible tagging systems, or just no formatting done to provide an enjoyable reading experience.

## Key Features
The site needs the following features to be usable. No exceptions.

- Tagging System
    - The tagging system needs to be similar in scope to e621
    - Aliasing tags and a large set of tags to use
- Searching
    - Works with the tagging system
    - More robust than what is on FA
    - EASY to use
- Story Editing Tools
    - Robust WYSIWYG for writers
    - Draft editing
    - PDF Import
    - PDF Export
- Reading Tools
    - Native font size changing
    - Bookmarks
- Flagging System
    - Content Flagging system that allows users to mark inappropriate content
    - Strike system for both sides of the flag
    - User gives too many false flags, they get removed
    - User receives too many false flags that are positive matches, they get removed

## Tech Stack
### Frontend:
- NodeJS
- React
- NextJS
- Tailwind
- SASS

### Backend:
- Golang
- OpenSearch
- PostgreSQL

# Installation
### Required Tools
- NodeJS
- Golang
- OpenSearch
- Docker
- PostgreSQL

## Frontend
Run `npm i`

## Backend
TBD

# Running
## Frontend
For development server - `npm run start`
For production build - `npm run build`

## Backend
TBD