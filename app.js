
const ancestor=React.createElement("div",
    {id:"ancestor"},
    [
        React.createElement("div",
            {class:"parent"},
            React.createElement(
                "div",
                {id:"child"},
                [
                   React.createElement("div",{class:"grandson"},"this is bro1"),
                   React.createElement("div",{class:"grandson"},"this is bro2") 
                ]
            )
        ),
        React.createElement("div",
            {class:"parent"},
            React.createElement(
                "div",
                {id:"child"},
                [
                   React.createElement("div",{class:"grandson"},"this is bro1"),
                   React.createElement("div",{class:"grandson"},"this is bro2") 
                ]
            )
        )
    ]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(ancestor);