import icons from "./icon";

const { MdOutlineLibraryMusic, 
        FiHeadphones,
        FiGlobe,
        FiUsers

    } = icons;

export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icons: <MdOutlineLibraryMusic size={24}/>
    },
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icons: <FiGlobe size={24}/>
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <FiHeadphones size={24}/>
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        icons: <FiUsers size={24}/>
    }
]