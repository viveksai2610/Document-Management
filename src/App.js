import {Component} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {MdHome, MdUpload, MdOutlineSearch} from 'react-icons/md'
import Upload from './components/Upload'
import SearchDocumemts from './components/SearchDocumemts'
import DocumentsList from './components/DocumentsList'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="nav-menu-container">
            <a href="/">Home</a>
            <a href="/upload">Upload</a>
            <a href="/search">Search</a>
          </nav>
          <nav className="nav-menu-moblie-view-container">
            <a href="/">
              <MdHome className="nav-icon" />
            </a>
            <a href="/upload">
              <MdUpload className="nav-icon" />
            </a>
            <a href="/search">
              <MdOutlineSearch className="nav-icon" />
            </a>
          </nav>
          <div className="container">
            <Routes>
              <Route path="/" element={<DocumentsList />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/search" element={<SearchDocumemts />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
