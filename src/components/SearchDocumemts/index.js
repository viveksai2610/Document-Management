import {Component} from 'react'
import {MdSearch} from 'react-icons/md'
import './index.css'

class SearchDocumemts extends Component {
  state = {
    searchInput: '',
    documentsList: [],
  }

  getDocuments = async () => {
    try {
      const {searchInput} = this.state
      const response = await fetch(
        `http://localhost:3000/documents/search?query=${searchInput}`,
      )
      if (response.ok) {
        const fetchedData = await response.json()
        this.setState({documentsList: fetchedData})
      }
    } catch (error) {
      console.error('Failed to fetch:', error)
      alert('Failed to fetch')
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, documentsList} = this.state

    return (
      <div className="search-container">
        <h2>Search Documents</h2>
        <div className="search-icon-container">
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
            placeholder="Search..."
          />
          <div className="search-icon-bg-container">
            <MdSearch onClick={this.getDocuments} className="search-icon" />
          </div>
        </div>
        <ul>
          {documentsList.map(eachDoc => (
            <li key={eachDoc.id}>
              {eachDoc.name} ({eachDoc.isPublic ? 'Public' : 'Private'})
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default SearchDocumemts
