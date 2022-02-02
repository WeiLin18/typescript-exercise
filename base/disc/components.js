"use strict";
var Components;
(function (Components) {
    class Head {
        constructor() {
            const elem = document.createElement("header");
            elem.innerText = "This is Header";
            document.body.appendChild(elem);
        }
    }
    Components.Head = Head;
    class Content {
        constructor() {
            const elem = document.createElement("div");
            elem.innerText = "This is content";
            document.body.appendChild(elem);
        }
    }
    Components.Content = Content;
})(Components || (Components = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFVLFVBQVUsQ0FlbkI7QUFmRCxXQUFVLFVBQVU7SUFDbEIsTUFBYSxJQUFJO1FBQ2Y7WUFDRSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7WUFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQztLQUNGO0lBTlksZUFBSSxPQU1oQixDQUFBO0lBQ0QsTUFBYSxPQUFPO1FBQ2xCO1lBQ0UsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO1lBQ25DLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLENBQUM7S0FDRjtJQU5ZLGtCQUFPLFVBTW5CLENBQUE7QUFDSCxDQUFDLEVBZlMsVUFBVSxLQUFWLFVBQVUsUUFlbkIifQ==