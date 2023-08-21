
import { computePosition, autoUpdate, offset, shift, flip, arrow } from "@floating-ui/dom";
import { storePopup, popup, type PopupSettings } from "@skeletonlabs/skeleton";
storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

const actionFeatured:       PopupSettings = { event: "focus-click", target: "ActionFeatured",      placement: "right" };
const metroidvaniaFeatured: PopupSettings = { event: "focus-click", target: "metroidvaniaFeatured",placement: "right" };
const roguelikeFeatured:    PopupSettings = { event: "focus-click", target: "roguelikeFeatured",   placement: "right" };
const rpgFeatured:          PopupSettings = { event: "focus-click", target: "rpgFeatured",         placement: "right" };

export const categorySource:Record<string,any>[] = 
[
    { 
        genero:"Action", 
        icon:"ri:sword-fill",
        actionpopup:actionFeatured
    },
   
    { 
        genero:"Metroidvania",
        icon:"fluent:key-16-filled",
        actionpopup:metroidvaniaFeatured
    },

    { 
        genero:"Roguelike",
        icon:"game-icons:maze-cornea",
        actionpopup:roguelikeFeatured
    },


    { 
        genero:"RPG",
        icon:"mdi:dice-d20",
        actionpopup:rpgFeatured
    }
];