import React, {Component} from 'react';

export default  class GenericModal extends Component {

    constructor(props) {
        super(props);
    }

    uploadData(evt) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            this.props.onChangeEvent(reader.result);
        });
        try {
            reader.readAsText(evt.target.files[0]);
        } catch(e) {
            throw new Error(e)
        }
    }

    render() {
        return (
            <div className="modal">
                <div className="modal-header">
                    <h4>{this.props.title}</h4>
                    <span className="modal-close"/>
                </div>
                <div className="modal-body">
                    <input type="text" placeholder="Label" className="modal-input-label"/>
                    <hr />
                    {this.props.children}
                </div>
                <div className="modal-footer">
                    <a className="links">Link</a>
                    <label className="btn submit-btn" htmlFor="fileUpload">Upload</label>
                    <input style={{display: 'none'}} id="fileUpload"
                           accept=".json" type="file"
                           onChange={this.uploadData.bind(this)}/>
                </div>
            </div>
        )
    }
}