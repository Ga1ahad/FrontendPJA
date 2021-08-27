import Wardrobe from "./Clothes/Wardrobe.js";
import AddClothes from './Clothes/AddClothes.js';
import EditClothes from './Clothes/EditClothes.js';
import AddTrip from './Trip/AddTrip.js';
import EditTrip from './Trip/EditTrip.js';
import ListTrip from './Trip/ListTrip.js';
import AddSuitcase from './Sets/AddSuitcase';
import Suitcase from './Sets/Suitcase';
import Login from '../Auth/login';
import Register from '../Auth/register';


import { WorkRounded, CalendarTodayRounded, AddRounded, TodayRounded, CollectionsRounded } from '@material-ui/icons';

const pathIds = {
    wardrobe: "wardrobe",
    createSet: 'create-set',
    addCloth: "add-cloth",
    editCloth: "edit-cloth",
    listTrip: "list-trip",
    addTrip: "add-trip",
    editTrip: "edit-trip",
    suitcase: "suitcase",
    login: "sign-in",
    register: "sign-up",
};

const pathRouting = {
    wardrobe: "/clothes/list",
    createSet: '/createSet',
    addCloth: "/clothes/add",
    editCloth: "/clothes/edit/:id",
    listTrip: "/trip/list",
    addTrip: "/trip/add",
    editTrip: "/trip/edit/:id",
    suitcase: "/trip/suitcase/:id",
    login: "login",
    register: "register",
};

const loggedInRoutes = {
    [pathIds.wardrobe]: {
        path: pathRouting.wardrobe,
        sidebarName: "SZAFA",
        component: Wardrobe,
        icon: CollectionsRounded,
    },
    [pathIds.todaySet]: {
        path: pathRouting.createSet,
        sidebarName: 'STWÓRZ SET',
        component: AddSuitcase,
        icon: TodayRounded,
    },
    [pathIds.addCloth]: {
        path: pathRouting.addCloth,
        sidebarName: "DODAJ UBRANIE",
        component: AddClothes,
        icon: AddRounded,
    },
    [pathIds.editCloth]: {
        path: pathRouting.editCloth,
        sidebarName: "EDYTUJ UBRANIE",
        component: EditClothes,
        icon: AddRounded,
    },
    [pathIds.listTrip]: {
        path: pathRouting.listTrip,
        sidebarName: "PODRÓŻE",
        component: ListTrip,
        icon: WorkRounded,
    },
    [pathIds.addTrip]: {
        path: pathRouting.addTrip,
        sidebarName: "PLANOWANIE PODRÓŻY",
        component: AddTrip,
        icon: CalendarTodayRounded,
    },
    [pathIds.editTrip]: {
        path: pathRouting.editTrip,
        sidebarName: "EDYTOWANIE PODRÓŻY",
        component: EditTrip,
        icon: CalendarTodayRounded,
    },
    [pathIds.suitcase]: {
        path: pathRouting.suitcase,
        sidebarName: "WALIZKA",
        component: Suitcase,
        icon: WorkRounded,
    },
};

const navbarRoutes = {
    [pathIds.wardrobe]: {
        path: pathRouting.wardrobe,
        sidebarName: "SZAFA",
        component: Wardrobe,
        icon: CollectionsRounded,
    },
    [pathIds.addCloth]: {
        path: pathRouting.addCloth,
        sidebarName: "DODAJ UBRANIE",
        component: AddClothes,
        icon: AddRounded,
    },
    [pathIds.listTrip]: {
        path: pathRouting.listTrip,
        sidebarName: "PODRÓŻE",
        component: ListTrip,
        icon: WorkRounded,
    },
    [pathIds.addTrip]: {
        path: pathRouting.addTrip,
        sidebarName: "PLANOWANIE PODRÓŻY",
        component: AddTrip,
        icon: CalendarTodayRounded,
    },
};

const notLoggedInRoutes = {
    [pathIds.wardrobe]: {
        path: pathRouting.login,
        sidebarName: "Zaloguj",
        component: Login,
        icon: CollectionsRounded,
    },
    [pathIds.todaySet]: {
        path: pathRouting.register,
        sidebarName: "Zarejestruj się",
        component: Register,
        icon: TodayRounded,
    },

};


export { loggedInRoutes, pathIds, pathRouting, notLoggedInRoutes, navbarRoutes };
