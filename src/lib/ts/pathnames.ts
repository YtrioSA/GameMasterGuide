import { dataSource } from "./dataSource";
const categorys:string[] = [ "action", "roguelike","metroidvania", "rpg" ];

export const pathnames:string[] = [];

categorys.forEach((category) => {;
    dataSource[`${category}`].forEach((routename) => {
        pathnames.push(routename["route"]);
    });
})
