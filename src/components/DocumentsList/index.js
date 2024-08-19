import {Component} from 'react'

import './index.css'

class DocumentsList extends Component {
  state = {
    documentsList: [],
  }

  componentDidMount() {
    this.getDocuments()
  }

  getDocuments = async () => {
    try {
      const response = await fetch('http://localhost:3000/documents')
      if (response.ok) {
        const fetchedData = await response.json()
        this.setState({documentsList: fetchedData})
      }
    } catch (error) {
      console.error('Failed to fetch:', error)
      alert('Failed to fetch')
    }
  }

  render() {
    const {documentsList} = this.state

    return (
      <div className="document-list-container">
        <h2>Documents</h2>
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

export default DocumentsList
