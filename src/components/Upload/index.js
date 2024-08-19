import {Component} from 'react'
import './index.css'

class Upload extends Component {
  state = {
    files: [],
    isPublic: true,
  }

  handleFileChange = event => {
    const newFile = event.target.files
    this.setState(prevState => ({
      files: [...prevState.files, newFile],
    }))
  }

  handlePublicChange = event => {
    this.setState({isPublic: event.target.checked})
  }

  onClickUpload = async () => {
    const {files, isPublic} = this.state

    if (files.length === 0) {
      alert('Please select at least one file to upload')
      return
    }

    const formData = new FormData()

    files.forEach(eachFile => formData.append('file', eachFile))

    formData.append('isPublic', isPublic)

    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      await fetch('http://localhost:5000/upload', options)

      alert('Upload successful')
    } catch (error) {
      console.error('Upload error:', error)
      alert('Upload failed')
    }
  }

  render() {
    const {files, isPublic} = this.state

    return (
      <div className="upload-container">
        <h2>Upload Document</h2>
        <input type="file" onChange={this.handleFileChange} />
        <h4>Number of Files Selected <span>{files.length}</span></h4>
        <label>
          <input
            type="checkbox"
            checked={isPublic}
            onChange={this.handlePublicChange}
          />
          Public
        </label>
        {isPublic && (
          <p>
            <span>* </span> Your document is available to everyone and can be
            viewed or accessed by anyone without any restrictions.
          </p>
        )}
        <button type="button" onClick={this.onClickUpload}>
          Upload
        </button>
      </div>
    )
  }
}

export default Upload
