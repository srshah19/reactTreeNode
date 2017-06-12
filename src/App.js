import React, {Component} from 'react';
import './App.css';
import Modal from './Modal';
import TreeNode from './TreeNode';
import data from './data.json';

class EthosChallengeApp extends Component {
    constructor(props) {
        super(props);
        // Assuming for this challenge the data['children'] array is never null, else can add a check to see if data
        // returned is null from fetch and show no menu available of some sort
        this.state = {
            data: data['children']
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextState.data !== this.state.data;
    }

    _getNodes() {
        return this.state.data.map(function (node, index) {
            return (
                <TreeNode key={index} node={node}/>
            )
        });
    }

    // When a new json file is added, the parent component from Modal should update the state
    _handleOnChange(newData){
        let updateData;
        try {
            updateData = JSON.parse(newData);
        } catch (e){
            alert("Incorrect JSON file. Please upload valid JSON.");
            throw new Error("Incorrect JSON File. Please check to make sure the file is valid JSON.");
        }
        // Can possibly add a check here to see if the uploaded data is the same as the current state data.
        // If not same, concat, else provide message saying same data provided, still add?(Maybe user wants to edit later)
        this.setState({data: this.state.data.concat(updateData["children"])});
    }

    render() {
        return (
            <div className="App">
                <p className="App-intro">

                </p>
                <Modal title="Title" onChangeEvent={this._handleOnChange.bind(this)}>
                    {this._getNodes()}
                </Modal>
            </div>
        );
    }
}

export default EthosChallengeApp;
