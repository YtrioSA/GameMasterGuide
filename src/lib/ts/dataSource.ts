
export const dataSource: Record<string, Record<string, any>[]> = {

    action: [
        {
            name: "The Vagrant",
            route: "/action/thevagrant",
            icon: "https://cdn.cloudflare.steamstatic.com/steam/apps/598700/capsule_616x353.jpg?t=1687393752",
        },
        {
            name: "Shank 2",
            route: "/action/shank2",
            icon: "https://cdn.cloudflare.steamstatic.com/steam/apps/102840/capsule_616x353.jpg?t=1687393752",
        },
        {
            name: "Within The Blade",
            route: "/action/withintheblade",
            icon: "https://cdn.cloudflare.steamstatic.com/steam/apps/622870/capsule_616x353.jpg?t=1687393752",
        }

    ],

    adventure: [ 
        {
            name: "Retro Machina: Nu.",
            route: "/adventure/retromachina",
            icon: "https://cdn.cloudflare.steamstatic.com/steam/apps/1582850/capsule_616x353.jpg?t=1687393752",
        },
        {
            name: "SteamWorld Dig",
            route: "/adventure/steamworlddig",
            icon: "https://cdn.cloudflare.steamstatic.com/steam/apps/252410/capsule_sm_120.jpg?t=1652848363",
        },
        {
            name: "SteamWorld Dig 2",
            route: "/adventure/steamworlddig2",
            icon: "https://cdn.cloudflare.steamstatic.com/steam/apps/571310/capsule_sm_120.jpg?t=1652848363",
        }
    ],

    roguelike: [
        {
            name: "Darkest Dungeon",
            route: "/roguelike/darkestdungeon",
            icon: "https://cdn.cloudflare.steamstatic.com/steam/apps/262060/header.jpg?t=1689815545",
        },
        {
            name: "Dead Cells",
            route: "/roguelike/deadcells",
            icon: "https://cdn.cloudflare.steamstatic.com/steam/apps/588650/capsule_sm_120.jpg?t=1652848363",
        },
        {
            name: "Shing!",
            route: "/roguelike/shing!",
            icon: "https://cdn.cloudflare.steamstatic.com/steam/apps/1103730/capsule_sm_120.jpg?t=1652848363",
        }
    ],

    metroidvania: [ 
        {
            name: "Blasphemous",
            route: "/metroidvania/blasphemous",
            icon: "https://pbs.twimg.com/profile_images/1648730826396270609/hBhzTNOg_400x400.png",
        }
    ]

};

export const guides:Record<string,Record<string,Record<string,string>[]>> = 
{
    "action": {
        
        "thevagrant": [
            { 
                icon: "fluent:book-24-filled",
                title: "Louco zuadeiro",
                content: `Estratégias de combate e dicas preciosas,
                o guia oferece uma visão
                abrangente do mundo misterioso do jogo.`,
                pathname:"/action/thevagrant/guide/1"
            },
            { 
                icon: "fluent:book-24-filled",
                title: "Trilhas do Destino",
                content: `Estratégias de combate e dicas preciosas,
                o guia oferece uma visão
                abrangente do mundo misterioso do jogo..`,
                pathname:"/action/thevagrant/guide/2"
            }
        ],

        "shank2": [
            {
                icon: "ph:skull-fill", 
                title: "Navegando em Terras Desconhecidas",
                content: `Estratégias de combate e dicas preciosas,
                    o guia oferece uma visão
                    abrangente do mundo misterioso do jogo.`,
                pathname:"/action/shank2/guide/1"
            },
            {
                icon: "mdi:volume-source",
                title: "Trilhas do Destino",
                content: `Estratégias de combate e dicas preciosas,
                    o guia oferece uma visão
                    abrangente do mundo misterioso do jogo..`,
                pathname:"/action/shank2/guide/2"
            }
        ],

        "withintheblade": [ 
            {
                icon: "ph:skull-fill",
                title: "Navegando em Terras Desconhecidas",
                content: `Estratégias de combate e dicas preciosas,
                o guia oferece uma visão
                abrangente do mundo misterioso do jogo.`,
                pathname:"/action/withintheblade/guide/1"
            },
            {
                icon: "mdi:volume-source",
                title: "Trilhas do Destino",
                content: `Estratégias de combate e dicas preciosas,
                o guia oferece uma visão
                abrangente do mundo misterioso do jogo..`,
                pathname:"/action/withintheblade/guide/2"
            }
        ]

    },

    "adventure": {
        "retromachina":[],"steamworlddig":[],"steamworlddig2":[]
    },

    "roguelike": {
        "darkestdungeon":[],"deadcells":[],"shing!":[]
    },

    "metroidvania": { "blasphemous": [] }

}
