// import React from 'react'

// export default function Canvas() {
//     return (
//             <div className="axil-post-details">
//                 <h1>Article Title</h1>

//             </div>
//     )
// }


import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { withTheme } from "../../context/AppContext";
import { resetServerContext } from "react-beautiful-dnd";
import RenderJSX from "./RenderJSX";

// fake data generator
const getItems = count =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k}`,
        content: `item ${k}`
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    // padding: grid * 2,
    // margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "inherit",

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "inherit",
    // padding: grid,
    // width: 250
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.getItems(10),
        };
        this.onDragEnd = this.onDragEnd.bind(this);
        this.getItems = this.getItems.bind(this);
    }

    getItems(count) {
        return this.props.state.builder.map(k => ({
            id: `item-${k.id}`,
            content: `item ${k.content}`,
            tag: k.tag
        }));
    }
    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );

        // this.setState({
        //     items
        // });
        this.props.setState({
            ...this.props.state,
            builder: items
        })
        // console.log('ITEMS --', items);
    }

    componentDidMount() {
        if (this.props.state.property) {
            this.props.setState({
                ...this.props.state,
                property: null,
                propertyTag: null
            })
        }
        console.log('CANVAS PROPS --', this.props)
    }




    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                        >
                            {this.state.items.map((item, index) => {
                                console.log('EACH ITEM --', item);
                                return <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}
                                        >
                                            <RenderJSX
                                                content={item.content}
                                                tag={item.tag}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}


// Put the thing into the DOM!
export default withTheme(App)
