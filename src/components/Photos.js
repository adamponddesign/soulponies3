import React from 'react'
import ModalImage from 'react-modal-image'
import './Photos.scss'
import { photos1, photos2 } from './PhotosContent'

class Photos extends React.Component {

  render () {
    return (
      <section>
        <h2>Photos</h2>

        <div className="row">
          <div className="column">
            {photos1.map(photo => (
              <ModalImage
                key={photo.id}
                small={photo.small}
                large={photo.large}
                style={{ width: '100%' }}
                hideDownload='true'
                hideZoom='true'
              />
            ))}
          </div>

          <div className="column">
            {photos2.map(photo => (
              <ModalImage
                key={photo.id}
                small={photo.small}
                large={photo.large}
                style={{ width: '100%' }}
                hideDownload='true'
                hideZoom='true'
              />
            ))}
          </div>


          <div className="column">
            {photos1.map(photo => (
              <ModalImage
                key={photo.id}
                small={photo.small}
                large={photo.large}
                style={{ width: '100%' }}
                hideDownload='true'
                hideZoom='true'
              />
            ))}
          </div>

        </div>

      </section>
    )
  }
}
export default Photos
