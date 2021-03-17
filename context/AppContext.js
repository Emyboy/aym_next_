import React, { Component } from 'react';

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



            setContextState: this.setContextState.bind(this)
        };

        this.setContextState = this.setContextState.bind(this)

    }

    async componentDidMount() {
        this.setState({
            auth: JSON.parse(localStorage.getItem('auth'))
        })
    }

    setContextState(newState){
        this.setState(newState)
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
