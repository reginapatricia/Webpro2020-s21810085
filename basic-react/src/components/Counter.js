import React, {Component} from "react";

class counter extends React.Component{
    state = {
        number: 0,
    };
    componentDidMount(){
        console.log("Komponen di Mount");
    }
    componentDidUpdate(){
        console.log("Komponen telah diperbarui")
    }
    tambah = () =>{
        this.setState({number:this.state.number + 1});
    }
    kurang = () =>{
        this.state.number < 1
        ? this.setState({number:0})
        : this.setState({number:this.state.number - 1});
    };
    // state = {
    //     number: 0;
    // };
    render(){
        console.log("Komponen di Render")
        return(
            <div>
                <p>Counter Component</p>
                <p>Komponen ini diklik sebanyak {this.state.number} kali.</p>
                <button onClick={this.tambah}>Tambah</button>
                <button onClick={() =>this.kurang}>Kurang</button>
            </div>
        )
    }
}