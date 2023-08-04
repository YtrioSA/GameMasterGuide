import { computePosition, autoUpdate, offset, shift, flip, arrow } from "@floating-ui/dom";
import { storePopup, popup, type PopupSettings } from "@skeletonlabs/skeleton";
storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

const actionFeatured:       PopupSettings = { event: "focus-click", target: "ActionFeatured",      placement: "right" };
const adventureFeatured:    PopupSettings = { event: "focus-click", target: "adventureFeatured",   placement: "right" };
const metroidvaniaFeatured: PopupSettings = { event: "focus-click", target: "metroidvaniaFeatured",placement: "right" };
const roguelikeFeatured:    PopupSettings = { event: "focus-click", target: "roguelikeFeatured",   placement: "right" };


export const categorySource:Record<string,any>[] = [
    { 
        genero:"Action", 
        icon:"ri:sword-fill",
        actionpopup:actionFeatured
    },
    { 
        genero:"Adventure",
        icon:"heroicons:map-20-solid",
        actionpopup:adventureFeatured
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
    }
];

