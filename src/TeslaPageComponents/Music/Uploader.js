import React, { Component } from 'react';
import axios from 'axios';


class Uploader extends Component {
    
    state = {
        selectedFile: null
    }

    onFileChange = event => {
        this.setState({ 
            selectedFile: event.target.files[0]
        });
    }

    onFileUpload = () => {
        const fd = new FormData();
        // if(this.state.selectFile){
            fd.append(
                "mySong",
                this.state.selectedFile,
                this.state.selectedFile.name
            )
            console.log("file uploaded...",this.state.selectedFile);
        // } 
        // else {
        //     console.log('no file found');
        // }

        axios.post('http://localhost:5000/upload', fd, {
            onUploadProgress: ProgressEvent =>{
                console.log('Upload progress: ' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + "%")
            } 
        })
        .then(res => {
            console.log(res)
            
        }).catch(error => {
            console.log(error.message)
        });
    }; 

    fileData = () => {
        if(this.state.selectFile){
            return (
                <div>
                    <h2>File Details:</h2>
                    <p> File Name: {}</p>
                    <p>
                        Last Modified: {" "}
                        {this.state.selectedFile.lastModifiedData.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
            <div>
                <br />
                <h4>Choose before Pressing the Upload button</h4>
            </div>
            )
        }
    }

    render(){
        return (
                <div>

                    <div>
                        <h3>Please upload your song here </h3>
                        <input 
                            style= {{display: 'none'}}
                            type="file"
                            onChange={this.onFileChange}
                            ref= {fileInput => this.fileInput = fileInput}/>
                        {/* <input type = "file" onChange={this.onFileChange}/> */}
                        <button onClick ={() => this.fileInput.click()}>Pick a file</button>
                        <button onClick={ this.onFileUpload }>Upload!</button>
                    </div>
                {this.fileData()}

                </div>
                )
    }
}
export default Uploader