import React, { Component } from 'react';
class userLog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                name: "张三",
                age: "18",
                child: ["渲染多维数组"]
            }, {
                name: "李四",
                age: "19",
                child: ["渲染多维数组"]
            }, {
                name: "王五",
                age: "20",
                child: ["渲染多维数组"]
            }],
            curName:'',
            curAge:'',

        };
    }
    getItemAge(item){
        console.log(item)
        this.setState({
            curAge:item.age,
            curName:item.name
        }) 
    } 
    componentDidMount() {
        console.log(this.state.curAge,this.state.curName)
    }
    render() {
        return (
            <div>
                <ul>
                    { 
                        this.state.list.map((item,index)=>{
                            return (
                                <li key={index} onClick={this.getItemAge.bind(this,item)}>{item.name}:{item.age}</li> 
                                // <li key={index} onClick={()=> console.log('click')}>{item.name}:{item.age}</li> 
                            )
                        }) 
                    }
                </ul>
                <div>{this.state.curAge}{this.state.curName}</div>
            </div>
        );
    }
}

export default userLog;