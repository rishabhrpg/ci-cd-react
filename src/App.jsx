import { APP_VERSION } from './version'
import './App.css'

function App() {
  return (
    <main className="card">
      <h1>DevOps Training</h1>
      <p className="success">CI/CD Deployment Successful</p>
      <p className="version">
        Version: <span id="version">{APP_VERSION}</span>
      </p>
      <p className="footer">Deployed automatically using GitHub Actions</p>
    </main>
  )
}

export default App
