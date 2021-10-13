import React, { Component } from 'react'; 
import PropTypes from 'prop-types';

class Son extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();  
        this.state = {
            name:'',
            flag:false
        };
    }
    componentDidMount() {
        // 通过this.props接受父组件的值和方法
        this.props.func()
        console.log(this.props.parent)
        this.props.getChild(this)
    }
    componentWillUnmount(){

    }
    changeName=(e)=>{
        this.setState({
            name:e.target.value
        })
        // this.myRef.current.focus()
    }
    UserGreeting() {
        return <h1>Welcome back!</h1>;
    }
      
    GuestGreeting() {
        return <h1>Please sign up.</h1>;
    }
    render() {
        let inputDiv;
        if(this.state.flag){
            inputDiv = this.UserGreeting();
        }else{
            inputDiv = this.GuestGreeting();
        } 
        return ( 
            <div> 
                {this.state.flag?this.props.title:this.state.name}
                {inputDiv}
                <input type="text" ref={this.myRef} value={this.state.name} onChange={this.changeName}/>    
            </div> 
        );
    }
}

// 如果父组件没有传入title值，赋默认值
Son.defaultProps = {
    title: "标题"
}

// 通过PropTypes 验证传入的title 为string类型
Son.propTypes = {
    title: PropTypes.string
};
export default Son;