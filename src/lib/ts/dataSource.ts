
export const dataSource: Record<string, Record<string, string>[]> = {

    action:
        [
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

    roguelike:
        [
            {
                name: "Dead Cells",
                route: "/roguelike/deadcells",
                icon: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/588650/a431361e5dae5fd6ac2433064b62b2a37abc38f1.jpg",
            }
        ],

    metroidvania:
        [
            {
                name: "Blasphemous",
                route: "/metroidvania/blasphemous",
                icon: "https://pbs.twimg.com/profile_images/1648730826396270609/hBhzTNOg_400x400.png",
            }
        ],
    
    rpg: 
    [
        {
            name:"Stoneshard",
            route:"/rpg/stoneshard",
            icon:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/625960/552aefd08671b2d55291d70f1ad91e63834456fb.jpg"
        }
    ]

};

export const guides: Record<string, Record<string, Record<string, any>[]>> =
{
    "action":
    {

        "thevagrant":
            [
                {
                    icon: "ph:sword-bold",
                    title: "Guia Inicial: The Vagrant",
                    content: `Um guia essencial repleto de dicas e truques para novos 
                    aventureiros que estão começando sua jornada no mundo 
                    misterioso e desafiador de The Vagrant.`,
                    pathname: "/action/thevagrant/guide/1",
                }
            ],

        "shank2":
            [
                {
                    icon: "game-icons:machete",
                    title: "Guia Inicial: Shank 2",
                    content: `Dê os primeiros passos no mundo implacável de Shank 2 
                              com este guia de introdução. Explore o cenário, conheça os 
                              personagens e mergulhe na atmosfera única deste jogo de ação em 
                              estilo de quadrinhos.`,
                    pathname: "/action/shank2/guide/1"
                }
            ],

        "withintheblade":
            [
                {
                    icon: "game-icons:ninja-star",
                    title: "Guia Inicial: Within the B.",
                    content: `Dê os primeiros passos no mundo desafiador de Within the Blade com este guia introdutório.`,
                    pathname: "/action/withintheblade/guide/1",
                }
            ]

    },

    "roguelike":
    {
        "deadcells":
            [
                {
                    icon: "mdi:shield-sword",
                    title: "Guia Inicial: Dead Cells",
                    content: `Um guia essencial para novos aventureiros que estão prestes a explorar as reviravoltas implacáveis do mundo de Dead Cells.`,
                    pathname: "/roguelike/deadcells/guide/1"
                }
            ]
    },

    "metroidvania":
    {
        "blasphemous":
            [
                {
                    icon: "ri:skull-fill",
                    title: "Guia Inicial: Blasphemous",
                    content: `Um guia essencial para novos aventureiros que estão prestes a mergulhar 
                              no mundo sombrio e misterioso de Blasphemous.`,
                    pathname: "/metroidvania/blasphemous/guide/1",
                }
            ]
    },
    
    "rpg":
    {
        "stoneshard":
        [
            {
                icon:"ph:scroll-bold",
                title:"Guia Inicial: Stoneshard",
                content:`Explore o mundo de stoneshard,
                enfrentando desafios épicos com espada e magia.`,
                pathname:"/rpg/stoneshard/guide/1"
            }
        ]
    }

}
