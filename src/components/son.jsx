import React, { Component } from 'react'; 
import PropTypes from 'prop-types';

class Son extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
        };
    }
    componentDidMount() {
        // 通过this.props接受父组件的值和方法
        this.props.func()
        console.log(this.props.parent)
        this.props.getChild(this)
    }
    changeName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    render() {
        return ( 
            <div>
                {this.props.title}
                {this.state.name}
                <input type="text" value={this.state.name} onChange={this.changeName}/>    
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