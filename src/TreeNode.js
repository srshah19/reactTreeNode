import React, {Component} from 'react';

export default class TreeNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            selected: false,
            backgroundImage: {
                "folder": "node-type-folder",
                "file": "node-type-file",
                "private": "node-type-private"
            }
        };
    }

    _getFileType(fileType) {
        return this.state.backgroundImage[fileType];
    }

    componentWillReceiveProps(nextProps){
        if(nextProps !== this.state.data){
            // We can add new rows when clicking on "Add" button by changing the props sent to component
        }
    }

    render() {
        let childTree, fileType = this.props.node.type, childNode;
        if (this.props.node.children) {
            childTree = this.props.node.children.map(function (node, index) {
                return (
                    <li key={index}>
                        <TreeNode node={node}/>
                    </li>
                );
            });
        }

        // If Private is true, set different background
        if(this.props.node.private){
            fileType = "private";
        }

        if(this.props.node.children){
            childNode = (
                <ul style={!this.state.visible ? {display: "none"} : {}}>
                    {childTree}
                </ul>
            )
        }

        return (
            <div className="menu-items">
                <div className={"main-header-open "+ (this.state.selected ? "selected" : "")}
                onClick={() => this.setState({visible: !this.state.visible, selected: !this.state.selected}) }>
                    <span
                        className={this.props.node.children ? (this.state.visible ? "node-isOpen" : "node-isClosed") : "node-empty"}/>
                    <span className={this._getFileType(fileType)}/>
                    <h5 className="menu-item-header">
                        {this.props.node.name}
                    </h5>
                </div>
                {childNode}
            </div>
        );
    }
}