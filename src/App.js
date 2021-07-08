import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from "./components/PhoneInfoList";
import "./App.css";

class App extends Component {
    id = 1
    state = {
        information: [
            {
                id: 0,
                name: "example",
                number: "010-1234-5678"
            },
        ],
        keyword: ""
    }
    handleChange = (e) => {
        this.setState({
            keyword: e.target.value,
        });
    }
    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
            information: information.concat({ id: this.id++, name: data.name, number: data.number })
        })
    }
    handleRemove = (id) => {
        const { information } = this.state;
        this.setState({
            information: information.filter(info => info.id !== id)
        })
    }
    handleUpdate = (id, data) => {
        const { information } = this.state;
        this.setState({
            information: information.map(
                info => id === info.id
                ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
                    : info // 기존의 값을 그대로 유지
            )
        })
    }
    render() {
        const { information, keyword } = this.state;
        const filteredList = information.filter(
            info => info.name.indexOf(keyword) !== -1
        );
        return (
            <div className="all">
                <h1>Phone Book</h1>
                <PhoneForm onCreate={this.handleCreate}/>
                <p>
                    <input
                        placeholder="search name.."
                        onChange={this.handleChange}
                        value={keyword}
                    />
                </p>
                <hr />
                <PhoneInfoList
                    data={filteredList}
                    onRemove={this.handleRemove}
                    onUpdate={this.handleUpdate}
                />
            </div>
        );
    }
}

export default App;
