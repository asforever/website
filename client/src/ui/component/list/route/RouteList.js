export class RouteList {
    constructor({name,path} = {}){
        this.name = name;
        this.path = path;
        this.redirect = null;
        this.children =  [];
        this.component = null;
    }

    setComponent(component){
        this.component = component;
    }

    setRedirect(redirectURL){
        this.redirect = redirectURL;
    }

    addChildren(routeList){
        this.children.push(routeList)
    }
}

export default RouteList;
