function Projects(props) {
  return (
    <div className="projects-container">
      <div className="project">
        <div className="project-photo">
          <img
            src="https://github.com/hojoon0724/03-01-mini-portfolio/blob/main/public/project1-resized.png?raw=true"
            alt=""
          />
        </div>
        <div className="project-text-container">
          <div className="project-title">Space News API</div>
          <div className="project-description">
            A website that fetches data from an API and renders the news with a short summary and a link to the article
          </div>
          <div className="project-links">
            <a href="https://github.com/hojoon0724/seal_project1">GitHub</a>
            <a href="https://seal-project1-dusky.vercel.app">Deployed Site</a>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-photo">
          <img
            src="https://github.com/hojoon0724/03-01-mini-portfolio/blob/main/public/projec2-resized.png?raw=true`"
            alt=""
          />
        </div>
        <div className="project-text-container">
          <div className="project-title">Urban Travel Log</div>
          <div className="project-description">
            An app where the user can create a list of cities they travelled and wish to travel using MongoDB
          </div>
          <div className="project-links">
            <a href="https://github.com/hojoon0724/seal_project2">GitHub</a>
            <a href="https://hk-seal-project2.onrender.com/">Deployed Site</a>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-photo">
          <img
            src="https://github.com/hojoon0724/03-01-mini-portfolio/blob/main/public/blackjackCounter-resized.png?raw=true`"
            alt=""
          />
        </div>
        <div className="project-text-container">
          <div className="project-title">Blackjack Card Counting Trainer</div>
          <div className="project-description">
            A tool that lets you play Blackjack and counts cards, allowing the user to train themselves
          </div>
          <div className="project-links">
            <a href="https://github.com/hojoon0724/blackjack">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects
