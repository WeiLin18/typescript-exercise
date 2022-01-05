"use strict";
class Head {
    constructor() {
        const elem = document.createElement("header");
        elem.innerText = "This is Header";
        document.body.appendChild(elem);
    }
}
class Content {
    constructor() {
        const elem = document.createElement("div");
        elem.innerText = "This is content";
        document.body.appendChild(elem);
    }
}
class Page {
    constructor() {
        new Head();
        new Content();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLElBQUk7SUFDUjtRQUNFLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztRQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU87SUFDWDtRQUNFLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztRQUNuQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLElBQUk7SUFDUjtRQUNFLElBQUksSUFBSSxFQUFFLENBQUM7UUFDWCxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Q0FDRiJ9