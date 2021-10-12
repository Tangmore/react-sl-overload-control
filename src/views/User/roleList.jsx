import React, { Component } from 'react'; 
import Son from '@/components/son';
class roleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"测试父传子",

        };
    }
    componentDidMount() {
         
    }
    run = () => {
        console.log("我的来自父组件的方法")
    }
    getChild = (child) => {
        // 获取整个子组件的实例
        // 也可以通过使用ref获取
        console.log(child)
    }
    render() {
        return ( 
            <div>
                <Son title={this.state.title} func={this.run} parent={this} getChild={this.getChild}></Son>
                    
            </div> 
        );
    }
}

export default roleList;