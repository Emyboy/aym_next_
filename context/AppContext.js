import axios from 'axios';
import React, { Component } from 'react';
import Global from '../Global';

export const AppContext = React.createContext({
    auth: null,
    categories: []
});

export class AppContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: null,
            categories: [],
            builder: Global.BUILDER_MOCK,


            setContextState: this.setContextState.bind(this),
            getAllCategory: this.getAllCategory.bind(this)
        };

        this.setContextState = this.setContextState.bind(this)

    }

    async componentDidMount() {
        this.setState({
            auth: JSON.parse(localStorage.getItem('auth')),
            categories: JSON.parse(localStorage.getItem('cat'))
        })
    }

    setContextState(newState){
        this.setState(newState)
    }

    getAllCategory(){
        axios(Global.API_URL +'/categories')
            .then(res => {
                console.log(res)
                localStorage.setItem('cat', JSON.stringify(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        return (
            <AppContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }

}

export function withTheme(Component) {
    return function ThemedComponent(props) {
        return (
            <AppContext.Consumer>
                {(context) => <Component {...props} context={context} />}
            </AppContext.Consumer>
        );
    };
}
