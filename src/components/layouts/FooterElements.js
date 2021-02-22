import React from 'react'

const footerStyles = {
  backgroundColor: '#e3143e',
  bottom: 0,
}

const anchorStyles = {
  color: '#f7f7f5'
}

const FooterWrapper = class extends React.Component {
  render() {
    return (
      <div className = "app-footer">
      <footer className="footer" style = {footerStyles}>
        
        <div className="content">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <a title="Report a bug on our Github Repo" style = {anchorStyles} href="https://github.com/sarthakkundra/Github-Finder/issues">
                  Report a bug
                </a>
                </div>
                <div className="column is-4"> 
                <a title="Request a feature" style = {anchorStyles} href="https://github.com/sarthakkundra/Github-Finder/issues">
                  Request a feature
                </a>
                </div>
                <div className="column is-4">
                <a title="Contribute" style = {anchorStyles} href="https://github.com/sarthakkundra/Github-Finder">
                  Contribute to Repository
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    )
  }
}

export default FooterWrapper