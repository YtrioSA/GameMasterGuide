import { dataSource } from "./dataSource";
const categorys:string[] = [ "action", "adventure", "roguelike","metroidvania" ];

export const pathnames:string[] = [];

categorys.forEach((category) => {;
    dataSource[`${category}`].forEach((routename) => {
        pathnames.push(routename["route"]);
    });
})
